import React, { useContext, useEffect, useState } from "react"
import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { axiosInstance } from "../../utils/config/api"
import { AuthContext } from "../../contexts/AuthContext"
import SaveLandmarkBtn from "../../components/buttons/SaveLandmarkBtn"
import ShareLandmarkBtn from "../../components/buttons/ShareLandmarkBtn"
import LandmarkLocationCard from "../../components/cards/LandmarkLocationCard"
import Chip from "../../components/common/Chip"
import colors from "../../utils/constants/colors"

const LandmarkScreen = ({ navigation, route }) => {
  const { landmarkId } = route.params
  const { user } = useContext(AuthContext)
  const [refreshing, setRefreshing] = useState(false)

  const [landmarkDetails, setLandmarkDetails] = useState({
    is_saved: false,
    landmark: {},
    photos: [],
  })

  navigation.setOptions({
    headerRight: () => (
      <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
        <ShareLandmarkBtn
          content={`${landmarkDetails?.landmark?.name}\nDescription:\n${landmarkDetails?.landmark?.description}\nFacts:\n${landmarkDetails?.landmark?.facts}\nAddress:\n${landmarkDetails?.landmark?.address}`}
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
    <ScrollView
      contentContainerStyle={{ padding: 16 }}
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
    >
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

        <Text
          style={{ fontSize: 16, marginVertical: 8, fontWeight: 600 }}
          selectable
        >
          Landmark Details:
        </Text>
        <Text
          style={{ color: colors.darkGrey }}
          selectable
          selectionColor={colors.lightGreen}
        >
          {landmarkDetails.landmark?.description}
        </Text>

        <Text
          style={{ fontSize: 16, marginVertical: 8, fontWeight: 600 }}
          selectable
          selectionColor={colors.lightGreen}
        >
          Facts:
        </Text>
        <Text
          style={{ color: colors.darkGrey }}
          selectable
          selectionColor={colors.lightGreen}
        >
          {landmarkDetails.landmark?.facts}
        </Text>
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

export default LandmarkScreen
