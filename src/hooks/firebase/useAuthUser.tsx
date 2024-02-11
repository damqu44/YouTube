'use client'
import React, { useEffect, useMemo, useState, createContext, useContext } from "react";
import { auth } from '@/lib/firebase/firebase'
import { User as FirebaseUser } from '@firebase/auth'
interface AuthUser {
    user: FirebaseUser | null;
    isLoading?: boolean;
}

const AuthUserContext = createContext<AuthUser>({user: null})

export const useAuthUser = () => useContext(AuthUserContext);

interface AuthUserProviderProps {
    children: React.ReactNode;
}
export const AuthUserProvider: React.FC <AuthUserProviderProps>= ({ children }) => {
    const [user, setUser] = useState(auth.currentUser);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthUserContext.Provider value={{ user, isLoading }}>
            {children}
        </AuthUserContext.Provider>
    );
};
