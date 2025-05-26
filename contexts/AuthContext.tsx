"use client";

import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;
};

type AuthResponseType = { loggedIn: true } | { loggedIn: false };

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        async function checkAuth() {
            try {
                const res = await fetch("/api/auth/me", { method: "GET" });
                const data = (await res.json()) as AuthResponseType;
                const loggedInState = res.ok && data.loggedIn;

                setIsLoggedIn(loggedInState);
            } catch {
                setIsLoggedIn(false);
            }
        }
        void checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};
