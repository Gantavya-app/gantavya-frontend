import React, { useContext, useEffect, useState } from "react"
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { axiosInstance } from "../../utils/config/api"
import UserLayout from "../../utils/Layouts/UserLayout"
import { AuthContext } from "../../contexts/AuthContext"
import colors from "../../utils/constants/colors"
import Chip from "../../components/common/Chip"

export default function HomeScreen() {
  const [greeting, setGreeting] = useState("")
  const [landmarks, setLandmarks] = useState([])
  const [time, setTime] = useState(
    new Date().toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    })
  )
  const { user, logOut } = useContext(AuthContext)

  useEffect(() => {
    axiosInstance
      .get("/landmark/", {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      })
      .then((response) => {
        setLandmarks(response.data)
      })
      .catch((error) => {
        console.log(error)
        if (error?.response?.status === 401) {
          console.log("Unauthorized")
          logOut()
        }

        console.error("Error fetching landmarks:", error)
      })
  }, [])

  useEffect(() => {
    const greetingInterval = setInterval(() => {
      const currentHour = new Date().getHours()
      if (currentHour < 12) {
        setGreeting("Good morning!")
      } else if (currentHour < 18) {
        setGreeting("Good afternoon!")
      } else {
        setGreeting("Good evening!")
      }
    }, 60000)

    const timeInterval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
        })
      )
    }, 1000)

    return () => {
      clearInterval(greetingInterval)
      clearInterval(timeInterval)
    }
  }, [])

  return (
    <UserLayout>
      <ScrollView>
        <View style={styles.greetingCard}>
          <Text style={styles.greeting}>{greeting}</Text>

          <Text style={styles.timeText}>{time}</Text>
          <Text style={styles.dateText}>
            {new Date().toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>
        </View>

        <View style={styles.landmarksContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <Text style={styles.landmarksTitle}>Featured Landmarks</Text>
            <Pressable>
              <Text style={{ color: colors.darkBlue }}>View All</Text>
            </Pressable>
          </View>

          <FlatList
            data={landmarks.slice(0, 5)}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.landmarkCard}>
                {console.log(item.photos[0])}

                <Image
                  source={{
                    uri: item?.photos?.length
                      ? item?.photos[0]
                      : "https://via.placeholder.com/150",
                  }}
                  style={{
                    width: "100%",
                    height: 150,
                    borderRadius: 5,
                    objectFit: "cover",
                    marginBottom: 8,
                  }}
                />
                <View>
                  <Text style={styles.landmarkName}>{item.name}</Text>
                  <Chip text={item?.type} />
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </UserLayout>
  )
}

const styles = StyleSheet.create({
  greetingCard: {
    backgroundColor: colors.lightGreen,
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  weatherText: {
    fontSize: 16,
    marginBottom: 8,
  },
  timeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.darkGrey,
  },

  dateText: {
    fontSize: 14,
    marginTop: 8,
    color: colors.darkGrey,
  },
  landmarksContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  landmarksTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  landmarkCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginRight: 24,
    width: 240,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOpacity: 0.25,
  },

  landmarkName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  landmarkDescription: {
    fontSize: 14,
  },
})
