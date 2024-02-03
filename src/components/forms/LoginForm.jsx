import React, { useContext } from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { AuthContext } from "../../contexts/AuthContext"

export default function LoginForm() {
  const { setUser } = useContext(AuthContext)

  function handleLogin() {
    console.log("User logged in")
    setUser({ isLoggedIn: true }) // TODO: Implement actual login logic
  }

  return (
    <View>
      <TextInput
        textContentType="emailAddress"
        placeholder="Email"
        placeholderTextColor={"gray"}
        style={styles.textInputField}
      />

      <TextInput
        textContentType="password"
        secureTextEntry={true}
        placeholder="Password"
        placeholderTextColor={"gray"}
        style={styles.textInputField}
      />
      <Pressable
        style={{ width: "fit-content", alignSelf: "flex-end" }}
        onPress={() => console.log("Forgot password pressed")}
      >
        <Text style={styles.link}>Forgot password?</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
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
})
