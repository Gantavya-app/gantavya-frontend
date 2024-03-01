import React, { useContext, useState } from "react"
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native"
import { AuthContext } from "../../../../contexts/AuthContext"
import { Ionicons } from "@expo/vector-icons"
import colors from "../../../../utils/constants/colors"
import { axiosInstance } from "../../../../utils/config/api"

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
    <ScrollView>
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  inputLabel: {
    color: colors.darkGrey,
    marginHorizontal: 10,
    fontSize: 12,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.darkGrey,
    paddingVertical: 6,
    paddingHorizontal: 10,
    margin: 10,
    marginBottom: 16,
    marginTop: 0,
  },
})

export default ProfileScreen
