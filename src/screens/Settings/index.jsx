import React from "react"
import { View, Text } from "react-native"
import UserLayout from "../../utils/Layouts/UserLayout"

export default function SettingsScreen() {
  return (
    <UserLayout>
      <View>
        <Text>Settings</Text>
        <Text>This page will display list of settings.</Text>
        <Text>
          Profile Settings, Account Settings, Dark/Light Mode, Terms of Use,
          Privacy Policy, About Us (Developers), Contact Us, etc.
        </Text>
      </View>
    </UserLayout>
  )
}
