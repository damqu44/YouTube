'use client'
import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {auth, db} from '@/lib/firebase/firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User as FirebaseUser,
} from 'firebase/auth'
import {doc, setDoc} from "@firebase/firestore";

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextProps {
    user: FirebaseUser | null;
    signUp?: (email: string, password: string) => Promise<any>;
    logIn?: (email: string, password: string) => Promise<any>;
    logOut?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({user: null});

export const AuthContextProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<FirebaseUser | null>(null);
    console.log()

    function signUp(email: string, password: string): Promise<any> {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setDoc(doc(db, 'users', email), {
                    subscriptions: [],
                    likedVideos: []
                })
                return userCredential
            })
            .catch((error) => {
                console.log(error)
                throw error
            })
    }

    function logIn(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return <AuthContext.Provider value={{signUp, logIn, logOut, user}}>{children}</AuthContext.Provider>
}

export function UserAuth() {
    return useContext(AuthContext)
}