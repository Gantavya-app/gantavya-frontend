import React from "react"
import { ScrollView, View, Text, Image, StyleSheet } from "react-native"

const LandmarkDetails = ({ landmark, photos }) => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.landmarkName}>{landmark?.name}</Text>
        <Text>{landmark?.type}</Text>
        <Text>{landmark?.latitude}</Text>
        <Text>{landmark?.longitude}</Text>

        <Text style={{ fontSize: 16, marginVertical: 8, fontWeight: 600 }}>
          Address:
        </Text>
        <Text>{landmark?.address}</Text>

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

        <Text style={{ fontSize: 16, marginVertical: 8, fontWeight: 600 }}>
          Landmark Details:
        </Text>
        <Text>{landmark?.description}</Text>

        <Text style={{ fontSize: 16, marginVertical: 8, fontWeight: 600 }}>
          Facts:
        </Text>
        <Text>{landmark?.facts}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  landmarkName: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 8,
  },
})

export default LandmarkDetails
