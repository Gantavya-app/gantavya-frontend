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
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 4,
    backgroundColor: colors.darkBlue,
    color: colors.white,
    alignSelf: "flex-start",
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 3,
  },
})

export default Chip
