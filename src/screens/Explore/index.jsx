import React from "react"
import UserLayout from "../../utils/Layouts/UserLayout"
import GoogleMapExpo from "./components/GoogleMapExpo"

export default function ExploreScreen() {
  return (
    <UserLayout>
      <GoogleMapExpo />
    </UserLayout>
  )
}
