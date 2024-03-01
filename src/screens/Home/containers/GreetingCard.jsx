import React from "react"
import { View, Text, StyleSheet } from "react-native"
import colors from "../../../utils/constants/colors"

const GreetingCard = ({ greeting, time }) => {
  return (
    <View style={styles.greetingCard}>
      <Text style={styles.greeting}>{greeting}</Text>

      <Text style={styles.timeText}>{time}</Text>
      <Text style={styles.dateText}>
        {new Date().toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  greetingCard: {
    backgroundColor: colors.lightGreen,
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  timeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.darkGrey,
  },

  dateText: {
    fontSize: 14,
    marginTop: 8,
    color: colors.darkGrey,
  },
})

export default GreetingCard
