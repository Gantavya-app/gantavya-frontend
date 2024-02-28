import React from "react"
import { View } from "react-native"

const ResultScreen = ({ route }) => {
  const { data } = route.params

  console.log(data)

  return <View>ResultScreen</View>
}

export default ResultScreen
