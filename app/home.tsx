import { View, Text } from "react-native";
import { useAuth } from "../context/auth";
import { styles } from "../styles/basic";
import { Link } from "expo-router";

export default function Home() {
    const { user } = useAuth()
    return (
        <View style={styles.container}>
            <Text>Seja Bem-vindo, {user.email}</Text>
            <Link href='/camera'>WebCam</Link>
        </View>
    )
}