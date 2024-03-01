import React, { useContext, useState } from "react"
import { Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import ProgressCircleSnail from "react-native-progress/CircleSnail"
import { axiosInstance } from "../utils/config/api"
import { AuthContext } from "../contexts/AuthContext"

const SaveLandmarkBtn = ({ id, isSaved }) => {
  const [saved, setSaved] = useState(isSaved)
  const [loading, setLoading] = useState(false)
  const { user } = useContext(AuthContext)

  function handleSave() {
    setLoading(true)
    axiosInstance
      .post(
        `/landmark/saved_by/${id}/`,
        {
          is_saved: true,
        },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      )
      .then((response) => {
        setSaved(true)
      })
      .catch((err) => {
        console.log("save error", err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  function handleUnsave() {
    setLoading(true)

    axiosInstance
      .post(
        `/landmark/saved_by/${id}/`,
        {
          is_saved: "false",
        },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      )
      .then((response) => {
        setSaved(false)
      })
      .catch((err) => {
        console.log("unsave error", err)
      })
      .finally(() => {
        setLoading(false)
      })
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
