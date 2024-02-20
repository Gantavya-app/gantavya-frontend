import React, { useContext } from "react"
import { View, Text, Pressable, StyleSheet } from "react-native"
import UserLayout from "../../utils/Layouts/UserLayout"
import { AuthContext } from "../../contexts/AuthContext"

export default function SettingsScreen() {
  const { logOut } = useContext(AuthContext)

  return (
    <UserLayout>
      <View>
        <Text>Settings</Text>
        <Text>This page will display list of settings.</Text>
        <Text>
          Profile Settings, Account Settings, Dark/Light Mode, Terms of Use,
          Privacy Policy, About Us (Developers), Contact Us, Log Out, etc.
        </Text>
      </View>

      <View>
        <Pressable onPress={logOut} style={styles.listItemStyle}>
          <Text style={{ color: "rgb(255,60,50)" }}>Log Out</Text>
        </Pressable>
      </View>
    </UserLayout>
  )
}

const styles = StyleSheet.create({
  listItemStyle: {
    borderTopWidth: 1,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
})
