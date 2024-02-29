import React from "react"
import { View, Image, Text, ScrollView, StyleSheet } from "react-native"

const SavedLandmarkCard = () => {
  const landmarks = [
    {
      id: 1,
      title: "Eiffel Tower",
      type: "Monument",
      image: "",
    },
    {
      id: 2,
      title: "Taj Mahal",
      type: "Monument",
      image: "",
    },
  ]

  return (
    <ScrollView>
      {landmarks.map((landmark) => (
        <View key={landmark.id} style={styles.cardContainer}>
          <Image
            source={landmark.image}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{landmark.title}</Text>
            <Text style={styles.cardType}>{landmark.type}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardType: {
    fontSize: 14,
    color: "#888",
  },
})

export default SavedLandmarkCard
