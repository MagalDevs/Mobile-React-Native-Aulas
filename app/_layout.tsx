import { PaperProvider } from "react-native-paper";
import { Slot } from 'expo-router';
import { AuthProvider } from "../context/auth";

export default function Layout(){
    return(
        <PaperProvider>
            <AuthProvider>
                <Slot/>
            </AuthProvider>  
        </PaperProvider>
    )
}