import React from "react"
import { Text, View } from "react-native"
import UserLayout from "../../utils/Layouts/UserLayout"

export default function ExploreScreen() {
  return (
    <UserLayout>
      <View>
        <Text>This page will display popular landmarks.</Text>
        <Text>User can view detail of a landmark by clicking on it.</Text>
        <Text>We can also integrate a map to display the landmarks.</Text>
        <Text>A search bar will be at the top of the screen.</Text>
      </View>
    </UserLayout>
  )
}
