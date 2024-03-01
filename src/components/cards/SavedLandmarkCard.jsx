import React from "react"
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native"
import dimensions from "../../utils/constants/dimensions"
import { useNavigation } from "@react-navigation/core"

const SavedLandmarkCard = ({ name, id, image, type }) => {
  const navigation = useNavigation()

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Landmark", {
          landmarkId: id,
        })
      }
    >
      <View key={id} style={styles.cardContainer}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.cardImage}
          resizeMode="cover"
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text style={styles.cardType}>{type}</Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 310,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  cardImage: {
    width: dimensions.width,
    height: 175,
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
