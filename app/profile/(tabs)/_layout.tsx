import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Início",
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
                }}
            />
            <Tabs.Screen
                name="configuration"
                options={{
                    title: 'Configurações',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />
                }}
            />
            <Tabs.Screen
                name="contacts"
                options={{
                    title: 'Contatos',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="volume-control-phone" color={color} />
                }}
            />
        </Tabs>
    )
}