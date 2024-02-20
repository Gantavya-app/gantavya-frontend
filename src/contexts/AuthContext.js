import React, { createContext, useState } from "react"
import Toast from "react-native-root-toast"

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

  function logOut() {
    setUser(initialUserState)
    Toast.show("Logged out successfully")
  }

  const authCtxValue = {
    user,
    setUser,
    logOut,
  }
  return (
    <AuthContext.Provider value={authCtxValue}>{children}</AuthContext.Provider>
  )
}
