import React from "react"
import { Button, View } from "react-native"

const AccountScreen = () => {
  // "deleteuser"

  return (
    <View>
      <Text>Account Settings</Text>
      <Text>This page will display list of account settings.</Text>
      <Text>Change Password, Change Email, Change Phone Number, etc.</Text>
      <Button title="Change Password" />
    </View>
  )
}

export default AccountScreen
