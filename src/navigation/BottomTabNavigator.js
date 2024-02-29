import React, { useContext } from "react"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AntDesign, Ionicons } from "@expo/vector-icons"
import {
  HomeScreen,
  ExploreScreen,
  IdentifyScreen,
  SavedScreen,
  MenuScreen,
} from "../screens"
import { AuthContext } from "../contexts/AuthContext"
import colors from "../utils/constants/colors"

const Tab = createBottomTabNavigator()

export default function BottomTabNavigator() {
  const {
    user: { name },
  } = useContext(AuthContext)

  function getTabIconName(route) {
    switch (route.name) {
      case "Home":
        return "home"
      case "Explore":
        return "find"
      case "Identify":
        return "scan1"
      case "Saved":
        return "book"
      case "Menu":
        return "menuunfold"
      default:
        return ""
    }
  }

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation, route }) => ({
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ color }) => (
          <AntDesign name={getTabIconName(route)} size={24} color={color} />
        ),
        tabBarItemStyle: { padding: 5 },
        headerLeftContainerStyle: { paddingLeft: 10 },
        headerRightContainerStyle: { paddingRight: 10 },
        headerLeft: () => (
          <View>
            <Image
              source={require("../../assets/logos/logo_green.png")}
              style={{ width: 64, height: 40, borderRadius: 20 }}
            />
          </View>
        ),
        headerRight: () => (
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <View
              style={{
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: 10,
                borderWidth: 1,
                borderColor: colors.transparent,
                paddingVertical: 4,
                paddingHorizontal: 16,
                borderRadius: 20,
                backgroundColor: colors.darkGreen,
              }}
            >
              <Ionicons name="person-outline" size={18} color={colors.white} />
              <Text style={{ fontWeight: 600, color: colors.white }}>
                {name}
              </Text>
            </View>
          </Pressable>
        ),
      })}
      sceneContainerStyle={styles.sceneContainerStyle}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "",
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          headerTitle: "",
        }}
      />
      <Tab.Screen
        name="Identify"
        component={IdentifyScreen}
        options={{
          headerTitle: "",
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          headerTitle: "",
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          headerTitle: "Menu",
          headerLeft: null,
          // headerRight: null,
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  sceneContainerStyle: {
    flex: 1,
  },
  tabBarStyle: {
    height: 60,
  },
})
