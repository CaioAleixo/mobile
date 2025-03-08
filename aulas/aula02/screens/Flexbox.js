import { View } from "react-native";

function Flexbox () {
  return (
  <View style={{ 
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "black"
     }}>

    <View style={{ height: 50, width: 50, borderRadius: 100, borderColor: "white", borderWidth: 1, backgroundColor: "red"}}>  
    </View>
    <View style={{ height: 50, width: 50, borderRadius: 100, borderColor: "white", borderWidth: 1, backgroundColor: "yellow"}}>  
    </View>
    <View style={{ height: 50, width: 50, borderRadius: 100, borderColor: "white", borderWidth: 1, backgroundColor: "green"}}>  
    </View>

  </View>
  );
}


export default Flexbox;