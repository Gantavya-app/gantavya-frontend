import React, { useCallback, useContext, useEffect, useState } from "react"
import { View, Text, ScrollView, Image, RefreshControl } from "react-native"
import UserLayout from "../../utils/Layouts/UserLayout"
import { axiosInstance } from "../../utils/config/api"
import { AuthContext } from "../../contexts/AuthContext"
import SavedLandmarkCard from "../../components/cards/SavedLandmarkCard"

export default function SavedScreen() {
  const [saved, setSaved] = useState([])
  const { user } = useContext(AuthContext)

  const [refreshing, setRefreshing] = useState(false)

  async function getSavedLandmarks() {
    setRefreshing(true)
    axiosInstance
      .get("/landmark/saved/", {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      })
      .then((response) => {
        console.log("saved", response.data)
        setSaved(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setRefreshing(false)
      })
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true)

    getSavedLandmarks()

    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }, [])

  useEffect(() => {
    onRefresh()
  }, [])

  return (
    <UserLayout>
      <ScrollView
        contentContainerStyle={{ padding: 16 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {refreshing ? (
          <View>
            <Text>refreshing saved landmarks...</Text>
          </View>
        ) : saved.length === 0 ? (
          <View>
            <Text>No saved landmarks</Text>
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={{ padding: 16, alignItems: "center" }}
          >
            {saved.map((item) => (
              <SavedLandmarkCard
                key={item?.id}
                name={item?.name}
                id={item?.id}
                type={item?.type}
                image={item?.photos[0]}
              />
            ))}
          </ScrollView>
        )}
      </ScrollView>
    </UserLayout>
  )
}
