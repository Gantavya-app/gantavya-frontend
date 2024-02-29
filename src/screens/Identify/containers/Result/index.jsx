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
import LandmarkDetails from "../../../../components/LandmarkDetails"

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

        <LandmarkDetails landmark={landmark} photos={photos} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ResultScreen
