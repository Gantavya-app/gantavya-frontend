import React, { createContext, useEffect, useState } from "react"
import Toast from "react-native-root-toast"
import AsyncStorage from "@react-native-async-storage/async-storage"

const initialUserState = {
  name: "",
  email: "",
  token: "",
  isAdmin: false,
  isLoggedIn: false,
}

export const AuthContext = createContext({
  user: initialUserState,
  setUser: () => {},
  logOut: () => {},
})

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(initialUserState)

  // when app isrefreshed, get user from async storage
  useEffect(() => {
    getUser()
  }, [])

  async function saveUser(user) {
    await AsyncStorage.setItem("user", JSON.stringify(user))
    setUser(user)
  }

  async function getUser() {
    const user = await AsyncStorage.getItem("user")
    if (user) {
      setUser(JSON.parse(user))
    }
  }

  async function logOut() {
    await AsyncStorage.removeItem("user")
    setUser(initialUserState)
    Toast.show("Logged out successfully")
  }

  const authCtxValue = {
    user,
    saveUser,
    getUser,
    logOut,
  }
  return (
    <AuthContext.Provider value={authCtxValue}>{children}</AuthContext.Provider>
  )
}
