import React from "react"
import { Text, ScrollView, Image, StyleSheet, View } from "react-native"

const AboutScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 16 }}
    >
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
          source={require("../../../../assets/images/rupesh_ghimire.jpeg")}
          style={styles.developerImage}
        />
        <View>
          <Text style={styles.developerName}>Rupesh Ghimire</Text>
          <Text style={styles.developerRole}>Backend Developer (Django)</Text>
        </View>
      </View>

      <View style={styles.developerContainer}>
        <Image
          source={require("../../../../assets/images/sandesh_gc.jpeg")}
          style={styles.developerImage}
        />
        <View>
          <Text style={styles.developerName}>Sandesh G.C.</Text>
          <Text style={styles.developerRole}>
            Frontend Developer (React Native)
          </Text>
        </View>
      </View>

      <View style={styles.developerContainer}>
        <Image
          source={{
            uri: "https://placehold.co/400",
          }}
          style={styles.developerImage}
        />
        <View>
          <Text style={styles.developerName}>Samir Gurung</Text>
          <Text style={styles.developerRole}>Data Collection Specialist</Text>
        </View>
      </View>

      <View style={styles.developerContainer}>
        <Image
          source={require("../../../../assets/images/subek_sharma.jpeg")}
          style={styles.developerImage}
        />
        <View>
          <Text style={styles.developerName}>Subek Sharma</Text>
          <Text style={styles.developerRole}>Machine Learning Specialist</Text>
        </View>
      </View>
    </ScrollView>
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
    fontSize: 12,
    color: "#888",
  },
})

export default AboutScreen
