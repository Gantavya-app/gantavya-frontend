import React from "react"
import { ScrollView } from "react-native"
import UserLayout from "../../utils/Layouts/UserLayout"
import FeaturedLandmarks from "./containers/FeaturedLandmarks"
import GreetingCard from "./containers/GreetingCard"
import LandmarkOfTheDay from "./components/LandmarkOfTheDay"

export default function HomeScreen() {
  return (
    <UserLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <GreetingCard />

        <LandmarkOfTheDay />
        <FeaturedLandmarks />
      </ScrollView>
    </UserLayout>
  )
}
