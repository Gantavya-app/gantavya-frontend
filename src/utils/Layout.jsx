import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"

export default function Layout({ children }) {
  return (
    <View style={styles.container}>
      <View>{children}</View>

      <View style={styles.footer_navigation}>
        <View style={styles.footer_icon_container}>
          <AntDesign name="home" size={24} color="black" />
          <Text>Home</Text>
        </View>
        <View style={styles.footer_icon_container}>
          <AntDesign name="find" size={24} color="black" />
          <Text>Explore</Text>
        </View>
        <View style={styles.footer_icon_container}>
          <AntDesign name="search1" size={24} color="black" />
          <Text>Identify</Text>
        </View>
        <View style={styles.footer_icon_container}>
          <AntDesign name="staro" size={24} color="black" />
          <Text>Saved</Text>
        </View>
        <View style={styles.footer_icon_container}>
          <AntDesign name="setting" size={24} color="black" />
          <Text>Settings</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
    width: "auto",
  },
  footer_navigation: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-around",
    marginTop: "auto",
    gap: 2,
    paddingVertical: 10,
    borderTopColor: "rgba(0,0,0,0.1)",
    borderTopWidth: 1,
  },
  footer_icon_container: {
    alignItems: "center",
  },
})
