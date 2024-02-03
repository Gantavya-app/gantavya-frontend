import React, { createContext, useState } from "react"

const initialUserState = {
  isLoggedIn: false,
  email: "",
}

export const AuthContext = createContext({
  user: initialUserState,
  setUser: () => {},
})

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(initialUserState)

  const authCtxValue = {
    user,
    setUser,
  }
  return (
    <AuthContext.Provider value={authCtxValue}>{children}</AuthContext.Provider>
  )
}
