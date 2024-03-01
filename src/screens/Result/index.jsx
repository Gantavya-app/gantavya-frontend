import React, { useContext, useEffect, useState } from "react"
import { SafeAreaView, ScrollView, Text, View } from "react-native"
import ProgressBar from "react-native-progress/Bar"
import LandmarkDetails from "../../components/LandmarkDetails"
import { AuthContext } from "../../contexts/AuthContext"
import { axiosInstance } from "../../utils/config/api"

const ResultScreen = ({ route }) => {
  const { landmarkId, confidence_score } = route.params
  const { user } = useContext(AuthContext)

  const [landmarkDetails, setLandmarkDetails] = useState({
    is_saved: false,
    landmark: {},
    photos: [],
  })

  useEffect(() => {
    axiosInstance
      .get(`/landmark/${landmarkId}/`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      })
      .then((response) => {
        // console.log("landmark ", landmarkId, response?.data)
        setLandmarkDetails(response?.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View>
          <Text style={{ fontSize: 20, marginVertical: 4 }}>
            Prediction Results:
          </Text>
        </View>

        <View>
          <Text>Confidence Score: {(confidence_score * 100).toFixed(2)}%</Text>
          <ProgressBar progress={confidence_score} />
        </View>

        <LandmarkDetails
          isSaved={landmarkDetails?.is_saved}
          landmark={landmarkDetails?.landmark}
          photos={landmarkDetails?.photos}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ResultScreen
