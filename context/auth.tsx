import { router } from "expo-router"
import React, { createContext, useContext, useState } from "react"

interface IUser {
    email: string
    password: string
}

interface IAuthContext {
    user: IUser
    setUser: (user: IUser) => void
    handleLogin: () => void
}

interface IAuthProviderProps {
    children: React.ReactNode
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider: React.FC<IAuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<IUser>({email: "", password: ""})

    function handleLogin(){
        if(!user || user.email != "admin" || user.password != "admin"){
            alert("Email ou senha inválidos");
            return;
        }

        router.push('home')
    }

    return(
        <AuthContext.Provider value={{user, handleLogin, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}