import React from "react"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import GuestLayout from "../../utils/Layouts/GuestLayout"
import LoginForm from "../../components/forms/LoginForm"

export default function LoginScreen({ navigation }) {
  return (
    <GuestLayout>
      <View>
        <Image
          source={require("../../../assets/logos/logo_green.png")}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.heading}>Login</Text>
      </View>
      <View>
        <LoginForm />

        <View style={{ marginTop: 24 }}>
          <Text style={styles.secondaryText}>
            Don't have an account?{" "}
            <Pressable onPress={() => navigation.navigate("Register")}>
              <Text style={styles.link}>Register</Text>
            </Pressable>
          </Text>
        </View>
      </View>
    </GuestLayout>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 20,
  },
  link: {
    color: "rgb(0,122, 255)",
  },
  secondaryText: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
  },
})
