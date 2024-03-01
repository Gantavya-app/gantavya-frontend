import React from "react"
import { ScrollView, View, Text, Image, StyleSheet } from "react-native"
import Chip from "../components/common/Chip"
import GText from "./common/GText"
import colors from "../utils/constants/colors"

const LandmarkDetails = ({ landmark, photos }) => {
  return (
    <View>
      <View style={{ marginBottom: 8 }}>
        <Text style={styles.landmarkName}>{landmark?.name}</Text>
        <Chip text={landmark?.type} />
      </View>

      <ScrollView horizontal style={{ marginVertical: 24 }}>
        {!photos?.length ? (
          <Text>No photos available.</Text>
        ) : (
          photos?.map((photo, index) => (
            <>
              <Image
                key={index}
                source={{
                  uri:
                    photo?.photo_url ||
                    photo ||
                    "https://via.placeholder.com/200",
                }}
                style={{
                  width: 200,
                  height: 200,
                  marginRight: 10,
                  borderRadius: 12,
                  marginVertical: 8,
                }}
              />
            </>
          ))
        )}
      </ScrollView>

      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: 600 }}>Address:</Text>
        <Text style={{ color: colors.darkGrey }}>{landmark?.address}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          marginVertical: 10,
        }}
      >
        <Image
          source={require("../assets/icons/compass.png")}
          style={{ width: 36, height: 36 }}
        />
        <View>
          <Text style={{ color: colors.darkGrey }}>{landmark?.latitude}</Text>
          <Text style={{ color: colors.darkGrey }}>{landmark?.longitude}</Text>
        </View>
      </View>

      <GText style={{ fontSize: 16, marginVertical: 8, fontWeight: 600 }}>
        Landmark Details:
      </GText>
      <Text style={{ color: colors.darkGrey }}>{landmark?.description}</Text>

      <Text style={{ fontSize: 16, marginVertical: 8, fontWeight: 600 }}>
        Facts:
      </Text>
      <Text style={{ color: colors.darkGrey }}>{landmark?.facts}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  landmarkName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
})

export default LandmarkDetails
