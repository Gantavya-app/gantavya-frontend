import React from "react"
import { View, Image, Text } from "react-native"
import colors from "../../utils/constants/colors"

const LandmarkLocationCard = ({ latitude, longitude }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginVertical: 10,
      }}
    >
      <Image
        source={require("../../assets/icons/compass.png")}
        style={{ width: 36, height: 36 }}
      />
      <View>
        <Text style={{ color: colors.darkGrey }}>{latitude}</Text>
        <Text style={{ color: colors.darkGrey }}>{longitude}</Text>
      </View>
    </View>
  )
}

export default LandmarkLocationCard
