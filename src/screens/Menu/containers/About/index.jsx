import React from "react"
import { Text, ScrollView, Image, StyleSheet, View } from "react-native"
import colors from "../../../../utils/constants/colors"
import UserLayout from "../../../../utils/Layouts/UserLayout"

const AboutScreen = () => {
  return (
    <UserLayout>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text selectable style={styles.sectionTitle}>
          About Gantavya
        </Text>
        <Text selectable style={styles.description}>
          Welcome to Gantavya, a project developed by a team of talented
          developers in fulfillment of the major project for our Bachelor of
          Computer Engineering course. Our goal is to promote tourism and
          provide users with a unique experience in exploring landmarks and
          historical sites.
        </Text>
        <Text selectable style={styles.sectionTitle}>
          Project Details
        </Text>
        <Text selectable style={styles.description}>
          Gantavya is built using React Native for the frontend, Django for the
          backend, and SQLite as the database. The project is designed to allow
          users to identify landmarks, view their historical importance, get
          directions, and discover nearby places of interest. One of the main
          features of Gantavya is the ability for users to upload a photo of a
          landmark, and the system will automatically identify it, provide
          details, directions, and information about nearby places.
        </Text>
        <Text selectable style={styles.sectionTitle}>
          Developers
        </Text>
        <View style={styles.developerContainer}>
          <Image
            source={require("../../../../assets/images/rupesh_ghimire.jpeg")}
            style={styles.developerImage}
          />
          <View>
            <Text selectable style={styles.developerName}>
              Rupesh Ghimire
            </Text>
            <Text selectable style={styles.developerRole}>
              Backend Developer (Django)
            </Text>
          </View>
        </View>
        <View style={styles.developerContainer}>
          <Image
            source={require("../../../../assets/images/sandesh_gc.jpeg")}
            style={styles.developerImage}
          />
          <View>
            <Text selectable style={styles.developerName}>
              Sandesh G.C.
            </Text>
            <Text selectable style={styles.developerRole}>
              Frontend Developer (React Native)
            </Text>
          </View>
        </View>
        <View style={styles.developerContainer}>
          <Image
            source={require("../../../../assets/images/samir_gurung.jpeg")}
            style={styles.developerImage}
          />
          <View>
            <Text selectable style={styles.developerName}>
              Samir Gurung
            </Text>
            <Text selectable style={styles.developerRole}>
              Data Collection Specialist
            </Text>
          </View>
        </View>
        <View style={styles.developerContainer}>
          <Image
            source={require("../../../../assets/images/subek_sharma.jpeg")}
            style={styles.developerImage}
          />
          <View>
            <Text selectable style={styles.developerName}>
              Subek Sharma
            </Text>
            <Text selectable style={styles.developerRole}>
              Machine Learning Specialist
            </Text>
          </View>
        </View>
      </ScrollView>
    </UserLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: colors.darkGrey,
    marginBottom: 20,
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
