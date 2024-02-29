import React from "react"
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import ProgressBar from "react-native-progress/Bar"

const ResultScreen = ({ route }) => {
  const { data } = route.params
  const { landmark, confidence_score, photos } = data

  console.log(data)

  return (
    <SafeAreaView>
      <ScrollView
        style={{ padding: 16 }}
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        <View>
          <Text style={{ fontSize: 20, marginVertical: 4 }}>
            Prediction Results:
          </Text>
        </View>

        <View>
          <Text>Confidence Score: {(confidence_score * 100).toFixed(2)}%</Text>
          <ProgressBar progress={confidence_score} />
        </View>

        <ScrollView horizontal>
          {!photos?.length ? (
            <Text>No photos available.</Text>
          ) : (
            photos?.map((photo, index) => (
              <>
                {console.log(photo.photo_url)}
                <Image
                  key={index}
                  source={{
                    uri: photo.photo_url || "https://via.placeholder.com/200",
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

        <View>
          <Text style={styles.landmarkName}>{landmark?.name}</Text>
          <Text>{landmark?.type}</Text>
          <Text>{landmark?.latitude}</Text>
          <Text>{landmark?.longitude}</Text>

          <Text style={{ fontSize: 16, marginVertical: 8, fontWeight: 600 }}>
            Address:
          </Text>
          <Text>{landmark?.address}</Text>

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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  landmarkName: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 8,
  },
})

export default ResultScreen
