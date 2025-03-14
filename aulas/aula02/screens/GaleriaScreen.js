import { View, Text, StyleSheet } from "react-native";

function Galeria () {
    return (
        <View style={{flex: 1, backgroundColor: "white"}}>

            <View style={style.grid}>

                <View style={style.photo}><Text>Foto 1</Text></View>
            
                <View style={style.photo}><Text>Foto 2</Text></View>
      
                <View style={style.photo}><Text>Foto 3</Text></View>
   
                <View style={style.photo}><Text>Foto 4</Text></View>
 
                <View style={style.photo}><Text>Foto 5</Text></View>
   
                <View style={style.photo}><Text>Foto 6</Text></View>

                <View style={style.photo}><Text>Foto 7</Text></View>

                <View style={style.photo}><Text>Foto 8</Text></View>

                <View style={style.photo}><Text>Foto 9</Text></View>

            </View>
        </View>

    );
}

const style = StyleSheet.create ({

    grid: { flexDirection: "row",
            flexWrap: "wrap",
            gap: 8
    },

    photo: {height: 150,
            width: 100,
            borderWidth: 5,
            justifyContent: "center",
            alignItems: "center",
    },
});

export default Galeria;