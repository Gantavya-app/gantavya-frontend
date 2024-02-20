import { useNavigation } from "@react-navigation/native"
import React from "react"
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native"
import { axiosInstance } from "../../utils/config/api"
import Toast from "react-native-root-toast"

export default function RegisterForm() {
  const navigation = useNavigation()

  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  function handleRegisterUser() {
    if (!name || !email || !password || !confirmPassword) {
      Toast.show("Please fill in all fields", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
      })
      return
    } else if (password !== confirmPassword) {
      Toast.show("Passwords do not match", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
      })
      return
    }

    setLoading(true)
    axiosInstance
      .post("/users/register/", {
        name,
        email,
        password,
      })
      .then((res) => {
        navigation.navigate("Login")
        Toast.show("User registered successfully")
      })
      .catch((err) => {
        console.log("error", err)
        Toast.show("An error occurred", {
          duration: Toast.durations.SHORT,
          position: Toast.positions.BOTTOM,
        })
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <View>
      <TextInput
        onChangeText={(text) => {
          setName(text)
        }}
        textContentType="name"
        placeholder="Full Name"
        placeholderTextColor={"gray"}
        style={styles.textInputField}
      />

      <TextInput
        onChangeText={(text) => {
          setEmail(text)
        }}
        textContentType="emailAddress"
        placeholder="Email"
        placeholderTextColor={"gray"}
        style={styles.textInputField}
      />

      <TextInput
        onChangeText={(text) => {
          setPassword(text)
        }}
        textContentType="password"
        secureTextEntry={true}
        placeholder="Password"
        placeholderTextColor={"gray"}
        style={styles.textInputField}
      />

      <TextInput
        onChangeText={(text) => {
          setConfirmPassword(text)
        }}
        textContentType="password"
        secureTextEntry={true}
        placeholder="Confirm Password"
        placeholderTextColor={"gray"}
        style={styles.textInputField}
      />

      <Pressable onPress={handleRegisterUser} style={styles.button}>
        {loading ? (
          <ActivityIndicator color={"#fff"} size="small" />
        ) : (
          <Text style={styles.buttonText}>Register</Text>
        )}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  link: {
    color: "rgb(0,122, 255)",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "rgb(0,122, 255)",
    padding: 10,
    borderRadius: 5,
    shadowColor: "rgba(0, 122, 255, 0.24)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginVertical: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  textInputField: {
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    marginBottom: 10,
    borderRadius: 5,
  },
})
