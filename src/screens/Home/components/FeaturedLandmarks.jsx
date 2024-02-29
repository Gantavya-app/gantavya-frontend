import React from "react"
import colors from "../../../utils/constants/colors"
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native"
import Chip from "../../../components/common/Chip"

const FeaturedLandmarks = ({ landmarks }) => {
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
        <Pressable>
          <Text style={{ color: colors.darkBlue }}>View All</Text>
        </Pressable>
      </View>

      <FlatList
        data={landmarks.slice(0, 5)}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.landmarkCard}>
            {console.log(item.photos[0])}

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
              <Text style={styles.landmarkName}>{item.name}</Text>
              <Chip text={item?.type} />
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  landmarksContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  landmarksTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  landmarkCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginRight: 24,
    width: 240,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOpacity: 0.25,
  },
  landmarkName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
})

export default FeaturedLandmarks
