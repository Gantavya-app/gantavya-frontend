import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native"
import RootNavigator from "./src/navigation/RootNavigator"

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <RootNavigator />
    </SafeAreaView>
  )
}
