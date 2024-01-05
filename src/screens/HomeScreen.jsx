import React from "react"
import { Button, Text, View } from "react-native"

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text>Welcome to Gantavya!</Text>
			<Button
				title="Go to Settings"
				onPress={() => navigation.navigate("Settings")}
			/>
		</View>
	)
}

export default HomeScreen
