import { View, Text, StyleSheet } from "react-native";

function PerfilScreen () {
    return (
        <View style={{flex: 1, backgroundColor: "white"}}>

            <View style={style.perfil}>

                <View style={style.photo}></View>   //imagem

                <View style={style.card}>
                    <Text>Nome</Text>
                    <Text>Função</Text>
                </View>

            </View>

            <View style={style.skillSection}>
                <Text>Habilidades</Text>
                <View style={style.skill}>
                    <Text>Javascript</Text>
                    <Text>React Native</Text>
                </View>

            </View>

        </View>
    );
}

const style = StyleSheet.create ({

    perfil: {   flexDirection: "row",
                padding: 16,
    },

    photo: {    width: 80,
                height: 80,
                backgroundColor: "lightgray",
                borderRadius: 40
    },

    card:{  justifyContent: "center",
            paddingLeft: 16,
    },

    skillSection: { paddingLeft: 16,

    },

    skill: {    flexDirection: "row",
                gap: 8,     
    }

})

export default PerfilScreen;