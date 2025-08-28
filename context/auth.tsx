import { router } from "expo-router"
import React, { createContext, useContext, useState } from "react"
import { initializeAuth, signInWithEmailAndPassword } from "firebase/auth"
import app from "../firebase/firebase"
import * as SecureStore from "expo-secure-store";
interface IUser {
    uid: string
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

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<IUser>({ email: "", password: "", uid: "" })

    function handleLogin() {
        if (!user || user.email == "" || user.password == "") {
            alert("Email ou senha inválidos");
            return;
        }

        const auth = initializeAuth(app)
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((response: any) => {
                console.log(response);
                setUser({ ...user, uid: response._tokenResponse.localId })
                try {
                    SecureStore.setItem('token', user.uid);
                } catch (error) {
                    console.log("SecureStore indisponivel");
                }
                router.push('home')
            })
            .catch(() => {
                alert('Usuário ou senha inválidos.')
            })
    }

    return (
        <AuthContext.Provider value={{ user, handleLogin, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}