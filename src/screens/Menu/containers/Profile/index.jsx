import React, { useContext } from "react"
import { Text, View } from "react-native"
import { AuthContext } from "../../../../contexts/AuthContext"
import { Ionicons } from "@expo/vector-icons"
import colors from "../../../../utils/constants/colors"
import UserLayout from "../../../../utils/Layouts/UserLayout"
import PredictionHistory from "./PredictionHistory"
import EditProfile from "./EditProfile"

const ProfileScreen = ({ navigation }) => {
  const { user } = useContext(AuthContext)

  return (
    <UserLayout>
      <View>
        <View style={{ alignItems: "center" }}>
          <Ionicons
            name="person-circle-outline"
            size={96}
            color={colors.darkBlue}
          />
          <Text style={{ fontSize: 16, fontWeight: 600 }}>{user?.name}</Text>
          <Text style={{ color: colors.darkGrey }}>{user?.email}</Text>
        </View>
        <EditProfile />
      </View>

      <View>
        <Text style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>
          Prediction History
        </Text>
        <PredictionHistory />
      </View>
    </UserLayout>
  )
}

export default ProfileScreen
