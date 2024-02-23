import React, { useState, useEffect, useContext } from "react"
import { Button, Image, View, Platform } from "react-native"
import * as ExpoImagePicker from "expo-image-picker"
import { axiosInstance } from "../../../utils/config/api"
import { AuthContext } from "../../../contexts/AuthContext"

export default function ImagePicker() {
  const { user } = useContext(AuthContext)

  const [imagePreview, setImagePreview] = useState(null)

  const pickImage = async () => {
    let result = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      base64: true,
    })

    if (result.canceled) {
      return
    }

    const photo = result.assets[0]
    let localUri = photo.uri
    // let filename = localUri?.split("/").pop()
    setImagePreview(localUri)

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
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {imagePreview && (
        <Image
          source={{ uri: imagePreview }}
          style={{ width: 200, height: 200 }}
        />
      )}
    </View>
  )
}
