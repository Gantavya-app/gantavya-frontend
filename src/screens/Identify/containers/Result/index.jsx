import React from "react"
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import ProgressBar from "react-native-progress/Bar"

const ResultScreen = ({ route }) => {
  const { data } = route.params
  const { landmark, confidence_score, photos } = data

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
          {photos.map((photo, index) => (
            <Image
              key={index}
              source={{ uri: photo }}
              style={{ width: 200, height: 200 }}
            />
          ))}
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
