import React, { useContext, useEffect, useState } from "react"
import { View, Text, ScrollView } from "react-native"
import UserLayout from "../../utils/Layouts/UserLayout"
import { axiosInstance } from "../../utils/config/api"
import { AuthContext } from "../../contexts/AuthContext"

export default function SavedScreen() {
  const [saved, setSaved] = useState([])
  const [loading, setLoading] = useState(true)
  const { user } = useContext(AuthContext)

  useEffect(() => {
    setLoading(true)

    axiosInstance
      .get("/landmark/saved/", {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      })
      .then((response) => {
        console.log(response.data)
        setSaved(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <UserLayout>
      <ScrollView>
        {loading ? (
          <View>
            <Text>Loading saved landmarks...</Text>
          </View>
        ) : saved.length === 0 ? (
          <View>
            <Text>No saved landmarks</Text>
          </View>
        ) : (
          saved.map((landmark) => (
            <View key={landmark.id}>
              <Text>{landmark.name}</Text>
              <Text>{landmark.description}</Text>
              <Image
                source={{ uri: landmark.image }}
                style={{ width: 100, height: 100 }}
              />
            </View>
          ))
        )}
      </ScrollView>
    </UserLayout>
  )
}
