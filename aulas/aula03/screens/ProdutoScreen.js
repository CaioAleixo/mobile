import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

function ProdutoScreen () {
    return (
        
        <View style= {{flex: 1, backgroundColor: "white"}}>

            <View style={styles.appBar}>
                <Text style={styles.appTitle}>Detalhes do Produto</Text>
            </View>

            <View style={styles.container}>

                <Image style={styles.photo} source={{uri: "https://acdn-us.mitiendanube.com/stores/001/861/700/products/whatsapp-image-2021-12-11-at-08-04-16-11-0b8f741cf5964a5ea116392376698982-1024-1024.jpeg"}}/>
                <Text style={styles.productName}>Harry Potter</Text>
                <Text style={styles.productDetail}>Característica do produto</Text>

                <View style={styles.sectionQT}>

                    <View style={styles.sectionButtons}>

                        <TouchableOpacity>
                            <View style={styles.buttonQT}>
                                <Text style={styles.textQT}>-</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{marginRight: 16}}>
                                <Text style={styles.textQT}>1</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.buttonQT}>
                                <Text style={styles.textQT}>+</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <Text style={styles.price}>R$ 99,99</Text>

                </View>

                <TouchableOpacity>
                    <View style={styles.buttonAdd}>
                        <Text style={styles.textAdd}>Adicionar ao Carrinho</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </View>

    );
}

const styles = StyleSheet.create ({

    appBar: {
        height: 90,
        backgroundColor: "blue",
        padding: 16,
        justifyContent: "flex-end",
        elevation: 3,
        marginBottom: 8,
    },

    appTitle: {
        fontSize: 24,
        color: "white",
    },

    container: {
        flex: 1,
        padding: 16,
    },

    photo: {
        borderRadius: 8,
        height: 350,
    },

    productName: {
        fontSize: 12,
        fontWeight: "600",
        marginVertical: 8,
    },

    productDetail: {
        fontSize: 12,
        color: "gray",
        marginBottom: 64,
    },

    sectionQT: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    sectionButtons: {
        flexDirection: "row",
        alignItems: "center",
    },

    buttonQT: {
        height: 40,
        width: 40,
        borderRadius: 8,
        backgroundColor: "lightblue",
        marginRight: 16,
        justifyContent: "center",
        alignItems: "center"
    },

    textQT: {
        fontSize: 16,
        fontWeight: "600",
    },

    price: {
        fontSize: 24,
        color: "blue", 
    },

    buttonAdd: {
        marginTop: 32,
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 24,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
    },

    textAdd: {
        fontSize: 16,
        fontWeight: "600",
        color: "blue",
    },

});

export default ProdutoScreen;