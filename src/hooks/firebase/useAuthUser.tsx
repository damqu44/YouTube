'use client'
import React, {useEffect, useState, createContext, useContext} from "react";
import {auth, db} from '@/lib/firebase/firebase'
import {User as FirebaseUser} from '@firebase/auth'
import {doc, getDoc} from "@firebase/firestore";
import {UserItem} from "@/lib/types";

interface AuthUser {
    user: UserItem | null;
    isLoading: boolean;
}

const AuthUserContext = createContext<AuthUser>({user: null, isLoading: true})

export const useAuthUser = () => useContext(AuthUserContext);

interface AuthUserProviderProps {
    children: React.ReactNode;
}

export const AuthUserProvider: React.FC<AuthUserProviderProps> = ({children}) => {
    const [user, setUser] = useState<UserItem | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        setIsLoading(true)
        const unsubscribe = auth.onAuthStateChanged(async (user: FirebaseUser | null) => {
            if (user && user.email) {
                try {
                    const userRef = doc(db, 'users', user.email)
                    const userDoc = await getDoc(userRef)
                    const userData = userDoc.data() as UserItem | null
                    if (userData) setUser(userData)
                } catch (error) {
                    console.error('Błąd podczas pobierania danych użytkownika:', error)
                    setUser(null)
                }
            } else {
                setUser(null)
            }
        })
        setIsLoading(false)
        return () => unsubscribe()
    }, [])

    return (
        <AuthUserContext.Provider value={{user, isLoading}}>
            {children}
        </AuthUserContext.Provider>
    )
}
