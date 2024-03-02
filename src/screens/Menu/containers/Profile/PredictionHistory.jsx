import React, { useContext, useEffect, useState } from "react"
import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  ScrollView,
} from "react-native"
import { axiosInstance } from "../../../../utils/config/api"
import ProgressCircleSnail from "react-native-progress/CircleSnail"
import { AuthContext } from "../../../../contexts/AuthContext"
import { useNavigation } from "@react-navigation/native"
import colors from "../../../../utils/constants/colors"

const PredictionHistory = () => {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)

  const { user } = useContext(AuthContext)

  const fetchPredictionHistory = async () => {
    setLoading(true)
    try {
      const response = await axiosInstance.get("/landmark/history", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      const data = response.data
      setHistory(data)
    } catch (error) {
      console.error("Error fetching prediction history:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Fetch prediction history from the backend

    fetchPredictionHistory()
  }, [])

  return (
    <View>
      {loading ? (
        <ProgressCircleSnail size={48} />
      ) : !history.length ? (
        <Text>No prediction history.</Text>
      ) : (
        <PredictionHistoryList history={history} />
      )}
    </View>
  )
}

const PredictionHistoryList = ({ history }) => {
  return (
    <ScrollView>
      {history.map((landmark) => (
        <PredictionHistoryItem key={landmark.id} landmark={landmark} />
      ))}
    </ScrollView>
  )
}

const PredictionHistoryItem = ({ landmark }) => {
  const navigation = useNavigation()

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Landmark", {
          landmarkId: landmark.id,
        })
      }
      style={{ marginVertical: 6 }}
    >
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Image
          source={{
            uri: landmark.photos[0],
          }}
          style={{ width: 64, height: 64, borderRadius: 10 }}
        />
        <View>
          <Text>{landmark.name}</Text>
          <Text style={{ color: colors.darkGrey, fontSize: 12 }}>
            {landmark.type}
          </Text>
          <Text style={{ color: colors.darkGrey }}>{landmark.address}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default PredictionHistory
