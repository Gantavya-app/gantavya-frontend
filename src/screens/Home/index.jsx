import React from "react"
import { Text, View } from "react-native"
import UserLayout from "../../utils/Layouts/UserLayout"

export default function HomeScreen() {
  return (
    <UserLayout>
      <View>
        <Text>This screen will greet the user.</Text>
        <Text>There will be time, temperature, weather details, etc.</Text>
      </View>
    </UserLayout>
  )
}
