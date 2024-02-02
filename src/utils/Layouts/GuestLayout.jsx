import React from "react"
import { StyleSheet, View } from "react-native"

export default function GuestLayout({ children }) {
  return <View style={styles.guestLayoutContainer}>{children}</View>
}

const styles = StyleSheet.create({
  guestLayoutContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
})
