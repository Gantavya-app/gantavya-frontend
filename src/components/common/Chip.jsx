import React from "react"
import { StyleSheet, Text, View } from "react-native"
import colors from "../../utils/constants/colors"

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
    backgroundColor: colors.lightGreen,
    color: colors.darkGreen,
    alignSelf: "flex-start",
    borderRadius: 100,
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
})

export default Chip
