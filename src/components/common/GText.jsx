import React from "react"
import { Text } from "react-native"

const GText = ({ children, style }) => {
  return <Text style={{ fontSize: 12, ...style }}>{children}</Text>
}

export default GText
