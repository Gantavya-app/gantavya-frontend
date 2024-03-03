import React from "react"
import AuthProvider from "./AuthContext"
import LandmarkProvider from "./LandmarkContext"

export default function AppProvider({ children }) {
  return (
    <AuthProvider>
      <LandmarkProvider>{children}</LandmarkProvider>
    </AuthProvider>
  )
}
