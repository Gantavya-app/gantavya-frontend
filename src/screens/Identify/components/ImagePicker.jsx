import React from "react"
import Button from "../../../components/common/Button"
import { View } from "react-native"
import * as ExpoImagePicker from "expo-image-picker"
import { Ionicons } from "@expo/vector-icons"
import colors from "../../../utils/constants/colors"

export default function ImagePicker({ setMessage, setImagePreview }) {
  const pickImage = async () => {
    let result = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      base64: true,
    })

    if (result.canceled) {
      setMessage({ type: "error", content: "Image selection cancelled" })
      return
    }

    const photo = result.assets[0]
    let localUri = photo.uri
    // let filename = localUri?.split("/").pop()
    setImagePreview(localUri)
  }

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Choose from Gallery"
        onPress={pickImage}
        icon={<Ionicons name="image-outline" size={20} color={colors.white} />}
      />
    </View>
  )
}
