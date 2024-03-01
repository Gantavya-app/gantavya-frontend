import React, { useEffect, useState } from "react"
import { ActivityIndicator, RefreshControl, ScrollView } from "react-native"
import UserLayout from "../../utils/Layouts/UserLayout"
import GoogleMapExpo from "./components/GoogleMapExpo"

export default function ExploreScreen() {
  const [refreshing, setRefreshing] = useState(false)

  function onRefresh() {
    setRefreshing(true)

    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }

  useEffect(() => {
    onRefresh()
  }, [])

  return (
    <UserLayout>
      {refreshing ? (
        <ActivityIndicator />
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <GoogleMapExpo />
        </ScrollView>
      )}
    </UserLayout>
  )
}
