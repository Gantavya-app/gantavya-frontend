import React from "react"
import { ScrollView, Text, View } from "react-native"
import LandmarkDetails from "../../components/LandmarkDetails"

const LandmarkScreen = ({ navigation, route }) => {
  const { data } = route.params

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <LandmarkDetails landmark={data} photos={data.photos} />
    </ScrollView>
  )
}

export default LandmarkScreen
