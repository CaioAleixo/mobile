import { View, Text, StyleSheet } from "react-native";

function PadraoAndroid() {
  return (
    <View style={{ flex: 1 , backgroundColor: "white"}}>

      <View style={style.appBar}>
        <Text style={style.appTitle}>Meu App</Text>
      </View>

      <View style={style.item}>
        <Text>Item 1</Text>
        <Text>Descricao 1</Text>
      </View>

      <View style={style.item}>
        <Text>Item 2</Text>
        <Text>Descricao 2</Text>
      </View>

      <View style={style.item}>
        <Text>Item 3</Text>
        <Text>Descricao 3</Text>
      </View>

      <View style={style.fab}>
        <Text style={{fontSize: 24}}>+</Text>
      </View>

    </View>
  );
}

const style = StyleSheet.create ({

    appBar: {height: 64, 
            justifyContent: "center", 
            paddingLeft: 16, 
            backgroundColor: "gray"
    },

    appTitle: {fontSize: 24, color: "white" 
    },

    item: { height: 64,
            justifyContent: "center", 
            borderBottomColor: "#ccc", 
            borderBottomWidth: "1", 
            paddingHorizontal: 16
    },

    fab: {  height: 48, 
            width: 48, 
            backgroundColor: "lightgray",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 16,
            right: 16,
            borderRadius: 16

    },
})

export default PadraoAndroid;
