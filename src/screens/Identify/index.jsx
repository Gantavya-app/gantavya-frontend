import React from "react"
import { Text, View } from "react-native"
import UserLayout from "../../utils/Layouts/UserLayout"

export default function IdentifyScreen() {
  return (
    <UserLayout>
      <View>
        <Text>
          Here you can upload a photo of a landmark and we will identify it for
          you. There will also be a map to show you the location of the
          landmark. And a brief history of the landmark.
        </Text>
      </View>
    </UserLayout>
  )
}