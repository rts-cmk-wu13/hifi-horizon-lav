import { useState, createContext, useContext } from "react";
import {
    readFromSessionStorage,
    removeFromSessionStorage,
    saveToSessionStorage,
} from "../utils/localstorage";
import queryClient from "../api/queryClient";

type AuthContextType = {
    token: string | null;
    login: (newToken: string | null) => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {

    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;

}

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
    const [token, setToken] = useState<string | null>(
        readFromSessionStorage("token")
    );

    function login(newToken: string | null) {
        setToken(newToken);
        saveToSessionStorage("token", newToken);
        saveToSessionStorage("sessionStart", Date.now())
        saveToSessionStorage("justLoggedIn", true);
        queryClient.invalidateQueries({queryKey: ['me']})
    }

    function logout() {
        setToken(null);
        removeFromSessionStorage("token");
        removeFromSessionStorage("sessionStart");
        removeFromSessionStorage("justLoggedIn");
        queryClient.invalidateQueries({queryKey: ['me']})
    }

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
