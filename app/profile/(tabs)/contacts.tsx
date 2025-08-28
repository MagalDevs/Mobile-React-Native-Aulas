import { useEffect, useState } from "react"
import { View, Text, FlatList } from "react-native"
import { styles } from "../../../styles/basic"

interface User {
    id: number,
    name: string,
    phone: string
}

export default function Contatos() {
    const [contatos, setContatos] = useState<User[]>([])
    async function carregarDados() {
        const resultado = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await resultado.json()
        setContatos(json)
    }

    const renderItem = ({ item }: { item: User }) => (
        <View key={item.id}>
            <Text> * {item.name} - {item.phone}</Text>
        </View>
    )

    useEffect(() => {
        carregarDados()
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Contatos</Text>

            <FlatList data={contatos} renderItem={renderItem} keyExtractor={item => item.name} />

        </View>
    )
}