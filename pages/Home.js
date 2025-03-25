
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


export default function HomeScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Página 1</Text>
            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate("Detalhes", )}
            >
                <Text style={styles.textoBotao}>Detalhes</Text>
            </TouchableOpacity>
        </View>
    );
}const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingVertical: 100,
        paddingHorizontal: 25, 
        gap: 20, 
    },
    titulo: {
        fontSize: 32, 
        textAlign: "center", 
    },
    input: {
        borderWidth: 1, 
        borderColor: "gray", 
        borderRadius: 8, 
        padding: 10, 
        fontSize: 20, 
    },
    texto: {
        fontSize: 20, 
        textAlign: "center", 
    },
    botao: {
        backgroundColor: "blue", 
        padding: 10, 
        borderRadius: 8, 
        alignItems: "center", 
    },
    textoBotao: {
        color: "white", 
        fontSize: 20, 
    },
});