import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import colors from "../../../utils/constants/colors"

const GreetingCard = () => {
  const [greeting, setGreeting] = useState("")
  const [time, setTime] = useState(
    new Date().toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    })
  )

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
        })
      )
    }, 1000)

    const currentHour = new Date().getHours()
    if (currentHour < 12) {
      setGreeting("Good morning!")
    } else if (currentHour < 18) {
      setGreeting("Good afternoon!")
    } else {
      setGreeting("Good evening!")
    }

    return () => {
      clearInterval(timeInterval)
    }
  }, [])

  useEffect(() => {
    const greetingInterval = setInterval(() => {
      const currentHour = new Date().getHours()
      if (currentHour < 12) {
        setGreeting("Good morning!")
      } else if (currentHour < 18) {
        setGreeting("Good afternoon!")
      } else {
        setGreeting("Good evening!")
      }
    }, 60000)

    return () => {
      clearInterval(greetingInterval)
    }
  }, [time])

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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  timeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.darkGreen,
  },

  dateText: {
    fontSize: 14,
    color: colors.darkGrey,
  },
})

export default GreetingCard
