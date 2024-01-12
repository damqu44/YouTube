'use client'
import React, {ReactNode, useEffect} from "react";
import {useRouter} from "next/navigation";
import {UserAuth} from "@/contexts/AuthContext";

interface ProtectedRouteProps {
    children: ReactNode;
}


const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
    const router = useRouter()
    const {user} = UserAuth()
    console.log(user)

    useEffect(() => {
        console.log(user)

        if (!user) {
            router.push('/');
        }
    }, [user, router]);

    if (!user) {
        return null;
    }

    return <>{children}</>;
}

export default ProtectedRoute