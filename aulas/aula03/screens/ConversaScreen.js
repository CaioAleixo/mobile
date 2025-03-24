import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity, FlatList } from "react-native";

const mensagens = [
    {
    id: 1, 
    avatar: "https://picsum.photos/200?random=1",  
    nome: "Pai", 
    msg: "Cadê tu?", 
    horario: "21/03/2025 23:23"
    },

    {
    id: 2, 
    avatar: "https://picsum.photos/200?random=2",  
    nome: "Namorada", 
    msg: "Vamos ao cinema amanhã?", 
    horario: "21/03/2025 23:55"
    },

    {
    id: 3, 
    avatar: "https://picsum.photos/200?random=3",  
    nome: "Trabalho", 
    msg: "Reunião amanhã as 10:00", 
    horario: "21/03/2025 23:00"
    },
]

function ConversaScreen () {
    return (

        <View style={{flex: 1, backgroundColor: "white"}}>

            <View style={styles.appBar}>
                <Text style={styles.appTitle}>Conversas</Text>
            </View>

            <FlatList
                data={mensagens}
                keyExtractor={item => item.id}
                renderItem={({ item }) => 
                    
                    <TouchableOpacity>

                        <View style={styles.item}>

                            <Image style={styles.photo} source= {{uri: item.avatar}}></Image>

                            <View style={{flex: 1}}>

                                <View style={styles.chat}>
                                    <Text style={styles.contactName}>{item.nome}</Text>
                                    <Text style={styles.contactHour}>{item.horario}</Text>
                                </View>

                                <Text style={styles.contactMsg}>{item.msg}</Text>

                            </View>

                        </View>

                    </TouchableOpacity>
                    }
            />

        </View>

    );
}

const styles = StyleSheet.create ({

    appBar: {
        height: 90,
        backgroundColor: "darkgreen",
        padding: 16,
        justifyContent: "flex-end",
        elevation: 3,
        marginBottom: 8,
    },

    appTitle: {
        fontSize: 24,
        color: "white",
    },

    item: {
        height: 54,
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
    },

    photo: {
        height: 48,
        width: 48,
        borderRadius: 48,
        marginRight: 16,
    },

    chat: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    contactName: {
        fontSize: 16,
        fontWeight: "600",
        color: "darkgreen",
    },

    contactHour: {
        fontSize: 12,
        color: "gray", 
    },

});

export default ConversaScreen;