import React from "react"
import { Text, View, Image, StyleSheet } from "react-native"

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>

      <Text style={styles.description}>
        Welcome to Gantavya, a project developed by a team of talented
        developers in fulfillment of the major project for our Bachelor of
        Computer Engineering course. Our goal is to promote tourism and provide
        users with a unique experience in exploring landmarks and historical
        sites.
      </Text>

      <Text style={styles.sectionTitle}>Project Details</Text>

      <Text style={styles.description}>
        Gantavya is built using React Native for the frontend, Django for the
        backend, and SQLite as the database. The project is designed to allow
        users to identify landmarks, view their historical importance, get
        directions, and discover nearby places of interest. One of the main
        features of Gantavya is the ability for users to upload a photo of a
        landmark, and the system will automatically identify it, provide
        details, directions, and information about nearby places.
      </Text>

      <Text style={styles.sectionTitle}>Developers</Text>

      <View style={styles.developerContainer}>
        <Image
          source={require("../../../../assets/images/sandesh_gc.jpeg")}
          style={styles.developerImage}
        />
        <Text style={styles.developerName}>Rupesh Ghimire</Text>
        <Text style={styles.developerRole}>Backend Developer</Text>
      </View>

      <View style={styles.developerContainer}>
        <Image
          source={require("../../../../assets/images/sandesh_gc.jpeg")}
          style={styles.developerImage}
        />
        <Text style={styles.developerName}>Rupesh Ghimire</Text>
        <Text style={styles.developerRole}>Backend Developer</Text>
      </View>

      <View style={styles.developerContainer}>
        <Image
          source={require("../../../../assets/images/sandesh_gc.jpeg")}
          style={styles.developerImage}
        />
        <Text style={styles.developerName}>Subek Sharma</Text>
        <Text style={styles.developerRole}>Machine Learning Specialist</Text>
      </View>

      <View style={styles.developerContainer}>
        <Image
          source={require("../../../../assets/images/sandesh_gc.jpeg")}
          style={styles.developerImage}
        />
        <Text style={styles.developerName}>Samir Gurung</Text>
        <Text style={styles.developerRole}>Data Collection Specialist</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  developerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  developerImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  developerName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  developerRole: {
    fontSize: 16,
    color: "#888",
  },
})

export default AboutScreen
