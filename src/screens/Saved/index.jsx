import React, { useContext } from "react"
import { View, Text, ActivityIndicator } from "react-native"
import UserLayout from "../../utils/Layouts/UserLayout"
import SavedLandmarkCard from "../../components/cards/SavedLandmarkCard"
import { LandmarkContext } from "../../contexts/LandmarkContext"

export default function SavedScreen() {
  const { loading, savedLandmarks } = useContext(LandmarkContext)

  return (
    <UserLayout>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 16 }}>
        Saved Landmarks
      </Text>
      {loading ? (
        <ActivityIndicator />
      ) : savedLandmarks?.length === 0 ? (
        <View>
          <Text>No saved landmarks</Text>
        </View>
      ) : (
        <View style={{ alignItems: "center" }}>
          {savedLandmarks.map((item, index) =>
            !Object.keys(item).length ? (
              <ActivityIndicator />
            ) : (
              <View style={{ marginVertical: 8 }} key={item?.id + index}>
                <SavedLandmarkCard
                  name={item?.name}
                  id={item?.id}
                  type={item?.type}
                  image={item?.photos[0] || "https://via.placeholder.com/300"}
                />
              </View>
            )
          )}
        </View>
      )}
    </UserLayout>
  )
}
