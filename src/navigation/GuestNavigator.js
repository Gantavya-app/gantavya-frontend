import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LoginScreen, RegisterScreen } from "../screens"

const Stack = createNativeStackNavigator()

export default function GuestNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
}
