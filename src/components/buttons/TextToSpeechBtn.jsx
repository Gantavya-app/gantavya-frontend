import React, { useState } from "react"
import { Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import colors from "../../utils/constants/colors"
import * as Speech from "expo-speech"
import { useNavigation } from "@react-navigation/native"

const TextToSpeechBtn = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const navigation = useNavigation()

  navigation.addListener("beforeRemove", (e) => {
    Speech.stop()
  })

  function speak() {
    Speech.speak(text, {
      language: "en",
      pitch: 1,
      rate: 0.75,
    })
    setIsSpeaking(true)
  }

  function stop() {
    Speech.stop()
    setIsSpeaking(false)
  }

  return (
    <Pressable onPress={speak}>
      {!isSpeaking ? (
        <Ionicons
          name="volume-high-outline"
          size={24}
          color={colors.darkBlue}
        />
      ) : (
        <Pressable onPress={stop}>
          <Ionicons
            name="stop-circle-outline"
            size={24}
            color={colors.darkBlue}
          />
        </Pressable>
      )}
    </Pressable>
  )
}

export default TextToSpeechBtn
