import React, { useContext } from "react"
import colors from "../../../utils/constants/colors"
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import Chip from "../../../components/common/Chip"
import { useNavigation } from "@react-navigation/native"
import { LandmarkContext } from "../../../contexts/LandmarkContext"

const FeaturedLandmarks = () => {
  const navigation = useNavigation()
  const { featuredLandmarks: landmarks } = useContext(LandmarkContext)

  return (
    <View style={styles.landmarksContainer}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <Text style={styles.landmarksTitle}>Featured Landmarks</Text>
        <Pressable onPress={() => navigation.navigate("Explore")}>
          <Text style={{ color: colors.darkBlue }}>View All</Text>
        </Pressable>
      </View>
      {!landmarks.length ? (
        <Text>No landmarks to show</Text>
      ) : (
        <ScrollView
          horizontal
          contentContainerStyle={{
            gap: 24,
          }}
          showsHorizontalScrollIndicator={false}
        >
          {landmarks.map((item, index) => (
            <Pressable
              key={item?.id}
              onPress={() =>
                navigation.navigate("Landmark", {
                  landmarkId: item.id,
                })
              }
            >
              <View style={styles.landmarkCard}>
                <Image
                  source={{
                    uri: item?.photos?.length
                      ? item?.photos[0]
                      : "https://via.placeholder.com/150",
                  }}
                  style={{
                    width: "100%",
                    height: 150,
                    borderRadius: 5,
                    objectFit: "cover",
                    marginBottom: 8,
                  }}
                />
                <View>
                  <Text style={styles.landmarkName}>{item?.name}</Text>
                  <Chip text={item?.type} />
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  landmarksContainer: {
    marginTop: 24,
  },
  landmarksTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  landmarkCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    width: 240,
    flex: 1,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOpacity: 0.25,
  },
  landmarkName: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },
})

export default FeaturedLandmarks
