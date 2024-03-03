import React, { useContext, useEffect, useState } from "react"
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import ProgressBar from "react-native-progress/Bar"
import Chip from "../../components/common/Chip"
import LandmarkLocationCard from "../../components/cards/LandmarkLocationCard"
import ShareLandmarkBtn from "../../components/buttons/ShareLandmarkBtn"
import SaveLandmarkBtn from "../../components/buttons/SaveLandmarkBtn"
import colors from "../../utils/constants/colors"
import UserLayout from "../../utils/Layouts/UserLayout"
import MapView, { Marker } from "react-native-maps"
import {
  stringToLatitude,
  stringToLongitude,
} from "../../utils/helpers/latLongHelpers"
import TextToSpeechBtn from "../../components/buttons/TextToSpeechBtn"
import { LandmarkContext } from "../../contexts/LandmarkContext"

const ResultScreen = ({ navigation, route }) => {
  const { landmarkId, confidence_score } = route.params
  const { landmark, getLandmarkById } = useContext(LandmarkContext)

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <ShareLandmarkBtn
            content={`${landmark?.name}\n${landmark?.address}\n${landmark?.description}`}
          />
          <SaveLandmarkBtn id={landmark.id} isSaved={landmark.isSaved} />
          <TextToSpeechBtn
            text={`${landmark?.name}\n${landmark?.address}\n${landmark?.description}\n${landmark?.facts}\n`}
          />
        </View>
      ),
    })
  }, [])

  useEffect(() => {
    getLandmarkById({ id: landmarkId })
  }, [])

  return (
    <UserLayout>
      <View>
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.landmarkName}>{landmark?.name}</Text>
          <Chip text={landmark?.type} />
        </View>

        <View style={{ flex: 1 }}>
          <Text>Confidence Score: {(confidence_score * 100).toFixed(2)}%</Text>
          <ProgressBar progress={confidence_score} width={300} height={24} />
        </View>

        <ScrollView
          horizontal
          style={{ marginVertical: 24 }}
          showsHorizontalScrollIndicator={false}
        >
          {!landmark?.photos?.length ? (
            <Text>No photos available.</Text>
          ) : (
            landmark?.photos?.map((photo, index) => (
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
          <Text style={{ color: colors.darkGrey }}>{landmark?.address}</Text>
        </View>

        <LandmarkLocationCard
          latitude={landmark?.latitude}
          longitude={landmark?.longitude}
        />

        <Text style={{ fontSize: 16, marginVertical: 8, fontWeight: 600 }}>
          Landmark Details:
        </Text>
        <Text style={{ color: colors.darkGrey }} selectable>
          {landmark?.description}
        </Text>

        <Text style={{ fontSize: 16, marginVertical: 8, fontWeight: 600 }}>
          Facts:
        </Text>
        <Text style={{ color: colors.darkGrey }} selectable>
          {landmark?.facts}
        </Text>
      </View>

      <View>
        <Text style={{ fontSize: 16, marginTop: 24, fontWeight: 600 }}>
          Location:
        </Text>

        {!Object.keys(landmark).length ? (
          <ActivityIndicator />
        ) : (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: stringToLatitude(landmark?.latitude),
              longitude: stringToLongitude(landmark?.longitude),
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: stringToLatitude(landmark?.latitude),
                longitude: stringToLongitude(landmark?.longitude),
              }}
              title={landmark?.name}
              description={landmark?.address}
            />
          </MapView>
        )}
      </View>
    </UserLayout>
  )
}

const styles = StyleSheet.create({
  landmarkName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  map: {
    height: 200,
    marginTop: 8,
  },
})

export default ResultScreen
