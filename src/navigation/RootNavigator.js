import { NavigationContainer } from "@react-navigation/native"
import BottomTabNavigator from "./BottomTabNavigator"
import GuestNavigator from "./GuestNavigator"

export default function RootNavigator() {
  const isLoggedIn = false

  return (
    <NavigationContainer>
      {isLoggedIn ? <BottomTabNavigator /> : <GuestNavigator />}
    </NavigationContainer>
  )
}
