import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { axiosInstance } from "../../utils/config/api"
import Toast from "react-native-root-toast"
import { Feather } from "@expo/vector-icons"

export default function RegisterForm() {
  const navigation = useNavigation()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  function handleRegisterUser() {
    if (!name || !email || !password) {
      Toast.show("Please fill in all fields", {
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
        const errorMessage =
          err?.response?.data?.detail || err?.message || "An error occurred"

        console.log(errorMessage)

        Toast.show(errorMessage, {
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

      <View style={{ position: "relative", marginBottom: 12 }}>
        <TextInput
          onChangeText={(text) => {
            setPassword(text)
          }}
          textContentType={showPassword ? "none" : "password"}
          secureTextEntry={!showPassword}
          placeholder="Password"
          placeholderTextColor={"gray"}
          style={styles.passwordInputField}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.visibilityIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Feather
            name={showPassword ? "eye-off" : "eye"}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      </View>

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
    marginBottom: 12,
    borderRadius: 5,
  },
  passwordInputField: {
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
    paddingRight: 40,
  },
  visibilityIcon: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -10 }],
  },
})
