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

import { Ionicons } from "@expo/vector-icons"
import { FontAwesome5 } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import colors from "../../utils/constants/colors"

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
      icon: <Ionicons name="person-outline" size={20} />,
      text: "Profile Settings",
      name: "Profile",
      action: navigateToProfile,
    },
    {
      icon: <AntDesign name="lock" size={22} />,
      text: "Account Settings",
      name: "Account",
      action: navigateToAccountSettings,
    },
    // { icon: "moon", text: "Dark Mode",component:  },
    // { icon: "lightbulb", text: "Light Mode",component:  },
    {
      icon: (
        <Ionicons name="shield-checkmark-outline" size={20} color="black" />
      ),
      text: "Privacy Policy",
      name: "Privacy",
      action: navigateToPrivacyPolicy,
    },
    {
      icon: <Ionicons name="information-circle-outline" size={22} />,
      text: "About Us",
      name: "About",
      action: navigateToAbout,
    },
    {
      icon: <Ionicons name="call-outline" size={20} color="black" />,
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
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                {option?.icon && option?.icon}
                <Text>{option.text}</Text>
              </View>
            </Pressable>
          )
        })}
      </View>

      <View>
        <Pressable onPress={logOut} style={styles.listItemStyle}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <AntDesign name="logout" size={20} color="red" />
            <Text style={{ color: colors.error }}>Log Out</Text>
          </View>
        </Pressable>
      </View>
    </UserLayout>
  )
}

const styles = StyleSheet.create({
  listItemStyle: {
    // borderTopWidth: 1,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
})
