import React, { useContext, useEffect, useState } from "react"
import MapView, { Marker } from "react-native-maps"
import { StyleSheet, Text, View } from "react-native"
import dimensions from "../../../utils/constants/dimensions"
import { axiosInstance } from "../../../utils/config/api"
import { AuthContext } from "../../../contexts/AuthContext"
import {
  stringToLatitude,
  stringToLongitude,
} from "../../../utils/helpers/latLongHelpers"
import * as Location from "expo-location"

export default function GoogleMapExpo() {
  const [mapLat, setMapLat] = useState(28.25512169876163)
  const [mapLong, setMapLong] = useState(83.97633810555483)
  const [landmarkLocations, setLandmarkLocations] = useState([])
  const { user, logOut } = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        setErrorMessage("Permission to access location was denied")
        return
      }

      let location = await Location.getCurrentPositionAsync({})

      setMapLat(location.coords.latitude)
      setMapLong(location.coords.longitude)

      setLandmarkLocations((prevLandmarks) => [
        ...prevLandmarks,
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          title: "Your Location",
          address: "You are currenly here",
        },
      ])
    })()
  }, [])

  async function getLandmarks() {
    try {
      const response = await axiosInstance.get("/landmark/", {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      })
      setLandmarkLocations((prevLandmarks) => [
        ...prevLandmarks,
        ...response.data.map((item) => {
          return {
            latitude: stringToLatitude(item.latitude),
            longitude: stringToLongitude(item.longitude),
            title: item.name,
            address: item.address,
          }
        }),
      ])
    } catch (error) {
      if (error.response) {
        console.log(error.response.data)
      } else {
        console.log(error)
      }

      if (error.response.status === 401) {
        return logOut()
      }
    }
  }

  useEffect(() => {
    getLandmarks()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.error}>{errorMessage}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: mapLat,
          longitude: mapLong,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {landmarkLocations.map((item, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              title={`${item.title}`}
              description={item?.address ? item.address : null}
            />
          )
        })}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    height: dimensions.height - 300,
  },
})
