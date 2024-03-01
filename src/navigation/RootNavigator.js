import { NavigationContainer } from "@react-navigation/native"
import BottomTabNavigator from "./BottomTabNavigator"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  AboutScreen,
  AccountScreen,
  ContactScreen,
  LandmarkScreen,
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

            <Stack.Group>
              <Stack.Screen
                name="About"
                component={AboutScreen}
                options={{
                  headerTitle: "About Us",
                }}
              />
              <Stack.Screen
                name="Account"
                component={AccountScreen}
                options={{
                  headerTitle: "Account Settings",
                }}
              />
              <Stack.Screen name="Contact" component={ContactScreen} />
              <Stack.Screen
                name="Privacy"
                component={PrivacyScreen}
                options={{
                  headerTitle: "Privacy Policy",
                }}
              />
              <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                  headerTitle: "Your Profile",
                }}
              />
            </Stack.Group>

            <Stack.Group>
              <Stack.Screen
                name="Landmark"
                component={LandmarkScreen}
                // options={{
                //   headerBackTitle: "Back",
                //   headerTitleStyle: {
                //     borderWidth: 1,
                //     borderColor: colors.black,
                //   },
                // }}
              />
              <Stack.Screen name="PredictionResult" component={ResultScreen} />
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
