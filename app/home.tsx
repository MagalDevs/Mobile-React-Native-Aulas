import { View, Text } from "react-native";
import { useAuth } from "../context/auth";
import { styles } from "../styles/basic";

export default function Home(){
    const { user } = useAuth()
    return(
        <View style={styles.container}>
            <Text>Seja Bem-vindo, {user.email}</Text>
        </View>
    )
}