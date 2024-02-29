import React from "react"
import { StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AntDesign } from "@expo/vector-icons"
import {
  HomeScreen,
  ExploreScreen,
  IdentifyScreen,
  SavedScreen,
  MenuScreen,
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
    iconName: "book",
  },
  {
    id: 5,
    name: "Menu",
    headerTitle: "Menu",
    screen: MenuScreen,
    label: "Menu",
    iconName: "menuunfold",
  },
]

const getTabIconName = (route) => {
  return navigationTabs.find((item) => item.name === route.name).iconName
}

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ color }) => (
          <AntDesign name={getTabIconName(route)} size={24} color={color} />
        ),
        tabBarItemStyle: { padding: 5 },
      })}
      sceneContainerStyle={styles.sceneContainerStyle}
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

const styles = StyleSheet.create({
  sceneContainerStyle: {
    flex: 1,
  },
  tabBarStyle: {
    height: 60,
  },
})
