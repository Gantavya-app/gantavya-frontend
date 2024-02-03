import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native"
import RootNavigator from "./src/navigation/RootNavigator"
import AppProvider from "./src/contexts/AppProvider"

export default function App() {
  return (
    <AppProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <RootNavigator />
      </SafeAreaView>
    </AppProvider>
  )
}
