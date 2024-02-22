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

  const navigateToProfile = () => {
    navigation.navigate("Profile")
  }

  const navigateToAccountSettings = () => {
    navigation.navigate("Account")
  }

  const navigateToPrivacyPolicy = () => {
    navigation.navigate("Privacy")
  }

  const navigateToAbout = () => {
    navigation.navigate("About")
  }

  const navigateToContact = () => {
    navigation.navigate("Contact")
  }

  const menuOptions = [
    {
      icon: "person",
      text: "Profile Settings",
      name: "Profile",
      action: navigateToProfile,
    },
    {
      icon: "lock",
      text: "Account Settings",
      name: "Account",
      action: navigateToAccountSettings,
    },
    // { icon: "moon", text: "Dark Mode",component:  },
    // { icon: "lightbulb", text: "Light Mode",component:  },
    {
      icon: "shield",
      text: "Privacy Policy",
      name: "Privacy",
      action: navigateToPrivacyPolicy,
    },
    {
      icon: "information-circle",
      text: "About Us",
      name: "About",
      action: navigateToAbout,
    },
    {
      icon: "call",
      text: "Contact Us",
      name: "Contact",
      action: navigateToContact,
    },
  ]

  return (
    <UserLayout>
      <View>
        {menuOptions.map((option, index) => {
          return (
            <Pressable
              onPress={option?.action}
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
