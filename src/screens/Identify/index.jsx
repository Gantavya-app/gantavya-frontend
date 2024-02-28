import React, { useState, useContext } from "react"
import { Text, ScrollView, View } from "react-native"
import UserLayout from "../../utils/Layouts/UserLayout"
import ImagePicker from "./components/ImagePicker"
import colors from "../../utils/constants/colors"
import { axiosInstance } from "../../utils/config/api"
import { AuthContext } from "../../contexts/AuthContext"

export default function IdentifyScreen() {
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [message, setMessage] = useState({
    type: "",
    content: "",
  })
  const { user } = useContext(AuthContext)

  async function handleUploadImage() {
    const requestBody = {
      image: photo.base64,
    }

    const response = await axiosInstance.post(
      "/landmark/prediction/",
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }
    )

    console.log(response)
    return response
  }

  return (
    <UserLayout>
      <ScrollView>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
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

          <ImagePicker
            setMessage={setMessage}
            setImagePreview={setImagePreview}
          />
        </View>
      </ScrollView>
    </UserLayout>
  )
}
