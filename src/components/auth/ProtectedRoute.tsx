'use client'
import React, {ReactNode, useEffect} from "react";
import {useRouter} from "next/navigation";
import {isAuthenticated} from "@/utils/Auth";

interface ProtectedRouteProps {
    children: ReactNode;
}


const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
    const isAuth = isAuthenticated()

    // const router = useRouter()
    // useEffect(() => {
    //     if (!isAuth) {
    //         router.push('/');
    //     }
    // }, [isAuth, router]);

    if (!isAuth) {
        return null;
    }

    return <>{children}</>;
}

export default ProtectedRoute