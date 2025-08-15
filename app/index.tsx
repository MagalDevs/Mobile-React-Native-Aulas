import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useAuth } from "../context/auth";
import { styles } from "../styles/basic";

export default function Login(){
    const {user, handleLogin, setUser} = useAuth()

    return(
        <View style={styles.container}>
            <TextInput label="E-mail" onChangeText={text => setUser({...user, email: text})}/>
            <TextInput label="Senha" secureTextEntry style={styles.mt20} onChangeText={text => setUser({...user, password: text})}/>
            <Button mode="contained" style={styles.mt20} onPress={handleLogin}>Entrar</Button>
        </View>
    )
}