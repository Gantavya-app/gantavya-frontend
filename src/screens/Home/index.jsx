import React, { useContext, useEffect, useState } from "react"
import { ScrollView } from "react-native"
import { axiosInstance } from "../../utils/config/api"
import UserLayout from "../../utils/Layouts/UserLayout"
import { AuthContext } from "../../contexts/AuthContext"
import FeaturedLandmarks from "./containers/FeaturedLandmarks"
import GreetingCard from "./containers/GreetingCard"
import LandmarkOfTheDay from "./components/LandmarkOfTheDay"

export default function HomeScreen() {
  const [landmarks, setLandmarks] = useState([])

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

  return (
    <UserLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <GreetingCard />

        <LandmarkOfTheDay
          landmark={
            landmarks.length &&
            landmarks[Math.floor(Math.random() * (landmarks.length + 1))]
          }
        />
        <FeaturedLandmarks landmarks={landmarks} />
      </ScrollView>
    </UserLayout>
  )
}
