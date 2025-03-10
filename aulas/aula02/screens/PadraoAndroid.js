import { View, Text } from "react-native";

function PadraoAndroid() {
  return (
    <View style={{ flex: 1 , backgroundColor: "white"}}>

      <View style={{height: 64, justifyContent: "center", paddingLeft: 16, backgroundColor: "gray"}}>
        <Text style={{ fontSize: 24, color: "white" }}>Meu App</Text>
      </View>

      <View style={{height: 64,
                    justifyContent: "center", 
                    borderBottomColor: "#333", 
                    borderBottomWidth: "1", 
                    paddingHorizontal: 16}}>
        <Text>Item 1</Text>
        <Text>Descricao 1</Text>
      </View>

      <View style={{height: 64,
                    justifyContent: "center", 
                    borderBottomColor: "#333", 
                    borderBottomWidth: "1", 
                    paddingHorizontal: 16}}>
        <Text>Item 2</Text>
        <Text>Descricao 2</Text>
      </View>

      <View style={{height: 64,
                    justifyContent: "center", 
                    borderBottomColor: "#333", 
                    borderBottomWidth: "1", 
                    paddingHorizontal: 16}}>
        <Text>Item 3</Text>
        <Text>Descricao 3</Text>
      </View>

      <View style={{height: 48, 
                    width: 48, 
                    backgroundColor: "lightgray",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    bottom: 16,
                    right: 16,
                    borderRadius: 16}}>
        <Text style={{fontSize: 24}}>+</Text>
      </View>

    </View>
  );
}

export default PadraoAndroid;
