import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
// import Layout from "../../utils/Layout"

export default function HomeScreen({ navigation }) {
  return (
    // <Layout>
    <View>
      <Text>Welcome to Gantavya!</Text>
      <Text></Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
    // </Layout>
  )
}
