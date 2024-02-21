import React, { useContext } from "react"
import { View, Text, Pressable, StyleSheet } from "react-native"
import UserLayout from "../../utils/Layouts/UserLayout"
import { AuthContext } from "../../contexts/AuthContext"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import ContactScreen from "./containers/Contact"
import ProfileScreen from "./containers/Profile"
import AccountScreen from "./containers/Account"
import PrivacyScreen from "./containers/Privacy"
import AboutScreen from "./containers/About"

export default function MenuScreen({ navigation }) {
  const { logOut } = useContext(AuthContext)

  const menuOptions = [
    {
      icon: "person",
      text: "Profile Settings",
      name: "Profile",
      screen: ProfileScreen,
    },
    {
      icon: "lock",
      text: "Account Settings",
      name: "Account",
      screen: AccountScreen,
    },
    // { icon: "moon", text: "Dark Mode",component:  },
    // { icon: "lightbulb", text: "Light Mode",component:  },
    {
      icon: "shield",
      text: "Privacy Policy",
      name: "Privacy",
      screen: PrivacyScreen,
    },
    {
      icon: "information-circle",
      text: "About Us",
      name: "About",
      screen: AboutScreen,
    },
    {
      icon: "call",
      text: "Contact Us",
      name: "Contact",
      screen: ContactScreen,
    },
  ]

  return (
    <UserLayout>
      <View>
        {menuOptions.map((option, index) => {
          return (
            <Pressable
              onPress={() => console.warn(option.name)}
              key={index}
              style={styles.listItemStyle}
            >
              <Text>{option.text}</Text>
            </Pressable>
          )
        })}
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
