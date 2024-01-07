import React from "react"
import { Button, View, Text } from "react-native"
import Layout from "../../utils/Layout"

const SettingsScreen = ({ navigation }) => {
	return (
		<Layout>
			<View>
				<Text>Settings</Text>
				<Button
					title="Go to Home"
					onPress={() => navigation.navigate("Home")}
				/>
			</View>
		</Layout>
	)
}

export default SettingsScreen
