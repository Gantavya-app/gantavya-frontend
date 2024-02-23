import React from "react"
import { Text, ScrollView, View } from "react-native"
import UserLayout from "../../utils/Layouts/UserLayout"
import ImagePicker from "./components/ImagePicker"

export default function IdentifyScreen() {
  return (
    <UserLayout>
      <ScrollView>
        <Text>
          Here you can upload a photo of a landmark and we will identify it for
          you. There will also be a map to show you the location of the
          landmark. And a brief history of the landmark.
        </Text>

        <View>
          <ImagePicker />
        </View>
      </ScrollView>
    </UserLayout>
  )
}
