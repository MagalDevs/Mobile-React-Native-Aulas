import { View, Text, Alert } from "react-native";
import { useAuth } from "../context/auth";
import { styles } from "../styles/basic";
import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { routeToScreen } from "expo-router/build/useScreens";

export default function Home() {
    const { user } = useAuth()
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        try {
            const token = SecureStore.getItem('token');
            if (token) {
                setToken(token);
            } else {
                setToken(user.uid);
                Alert.alert('Você precisa estar logado para acessar essa página.')
            }
        } catch (error) {
            console.log("vish");
        }
        setToken(user.uid);
    }, []);

    return (
        <View style={styles.container}>
            <Text>Seja Bem-vindo, {user.email}</Text>
            <Text>Token: {token}</Text>
            <Link href='/camera'>WebCam</Link>
            <Link href='/profile'>perfil</Link>
        </View>
    )
}