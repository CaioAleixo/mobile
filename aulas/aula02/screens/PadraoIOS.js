import { View, Text } from "react-native";

function PadraoIOS () {
    return (
        <View style={{ 
            flex: 1,
            justifyContent: "space-between"
         }}>
            <View style={{ height: 100, backgroundColor: "gray", justifyContent: "center", alignItems: "center" }}>
                <Text>Meu App</Text>
            </View>
            <View style={{ height: 64, backgroundColor: "blue"}}></View>

        </View>
    )
}

export default PadraoIOS;
