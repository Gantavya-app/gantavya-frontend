import React, { useContext, useEffect, useState } from "react"
import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import ProgressBar from "react-native-progress/Bar"
import { AuthContext } from "../../contexts/AuthContext"
import { axiosInstance } from "../../utils/config/api"
import Chip from "../../components/common/Chip"
import LandmarkLocationCard from "../../components/cards/LandmarkLocationCard"
import ShareLandmarkBtn from "../../components/buttons/ShareLandmarkBtn"
import SaveLandmarkBtn from "../../components/buttons/SaveLandmarkBtn"

const ResultScreen = ({ navigation, route }) => {
  const { landmarkId, confidence_score } = route.params
  const { user } = useContext(AuthContext)
  const [refreshing, setRefreshing] = useState(false)

  const [landmarkDetails, setLandmarkDetails] = useState({
    is_saved: false,
    landmark: {},
    photos: [],
  })

  navigation.setOptions({
    headerTitle: () => (
      <Text fontSize={12}>{landmarkDetails?.landmark?.name}</Text>
    ),
    headerRight: () => (
      <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
        <ShareLandmarkBtn
          content={`${landmarkDetails?.landmark?.name}\n${landmarkDetails?.landmark?.description}`}
        />
        <SaveLandmarkBtn
          id={landmarkDetails.landmark.id}
          isSaved={landmarkDetails.is_saved}
        />
      </View>
    ),
  })

  function getLandmarkById(id) {
    axiosInstance
      .get(`/landmark/${id}/`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      })
      .then((response) => {
        // console.log("landmark ", id, response?.data)
        setLandmarkDetails(response?.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function onRefresh() {
    setRefreshing(true)

    getLandmarkById(landmarkId)

    setTimeout(() => {
      setRefreshing(false)
    })
  }

  useEffect(() => {
    onRefresh()
  }, [])

  return (
    <SafeAreaView
      contentContainerStyle={{ padding: 16 }}
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
    >
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

        <View>
          <View style={{ marginBottom: 8 }}>
            <Text style={styles.landmarkName}>
              {landmarkDetails.landmark?.name}
            </Text>
            <Chip text={landmarkDetails.landmark?.type} />
          </View>

          <ScrollView
            horizontal
            style={{ marginVertical: 24 }}
            showsHorizontalScrollIndicator={false}
          >
            {!landmarkDetails?.photos?.length ? (
              <Text>No photos available.</Text>
            ) : (
              landmarkDetails?.photos?.map((photo, index) => (
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
              ))
            )}
          </ScrollView>

          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 600 }}>Address:</Text>
            <Text style={{ color: colors.darkGrey }}>
              {landmarkDetails.landmark?.address}
            </Text>
          </View>

          <LandmarkLocationCard
            latitude={landmarkDetails?.landmark?.latitude}
            longitude={landmarkDetails?.landmark?.longitude}
          />

          <Text style={{ fontSize: 16, marginVertical: 8, fontWeight: 600 }}>
            Landmark Details:
          </Text>
          <Text style={{ color: colors.darkGrey }}>
            {landmarkDetails.landmark?.description}
          </Text>

          <Text style={{ fontSize: 16, marginVertical: 8, fontWeight: 600 }}>
            Facts:
          </Text>
          <Text style={{ color: colors.darkGrey }}>
            {landmarkDetails.landmark?.facts}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  landmarkName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
})

export default ResultScreen
