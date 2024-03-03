import React, { useContext, useEffect, useState } from "react"
import { Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import ProgressCircleSnail from "react-native-progress/CircleSnail"
import colors from "../../utils/constants/colors"
import { LandmarkContext } from "../../contexts/LandmarkContext"

const SaveLandmarkBtn = ({ id, isSaved }) => {
  const [saved, setSaved] = useState(isSaved)

  const { loading, saveLandmark, unsaveLandmark } = useContext(LandmarkContext)

  useEffect(() => {
    setSaved(isSaved)
  }, [isSaved])

  function handleSave() {
    saveLandmark({ id })
    setSaved(true)
  }

  function handleUnsave() {
    unsaveLandmark({ id })
    setSaved(false)
  }

  return (
    <Pressable onPress={!saved ? handleSave : handleUnsave}>
      {loading ? (
        <ProgressCircleSnail size={24} />
      ) : saved ? (
        <Ionicons name="bookmark" size={20} color={colors.darkBlue} />
      ) : (
        <Ionicons name="bookmark-outline" size={20} color={colors.darkBlue} />
      )}
    </Pressable>
  )
}

export default SaveLandmarkBtn
