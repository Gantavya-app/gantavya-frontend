import React, { useContext } from "react"
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StyleSheet,
} from "react-native"
import { LandmarkContext } from "../../contexts/LandmarkContext"

export default function UserLayout({ children }) {
  const { loading, onRefresh } = useContext(LandmarkContext)

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={onRefresh} />
      }
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 36 }}
      style={styles.container}
    >
      {loading ? <ActivityIndicator /> : children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
