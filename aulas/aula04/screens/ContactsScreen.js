import { View, FlatList, StyleSheet } from "react-native";
import { Appbar, Button, FAB, IconButton, List, Text, TextInput } from "react-native-paper";

const contatos = [
    {id: 1, nome: "Mãe", fone: "61 9999-9999"},
    {id: 2, nome: "Pai", fone: "61 8888-8888"},
    {id: 3, nome: "Mano", fone: "61 7777-7777"},
];

function ContactScreen () {
    return (

        <View style={styles.container}>

            <Appbar.Header>
                <Appbar.Content title="Contatos"/>
                <Appbar.Action icon="dots-vertical"/>
            </Appbar.Header>

            <FlatList
                data={contatos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (

                    <List.Item
                        left={(props) => <List.Icon {...props} icon="account" />}
                        title={item.nome}
                        description={item.fone}
                    />

                )}
            />


            <View>
                <FAB style={styles.fab} icon="plus"></FAB>
            </View>

        </View>

    );
}

const styles = StyleSheet.create ({

    container: {
        flex: 1,
        backgroundColor: "white",
    },

    fab: {
        flexDirection: "row",
        position: "absolute",
        right: 16,
        bottom: 16,
    },

})

export default ContactScreen;