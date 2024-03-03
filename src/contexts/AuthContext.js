import React, { createContext, useContext, useEffect, useState } from "react"
import Toast from "react-native-root-toast"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { axiosInstance } from "../utils/config/api"

const initialUserState = {
  id: 0,
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

  async function fetchUser() {
    try {
      const response = await axiosInstance.get("/users/profile/", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })

      saveUser({
        name: response.data.name,
        email: response.data.email,
        token: user.token,
        isAdmin: response.data.isAdmin,
        isLoggedIn: true,
      })
    } catch (error) {
      console.log("fetch user error", error)
    }
  }

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
    fetchUser,
    logOut,
  }
  return (
    <AuthContext.Provider value={authCtxValue}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
