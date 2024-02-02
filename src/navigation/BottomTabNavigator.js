import React from "react"
import { StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AntDesign } from "@expo/vector-icons"
import {
  HomeScreen,
  ExploreScreen,
  IdentifyScreen,
  SavedScreen,
  SettingsScreen,
} from "../screens"

const Tab = createBottomTabNavigator()

const navigationTabs = [
  {
    id: 1,
    name: "Home",
    headerTitle: "Gantavya",
    screen: HomeScreen,
    label: "Home",
    iconName: "home",
  },
  {
    id: 2,
    name: "Explore",
    headerTitle: "Explore",
    screen: ExploreScreen,
    label: "Explore",
    iconName: "find",
  },
  {
    id: 3,
    name: "Identify",
    headerTitle: "Identify",
    screen: IdentifyScreen,
    label: "Identify",
    iconName: "search1",
  },
  {
    id: 4,
    name: "Saved",
    headerTitle: "Saved",
    screen: SavedScreen,
    label: "Saved",
    iconName: "staro",
  },
  {
    id: 5,
    name: "Settings",
    headerTitle: "Settings",
    screen: SettingsScreen,
    label: "Settings",
    iconName: "setting",
  },
]

const getTabIconName = (route) => {
  return navigationTabs.find((item) => item.name === route.name).iconName
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        // tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ color }) => (
          <AntDesign name={getTabIconName(route)} size={24} color={color} />
        ),
      })}
      // sceneContainerStyle={styles.sceneContainerStyle}
    >
      {navigationTabs?.length &&
        navigationTabs?.map((tab) => (
          <Tab.Screen
            key={tab.id}
            name={tab.name}
            component={tab.screen}
            options={{
              headerTitle: tab.headerTitle,
            }}
          />
        ))}
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
  // sceneContainerStyle: {
  // flex: 1,
  // },
  // tabBarStyle: {},
})
