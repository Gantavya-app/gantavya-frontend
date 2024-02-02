import React from "react"
import { Button, View, Text } from "react-native"

const SettingsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Settings</Text>
      <Text>This page will display list of settings.</Text>
      <Text>
        Profile Settings, Account Settings, Dark/Light Mode, Terms of Use,
        Privacy Policy, About Us (Developers), Contact Us, etc.
      </Text>
    </View>
  )
}

export default SettingsScreen
