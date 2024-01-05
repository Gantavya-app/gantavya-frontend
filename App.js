import { StatusBar } from "expo-status-bar"
import { Image, StyleSheet, Text, View } from "react-native"
import SplashScreen from "./src/containers/SplashScreen"
import HomeScreen from "./src/screens/HomeScreen"
import { NavigationContainer } from "@react-navigation/native"

export default function App() {
	return (
		<NavigationContainer>
			<View style={styles.container}>
				<StatusBar style="auto" />
				<HomePage />
				{/* <SplashScreen /> */}
			</View>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
