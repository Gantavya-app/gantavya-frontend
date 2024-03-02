import React, { useState } from "react"
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { Feather } from "@expo/vector-icons"
import UserLayout from "../../../../utils/Layouts/UserLayout"
import { axiosInstance } from "../../../../utils/config/api"
import colors from "../../../../utils/constants/colors"
import Button from "../../../../components/common/Button"

const AccountScreen = () => {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)

  const handleOldPasswordVisibility = () => {
    setShowOldPassword(!showOldPassword)
  }

  const handleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword)
  }

  const handleChangePassword = () => {
    // Logic to change password
  }

  const handleDeleteAccount = () => {
    axiosInstance
      .delete("/users/me/")
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        console.log("Account deleted")
      })
  }

  return (
    <UserLayout>
      <View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 8,
            marginTop: 16,
          }}
        >
          Change Password
        </Text>
        <View>
          <Text style={styles.labelText}>Old Password</Text>
          <View style={{ position: "relative" }}>
            <TextInput
              onChangeText={setOldPassword}
              secureTextEntry={!showOldPassword}
              placeholder={"Old Password"}
              placeholderTextColor={"gray"}
              style={styles.passwordInputField}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.visibilityIcon}
              onPress={handleOldPasswordVisibility}
            >
              <Feather
                name={showOldPassword ? "eye-off" : "eye"}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.labelText}>New Password</Text>
          <View style={{ position: "relative", marginBottom: 12 }}>
            <TextInput
              onChangeText={setNewPassword}
              secureTextEntry={!showNewPassword}
              placeholder={"New Password"}
              placeholderTextColor={"gray"}
              style={styles.passwordInputField}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.visibilityIcon}
              onPress={handleNewPasswordVisibility}
            >
              <Feather
                name={showNewPassword ? "eye-off" : "eye"}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>
        <Button title={"Change Password"} onPress={handleChangePassword} />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 8,
            marginTop: 24,
          }}
        >
          Account Management
        </Text>
        <Button
          onPress={handleDeleteAccount}
          title={"Delete Account"}
          style={{ backgroundColor: colors.error }}
        />
        <Text
          style={{
            fontSize: 12,
            fontStyle: "italic",
            color: colors.warning,
            fontWeight: 600,
            marginBottom: 4,
          }}
        >
          Warning: The delete action is irreversible. Proceed with caution.
        </Text>
      </View>
    </UserLayout>
  )
}

const styles = {
  passwordInputField: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.darkGrey,
    paddingVertical: 6,
    paddingHorizontal: 10,
    paddingRight: 40,

    marginBottom: 16,
    marginTop: 0,
  },

  visibilityIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },

  labelText: {
    fontSize: 12,
    color: colors.darkGrey,
  },
}

export default AccountScreen
