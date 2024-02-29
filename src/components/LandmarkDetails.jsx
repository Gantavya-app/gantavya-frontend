import React from "react"
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from "react-native"
import Chip from "../components/common/Chip"
import GText from "./common/GText"
import colors from "../utils/constants/colors"
import { Ionicons } from "@expo/vector-icons"
import { AxiosInstance } from "axios"

const LandmarkDetails = ({ landmark, photos }) => {
  function handleSave() {
    let is_saved = landmark?.isSaved

    if (landmark?.isSaved) {
      console.log("Unsave")

      // axiosInstance.post("/landmarks/unsave", {
      //   landmark_id: landmark?.id,
      // })

      return
    }

    console.log("Save")
  }

  return (
    <ScrollView>
      <View>
        <Text style={styles.landmarkName}>{landmark?.name}</Text>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <Chip text={landmark?.type} />
        </View>

        <View
          style={{
            marginVertical: 4,
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
          }}
        >
          <Pressable onPress={handleSave}>
            <Ionicons name="bookmark-outline" size={24} color="black" />
          </Pressable>
          <Ionicons name="share-outline" size={24} color="black" />
        </View>

        <GText style={{ fontSize: 16, marginVertical: 8, fontWeight: 600 }}>
          Location:
        </GText>
        <Text style={{ color: colors.darkGrey }}>{landmark?.latitude}</Text>
        <Text style={{ color: colors.darkGrey }}>{landmark?.longitude}</Text>

        <Text style={{ fontSize: 16, marginVertical: 8, fontWeight: 600 }}>
          Address:
        </Text>
        <Text style={{ color: colors.darkGrey }}>{landmark?.address}</Text>

        <ScrollView horizontal>
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

        <GText style={{ fontSize: 16, marginVertical: 8, fontWeight: 600 }}>
          Landmark Details:
        </GText>
        <Text style={{ color: colors.darkGrey }}>{landmark?.description}</Text>

        <Text style={{ fontSize: 16, marginVertical: 8, fontWeight: 600 }}>
          Facts:
        </Text>
        <Text style={{ color: colors.darkGrey }}>{landmark?.facts}</Text>
      </View>
    </ScrollView>
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
