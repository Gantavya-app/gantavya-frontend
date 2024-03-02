import React from "react"
import { Alert, Pressable, Share } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import colors from "../../utils/constants/colors"

const ShareLandmarkBtn = ({ content }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: content,
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(result.activityType)
          // shared with activity type of result.activityType
        } else {
          // shared
          console.log("shared")
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.log("dismissed")
      }
    } catch (error) {
      Alert.alert(error.message)
    }
  }

  return (
    <Pressable onPress={onShare}>
      <Ionicons name="share-outline" size={20} color={colors.darkBlue} />
    </Pressable>
  )
}

export default ShareLandmarkBtn
