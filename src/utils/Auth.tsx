import {UserAuth} from "@/contexts/AuthContext";

export const isAuthenticated = ():boolean => {
    const {user} = UserAuth()
    return !!user?.email
}


export const getUser = (): Promise<boolean> => {
    return new Promise((resolve) => {
        const { user } = UserAuth();

        if (user) {
            resolve(true);
        } else {
            resolve(false);
        }
    });
};