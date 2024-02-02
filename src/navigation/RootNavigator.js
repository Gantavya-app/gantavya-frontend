import { NavigationContainer } from "@react-navigation/native"
import BottomTabNavigator from "./BottomTabNavigator"
import GuestNavigator from "./GuestNavigator"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export default function RootNavigator() {
  const {
    user: { isLoggedIn },
  } = useContext(AuthContext)
  return (
    <NavigationContainer>
      {isLoggedIn ? <BottomTabNavigator /> : <GuestNavigator />}
    </NavigationContainer>
  )
}
