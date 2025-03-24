import { StyleSheet, TextInput, Button, Text, View, ScrollView } from 'react-native';

function RegistrarScreen () {
    return (
        
        <View style={styles.container}>

            <View style={styles.barracamera}></View>

            <View style={styles.appBar}>
                <Text style={styles.appTitle}>Criar Conta</Text>
            </View>

            <ScrollView>

                <View style={styles.formRegister}>
                    <TextInput style={styles.input} placeholder='Nome'/>
                    <TextInput style={styles.input} placeholder='E-mail'keyboardType='email-address'/>
                    <TextInput style={styles.input} placeholder='Senha' secureTextEntry/>
                    <Button title='Registrar'/>
                </View>
                
            </ScrollView>

        </View>

    ); 
}

const styles = StyleSheet.create ({

    container: {
        flex: 1,
        backgroundColor: "white",
    },

    barracamera: {
        height: 55,
        backgroundColor: "white"
    },

    appBar: {
        height: 80,
        backgroundColor: "blue",
        padding: 16,
        justifyContent: "center",
        elevation: 3,
        marginBottom: 8,
    },

    appTitle: {
        fontSize: 24,
        color: "white",
    },

    formRegister: {
        backgroundColor: "lightgray",
        paddingHorizontal: 16,
        paddingVertical: 16,
    },

    input: {
        padding: 16,
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 8,
        marginBottom: 8,
    },

})

export default RegistrarScreen;