import React from "react"
import { Button, View } from "react-native"

const SettingsScreen = ({ navigation }) => {
	return (
		<View>
			<Text>SettingsScreen</Text>
			<Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
		</View>
	)
}

export default SettingsScreen
