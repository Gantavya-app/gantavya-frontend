import React, { useContext } from "react"
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import dimensions from "../../../utils/constants/dimensions"
import { LandmarkContext } from "../../../contexts/LandmarkContext"

const LandmarkOfTheDay = () => {
  const { landmarkOfTheDay: landmark } = useContext(LandmarkContext)
  // console.log(landmark)
  const navigation = useNavigation()

  return !Object.keys(landmark).length ? (
    <ActivityIndicator />
  ) : (
    <Pressable
      onPress={() =>
        navigation.navigate("Landmark", {
          landmarkId: landmark?.id,
        })
      }
    >
      <View style={{ marginTop: 24, flex: 1 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 8,
          }}
        >
          For you
        </Text>
        <View key={landmark?.id} style={styles.cardContainer}>
          <Image
            source={{
              uri:
                landmark?.photos[0] ||
                `https://via.placeholder.com/${dimensions.width}`,
            }}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{landmark?.name}</Text>
            <Text style={styles.cardType}>{landmark?.type}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  cardImage: {
    width: dimensions.width,
    height: 175,
    objectFit: "cover",
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

export default LandmarkOfTheDay
