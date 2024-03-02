import React, { useState, useContext, useEffect } from "react"
import { Text, ScrollView, View, Image } from "react-native"
import UserLayout from "../../utils/Layouts/UserLayout"
import ImagePicker from "./components/ImagePicker"
import colors from "../../utils/constants/colors"
import { axiosInstance } from "../../utils/config/api"
import { AuthContext } from "../../contexts/AuthContext"
import ProgressCircleSnail from "react-native-progress/CircleSnail"

export default function IdentifyScreen({ navigation, route }) {
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [message, setMessage] = useState({
    type: "",
    content: "",
  })
  const [loading, setLoading] = useState(false)

  const { user } = useContext(AuthContext)

  async function handleUploadImage() {
    setLoading(true)
    setMessage({
      type: "",
      content: "",
    })

    const requestBody = {
      image: image.base64,
    }

    axiosInstance
      .post("/landmark/prediction/", requestBody, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      })
      .then((response) => {
        const {
          confidence_score,
          landmark: { id },
        } = response.data

        navigation.navigate("PredictionResult", {
          landmarkId: id,
          confidence_score: confidence_score,
        })
      })
      .catch((error) => {
        if (error?.response?.status === 401) {
          setMessage({
            type: "error",
            content: "You are not authorized to perform this action",
          })
        }
        if (error?.response?.status === 400) {
          setMessage({
            type: "error",
            content: error?.response?.data?.detail || "Invalid image format",
          })
        }
        if (error?.response?.status === 500) {
          setMessage({
            type: "error",
            content: "Internal server error",
          })
        }
        console.error(error)
      })
      .finally(() => {
        setImage(null)
        setImagePreview(null)
        setLoading(false)
      })
  }

  useEffect(() => {
    if (image) {
      handleUploadImage()
    }
  }, [image])

  return (
    <UserLayout>
      <ScrollView>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 16 }}>
          Identify Landmark
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 16 }}>
          Take a snap and identify the landmark
        </Text>

        <View style={{ gap: 16 }}>
          {imagePreview && (
            <Image
              source={{ uri: imagePreview }}
              style={{ width: 200, height: 200 }}
            />
          )}
          {message && (
            <Text style={{ color: colors[message.type], fontSize: 16 }}>
              {message.content}
            </Text>
          )}

          {loading ? (
            <View style={{ alignItems: "center" }}>
              <Text>Identifying...</Text>
              <ProgressCircleSnail size={64} />
            </View>
          ) : (
            <ImagePicker
              setMessage={setMessage}
              setImage={setImage}
              setImagePreview={setImagePreview}
            />
          )}
        </View>
      </ScrollView>
    </UserLayout>
  )
}
