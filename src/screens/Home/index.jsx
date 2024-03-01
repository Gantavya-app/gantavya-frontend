import React, { useContext, useEffect, useState } from "react"
import { ScrollView, StyleSheet } from "react-native"
import { axiosInstance } from "../../utils/config/api"
import UserLayout from "../../utils/Layouts/UserLayout"
import { AuthContext } from "../../contexts/AuthContext"
import FeaturedLandmarks from "./containers/FeaturedLandmarks"
import GreetingCard from "./containers/GreetingCard"

export default function HomeScreen() {
  const [greeting, setGreeting] = useState("")
  const [landmarks, setLandmarks] = useState([])
  const [time, setTime] = useState(
    new Date().toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    })
  )
  const { user, logOut } = useContext(AuthContext)

  useEffect(() => {
    axiosInstance
      .get("/landmark/", {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      })
      .then((response) => {
        setLandmarks(response.data)
      })
      .catch((error) => {
        console.log(error)
        if (error?.response?.status === 401) {
          console.log("Unauthorized")
          logOut()
        }

        console.error("Error fetching landmarks:", error)
      })
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

    const timeInterval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
        })
      )
    }, 1000)

    return () => {
      clearInterval(greetingInterval)
      clearInterval(timeInterval)
    }
  }, [])

  return (
    <UserLayout>
      <ScrollView>
        <GreetingCard greeting={greeting} time={time} />

        <FeaturedLandmarks landmarks={landmarks} />
      </ScrollView>
    </UserLayout>
  )
}
