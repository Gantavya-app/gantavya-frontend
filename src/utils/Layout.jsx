import React from "react"
import { StyleSheet, View } from "react-native"

export default function Layout({ children, navigation }) {
  return (
    <View style={styles.container}>
      <View>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
  },
})
