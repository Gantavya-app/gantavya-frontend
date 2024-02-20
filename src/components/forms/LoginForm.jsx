import React, { useContext, useState } from "react"
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { AuthContext } from "../../contexts/AuthContext"
import { Feather } from "@expo/vector-icons"
import Toast from "react-native-root-toast"
import { axiosInstance } from "../../utils/config/api"

export default function LoginForm() {
  const { setUser } = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleLogin() {
    console.log("email", email, "password", password)

    console.log("User logged in")

    if (!email || !password) {
      console.log("Please fill in all fields")
      Toast.show("Please fill in all fields")
      return
    }

    setLoading(true)
    axiosInstance
      .post("/users/login/", { email, password })
      .then((res) => {
        console.log("res", res)
        Toast.show("User logged in successfully")
        setUser({
          name: res.data.name,
          email: res.data.email,
          token: res.data.token,
          isAdmin: res.data.isAdmin,
          isLoggedIn: true,
        })
      })
      .catch((err) => {
        console.log("error", err)
        Toast.show("An error occurred")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <View>
      <View>
        <TextInput
          onChangeText={setEmail}
          textContentType="emailAddress"
          placeholder="Email"
          placeholderTextColor={"gray"}
          style={styles.textInputField}
        />
      </View>

      <View>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          textContentType={showPassword ? "none" : "password"}
          secureTextEntry={!showPassword}
          placeholder={"Password"}
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

      <Pressable
        style={{ width: "fit-content", alignSelf: "flex-end" }}
        onPress={() => console.log("Forgot password pressed")}
      >
        <Text style={styles.link}>Forgot password?</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleLogin}>
        {loading ? (
          <ActivityIndicator color={"#fff"} size={"small"} />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
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
  passwordInputField: {
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    marginBottom: 10,
    borderRadius: 5,
    paddingRight: 40,
  },
  visibilityIcon: { position: "absolute", right: 10, top: 9, bottom: 9 },
})
