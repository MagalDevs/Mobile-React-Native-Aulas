import { CameraView } from "expo-camera";
import { View, Image } from "react-native";
import { styles } from "../styles/basic";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, Divider } from "react-native-paper";

export default function Camera() {
    const [foto, setFoto] = useState("")
    let cameraRef: CameraView | null = null

    const takePicture = async () => {
        if (cameraRef) {
            const tempFoto = await cameraRef.takePictureAsync()
            console.log(tempFoto.uri);

            if (tempFoto) {
                setFoto(tempFoto.uri)
            }
        }
    }

    return (
        <View style={styles.container}>
            <CameraView facing="front" ref={(ref) => { cameraRef = ref }} />
            <Button onPress={takePicture} style={styles.mt20} mode="contained">Tirar Foto</Button>
            <Divider style={styles.mt20} />
            <Image source={{ uri: foto }} style={{ width: '100%', height: 300, marginTop: 20 }} />
            <Link href='/home'>voltar</Link>
        </View>
    )
}