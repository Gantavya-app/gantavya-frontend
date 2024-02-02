import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { HomeScreen, SettingsScreen } from "../screens"
import TabBtn from "./buttons/BottomTabNavigatorBtn"

const TabSettingsBtn = () => {
  return (
    <TabBtn
      icon={<AntDesign name="setting" size={24} color="black" />}
      label={"Settings"}
    />
  )
}

const FooterNavigationTabs = () => {
  return (
    <>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Gantavya",
            tabBarButton: () => {
              return (
                <Pressable style={styles.footer_icon_container}>
                  <AntDesign name="home" size={24} color="black" />
                  <Text>Home</Text>
                </Pressable>
              )
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarButton: () => {
              return <TabSettingsBtn />
            },
          }}
        />
      </Tab.Navigator>
      <View style={styles.footer_navigation}>
        {/* <Pressable onPress={() => navigation.navigate("Home")}> */}

        {/* </Pressable> */}
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
    </>
  )
}

export default FooterNavigationTabs

const styles = StyleSheet.create({
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
