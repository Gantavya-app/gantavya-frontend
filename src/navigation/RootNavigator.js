import { NavigationContainer } from "@react-navigation/native"
import BottomTabNavigator from "./BottomTabNavigator"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LoginScreen, RegisterScreen } from "../screens"

const Stack = createNativeStackNavigator()

export default function RootNavigator() {
  const {
    user: { isLoggedIn },
  } = useContext(AuthContext)
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen
              name="LoggedInScreen"
              component={BottomTabNavigator}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
