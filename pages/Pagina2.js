
import { View, Text, StyleSheet } from "react-native";

const TextoExibido = ({ titulo, texto, cor }) => (
    <Text style={[styles.texto, { color: cor }]}>
        {titulo}: {texto || "Nenhum texto salvo"}
    </Text>
);

export default function DetalhesScreen({ route }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Página 2</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 50,
        paddingVertical: 100,
        paddingHorizontal: 25,
    },
    titulo: {
        fontSize: 32,
        textAlign: "center",
        textDecorationLine: "underline",
    }
});