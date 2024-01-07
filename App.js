import { StatusBar } from "expo-status-bar"
import { Image, StyleSheet, Text, View } from "react-native"
import SplashScreen from "./src/screens/Splash"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen, SettingsScreen } from "./src/screens"

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style="auto" />

			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Settings" component={SettingsScreen} />
				{/* <SplashScreen /> */}
			</Stack.Navigator>
		</NavigationContainer>
	)
}
