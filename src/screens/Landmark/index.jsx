import React, { useContext, useEffect, useState } from "react"
import { ScrollView, Text, View } from "react-native"
import LandmarkDetails from "../../components/LandmarkDetails"
import { axiosInstance } from "../../utils/config/api"
import { AuthContext } from "../../contexts/AuthContext"
import SaveLandmarkBtn from "../../components/SaveLandmarkBtn"
import ShareLandmarkBtn from "../../components/ShareLandmarkBtn"

const LandmarkScreen = ({ navigation, route }) => {
  const { landmarkId } = route.params
  const { user } = useContext(AuthContext)

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
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <LandmarkDetails
        isSaved={landmarkDetails.is_saved}
        landmark={landmarkDetails.landmark}
        photos={landmarkDetails?.photos}
      />
    </ScrollView>
  )
}

export default LandmarkScreen
