import React, { useContext, useEffect, useState } from "react"
import { ScrollView } from "react-native"
import LandmarkDetails from "../../components/LandmarkDetails"
import { axiosInstance } from "../../utils/config/api"
import { AuthContext } from "../../contexts/AuthContext"

const LandmarkScreen = ({ navigation, route }) => {
  const { landmarkId } = route.params
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
        console.log("landmark ", landmarkId, response?.data)
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
