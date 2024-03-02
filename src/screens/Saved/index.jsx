import React, { useCallback, useContext, useEffect, useState } from "react"
import { View, Text, ScrollView, RefreshControl } from "react-native"
import UserLayout from "../../utils/Layouts/UserLayout"
import { axiosInstance } from "../../utils/config/api"
import { AuthContext } from "../../contexts/AuthContext"
import SavedLandmarkCard from "../../components/cards/SavedLandmarkCard"

export default function SavedScreen() {
  const [saved, setSaved] = useState([])
  const { user } = useContext(AuthContext)

  async function getSavedLandmarks() {
    axiosInstance
      .get("/landmark/saved/", {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      })
      .then((response) => {
        // console.log("saved", response.data)
        setSaved(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getSavedLandmarks()
  }, [])

  return (
    <UserLayout>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 16 }}>
        Saved Landmarks
      </Text>
      {saved.length === 0 ? (
        <View>
          <Text>No saved landmarks</Text>
        </View>
      ) : (
        <View style={{ alignItems: "center" }}>
          {saved.map((item) => (
            <View style={{ marginVertical: 8 }} key={item?.id}>
              <SavedLandmarkCard
                name={item?.name}
                id={item?.id}
                type={item?.type}
                image={item?.photos[0]}
              />
            </View>
          ))}
        </View>
      )}
    </UserLayout>
  )
}
