import React from "react"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import GuestLayout from "../../utils/Layouts/GuestLayout"
import RegisterForm from "../../components/forms/RegisterForm"

export default function RegisterScreen({ navigation }) {
  return (
    <GuestLayout>
      <View style={styles.containerStyle}>
        <View>
          <Image
            source={require("../../../assets/logos/logo_green.png")}
            style={styles.logoStyle}
          />
          <Text style={styles.heading}>Register</Text>
        </View>
        <View>
          <RegisterForm />

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={styles.secondaryText}>Already have an account? </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text style={styles.link}>Login</Text>
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
})
