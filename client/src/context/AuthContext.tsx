import { createContext, ReactNode, useContext, useState } from "react";

type User = {
    id: string;
    name: string;
    email: string;
    profilePicture: string;
};

interface AuthContextProps {
    authUser: User | null;
    setAuthUser: (user: string | null) => void;
}

const defaultAuthContext: AuthContextProps = {
    authUser: null,
    setAuthUser: () => { },
};

export const AuthContext = createContext<AuthContextProps>(defaultAuthContext);

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {

    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user") as string) || null)

    return <AuthContext.Provider value={{ authUser, setAuthUser }}>
        {children}
    </AuthContext.Provider>

}
