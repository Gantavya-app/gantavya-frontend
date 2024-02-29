import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Chip = ({ text }) => {
  return (
    <View>
      <Text style={styles.chipTextStyle}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  chipTextStyle: {
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: colors.darkBlue,
    color: colors.white,
    alignSelf: "flex-start",
    borderRadius: 100,
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
})

export default Chip
