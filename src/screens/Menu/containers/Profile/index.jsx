import React, { useContext, useState } from "react"
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { AuthContext } from "../../../../contexts/AuthContext"

const ProfileScreen = ({ navigation }) => {
  const { user } = useContext(AuthContext)

  const [userEditing, setUserEditing] = useState(user)
  const [editMode, setEditMode] = useState(false)

  console.warn(user)

  return (
    <ScrollView>
      <View>
        {!editMode ? (
          <View>
            <Text>{user?.name}</Text>
          </View>
        ) : (
          <View>
            <TextInput
              value={userEditing?.name}
              onChangeText={(text) =>
                setUserEditing({
                  ...userEditing,
                  name: text,
                })
              }
            />
          </View>
        )}
        {!editMode ? (
          <View>
            <Text>{user?.email}</Text>
          </View>
        ) : (
          <View>
            <TextInput
              value={userEditing?.email}
              onChangeText={(text) =>
                setUserEditing({
                  ...userEditing,
                  email: text,
                })
              }
            />
          </View>
        )}
        {!editMode ? (
          <TouchableOpacity onPress={() => setEditMode(true)}>
            <Text>Edit Profile</Text>
          </TouchableOpacity>
        ) : (
          <View>
            <TouchableOpacity onPress={() => setEditMode(false)}>
              <Text>Save Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setEditMode(false)}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  )
}

export default ProfileScreen
