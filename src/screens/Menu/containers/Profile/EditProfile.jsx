import React, { useContext, useState } from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { AuthContext } from "../../../../contexts/AuthContext"
import { axiosInstance } from "../../../../utils/config/api"
import colors from "../../../../utils/constants/colors"

const EditProfile = () => {
  const { user, fetchUser } = useContext(AuthContext)

  const [userEditing, setUserEditing] = useState({
    name: user?.name,
    email: user?.email,
  })
  const [editMode, setEditMode] = useState(false)

  function handleEditProfile() {
    axiosInstance
      .put("/users/profile/update/", userEditing, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        console.log(res.data)
        fetchUser()
      })
      .catch((error) => {
        console.log("edit profile error")
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
    <View>
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
              textContentType="name"
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
              textContentType="emailAddress"
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

export default EditProfile
