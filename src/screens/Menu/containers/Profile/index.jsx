import React, { useContext, useState } from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { AuthContext } from "../../../../contexts/AuthContext"
import { Ionicons } from "@expo/vector-icons"
import colors from "../../../../utils/constants/colors"
import { axiosInstance } from "../../../../utils/config/api"
import UserLayout from "../../../../utils/Layouts/UserLayout"
import PredictionHistory from "./PredictionHistory"

const ProfileScreen = ({ navigation }) => {
  const { user } = useContext(AuthContext)

  const [userEditing, setUserEditing] = useState(user)
  const [editMode, setEditMode] = useState(false)

  function handleEditProfile() {
    axiosInstance
      .post("/user/edit", userEditing)
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error.response.data || "some error occurred")
      })
      .finally(() => {
        setEditMode(false)
      })
  }

  function handleCancelEditing() {
    setUserEditing(user)
    setEditMode(false)
  }

  return (
    <UserLayout>
      <View>
        <View style={{ alignItems: "center" }}>
          <Ionicons
            name="person-circle-outline"
            size={96}
            color={colors.darkBlue}
          />
          <Text style={{ fontSize: 16, fontWeight: 600 }}>{user?.name}</Text>
          <Text style={{ color: colors.darkGrey }}>{user?.email}</Text>
        </View>
        {!editMode ? (
          <Pressable
            onPress={() => setEditMode(true)}
            style={{
              alignSelf: "center",
              paddingVertical: 4,
              paddingHorizontal: 12,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: colors.darkBlue,
              marginVertical: 10,
            }}
          >
            <Text style={{ color: colors.darkBlue }}>Edit Profile</Text>
          </Pressable>
        ) : (
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 10,
            }}
          >
            <Pressable
              onPress={handleEditProfile}
              style={{
                borderColor: colors.success,
                borderWidth: 1,
                paddingVertical: 4,
                paddingHorizontal: 12,
                borderRadius: 4,
                backgroundColor: colors.success,
              }}
            >
              <Text style={{ color: colors.white }}>Save</Text>
            </Pressable>
            <Pressable
              onPress={handleCancelEditing}
              style={{
                borderColor: colors.error,
                borderWidth: 1,
                paddingVertical: 4,
                paddingHorizontal: 12,
                borderRadius: 4,
                color: colors.error,
              }}
            >
              <Text style={{ color: colors.error }}>Cancel</Text>
            </Pressable>
          </View>
        )}
        {editMode && (
          <>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 8,
                marginTop: 16,
              }}
            >
              Edit Profile
            </Text>
            <View>
              <Text style={styles.inputLabel}>Full name</Text>
              <TextInput
                placeholder="Full name"
                value={userEditing?.name}
                onChangeText={(text) =>
                  setUserEditing({
                    ...userEditing,
                    name: text,
                  })
                }
                style={styles.textInput}
              />
            </View>
            <View>
              <Text style={styles.inputLabel}>Email address</Text>
              <TextInput
                placeholder="Email address"
                value={userEditing?.email}
                onChangeText={(text) =>
                  setUserEditing({
                    ...userEditing,
                    email: text,
                  })
                }
                style={styles.textInput}
              />
            </View>
          </>
        )}
      </View>

      <View>
        <Text style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>
          Prediction History
        </Text>
        <PredictionHistory />
      </View>
    </UserLayout>
  )
}

const styles = StyleSheet.create({
  inputLabel: {
    color: colors.darkGrey,
    fontSize: 12,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.darkGrey,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 0,
  },
})

export default ProfileScreen
