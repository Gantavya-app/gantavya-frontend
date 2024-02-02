import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import GuestLayout from "../../utils/Layouts/GuestLayout"

export default function RegisterScreen({ navigation }) {
  return (
    <GuestLayout>
      <View>
        <Text style={styles.heading}>Register</Text>
      </View>
      <View>
        <Pressable
          onPress={() => {
            console.log("Register button pressed")
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
        <Text style={styles.secondaryText}>
          Already have an account?{" "}
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.link}>Login</Text>
          </Pressable>
        </Text>
      </View>
    </GuestLayout>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  link: {
    color: "royalblue",
  },
  secondaryText: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
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
    marginVertical: 10,
    width: "fit-content",
  },
  buttonText: {
    color: "#fff",
  },
  textInputField: {
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    marginBottom: 10,
    borderRadius: 5,
  },
})
