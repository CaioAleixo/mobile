import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import InvestorPage from "./screens/InvestorPage";

function App() {
  return (
  
  <SafeAreaProvider>

    <InvestorPage></InvestorPage>

  </SafeAreaProvider>

  );
}

export default App;
