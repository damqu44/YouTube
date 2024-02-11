import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";

import {APIResponse} from "@/lib/types";
import {auth, db} from "./firebase";
import {doc, getDoc, setDoc} from "@firebase/firestore";

export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    try {
        const userCreds = await signInWithPopup(auth, provider);
        const idToken = await userCreds.user.getIdToken();
        const userEmail = userCreds.user.email

        if(userEmail) {
            const userDocRef = doc(db, 'users', userEmail);
            const userDocSnapshot = await getDoc(userDocRef);

            if (!userDocSnapshot.exists()) {
                // User doesn't exist in the database, create a new user
                await setDoc(userDocRef, {
                    subscriptions: [],
                    savedVideos: [],
                    likedVideos: [],
                    disLikedVideos: [],
                    likedShorts: [],
                    disLikedShorts: [],
                });
            }
        }

        const response = await fetch("/api/auth/sign-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({idToken}),
        })

        const resBody = (await response.json()) as unknown as APIResponse<string>;
        return response.ok && resBody.success;

    } catch (error) {
        console.error("Error signing in with Google", error);
        return false;
    }
}

export async function signOut() {
    try {
        await auth.signOut();

        const response = await fetch("/api/auth/sign-out", {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const resBody = (await response.json()) as unknown as APIResponse<string>;
        if (response.ok && resBody.success) {
            return true;
        } else return false;
    } catch (error) {
        console.error("Error signing out with Google", error);
        return false;
    }
}