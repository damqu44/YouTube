import {UserAuth} from "@/contexts/AuthContext";

export const isAuthenticated = ():boolean => {
    const {user} = UserAuth()
    return !!user?.email
}
