import React from "react"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import GuestLayout from "../../utils/Layouts/GuestLayout"
import LoginForm from "../../components/forms/LoginForm"

export default function LoginScreen({ navigation }) {
  return (
    <GuestLayout>
      <View style={styles.containerStyle}>
        <View>
          <Image
            source={require("../../../assets/logos/logo_green.png")}
            style={styles.logoStyle}
          />
          <Text style={styles.heading}>Login</Text>
        </View>
        <View>
          <LoginForm />
          <View style={styles.secondaryTextGroup}>
            <Text style={styles.secondaryText}>Don't have an account? </Text>
            <Pressable onPress={() => navigation.navigate("Register")}>
              <Text style={styles.link}>Register</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </GuestLayout>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  logoStyle: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 50,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  link: {
    color: "rgb(0,122, 255)",
  },
  secondaryText: {
    color: "gray",
  },
  secondaryTextGroup: {
    flexDirection: "row",
    justifyContent: "center",
  },
})
