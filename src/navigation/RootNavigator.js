import { NavigationContainer } from "@react-navigation/native"
import BottomTabNavigator from "./BottomTabNavigator"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  AboutScreen,
  AccountScreen,
  ContactScreen,
  LoginScreen,
  PrivacyScreen,
  ProfileScreen,
  RegisterScreen,
  ResultScreen,
} from "../screens"

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
          <Stack.Group
            screenOptions={{
              headerShown: true,
            }}
          >
            <Stack.Screen
              name="LoggedInScreen"
              component={BottomTabNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="Contact" component={ContactScreen} />
            <Stack.Screen name="Privacy" component={PrivacyScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />

            <Stack.Group>
              <Stack.Screen name="Result" component={ResultScreen} />
            </Stack.Group>
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
