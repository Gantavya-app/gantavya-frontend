import { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "./AuthContext"
import { axiosInstance } from "../utils/config/api"

export const LandmarkContext = createContext({
  loading: true,
  error: false,
  message: "",
  landmark: {
    id: "",
    name: "",
    description: "",
    facts: "",
    address: "",
    latitude: "",
    longitude: "",
    photos: [],
    isSaved: false,
  },
  landmarks: [],
  savedLandmarks: [],
  featuredLandmarks: [],
  landmarkOfTheDay: {
    id: "",
    name: "",
    description: "",
    facts: "",
    address: "",
    latitude: "",
    longitude: "",
    photos: [],
    isSaved: false,
  },
  saveLandmark: () => {},
  unsaveLandmark: () => {},
  fetchLandmarks: () => {},
  fetchSavedLandmarks: () => {},
  fetchFeaturedLandmarks: () => {},
  onRefresh: () => {},
})

const LandmarkProvider = ({ children }) => {
  const { user } = useAuth()

  const [landmark, setLandmark] = useState({})
  const [landmarks, setLandmarks] = useState([])
  const [savedLandmarks, setSavedLandmarks] = useState([])
  const [featuredLandmarks, setFeaturedLandmarks] = useState([])
  const [landmarkOfTheDay, setLandmarkOfTheDay] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState("")

  async function fetchLandmarks() {
    setLoading(true)
    try {
      const response = await axiosInstance.get("/landmark/", {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      })
      setLandmarks(response.data)
    } catch (error) {
      console.log("fetch landmarks error", error?.response?.data?.detail)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  async function fetchSavedLandmarks() {
    setLoading(true)

    try {
      const response = await axiosInstance.get("/landmark/saved/", {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      })
      setSavedLandmarks(response.data)
    } catch (error) {
      console.log("fetch saved landmarks error", error.response.data.detail)
      setError(true)
      setMessage(error?.response?.data?.detail)
    } finally {
      setLoading(false)
    }
  }

  async function fetchFeaturedLandmarks() {
    setLoading(true)

    try {
      //for now, all landmarks are featured landmarks
      const response = await axiosInstance.get("/landmark/", {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      })
      //   console.log("featured", response.data)
      setFeaturedLandmarks(response.data)
    } catch (error) {
      console.log(
        "fetch featured landmarks error",
        error?.response?.data?.detail || error
      )
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  async function saveLandmark({ id }) {
    setLoading(true)
    axiosInstance
      .post(
        `/landmark/saved_by/${id}/`,
        {
          is_saved: true,
        },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      )
      .then((response) => {
        setLandmark((prev) => ({ ...prev, isSaved: true }))
        setSavedLandmarks((prev) => [...prev, landmark])
      })
      .catch((err) => {
        console.log("unsave error", err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  async function unsaveLandmark({ id }) {
    setLoading(true)
    axiosInstance
      .post(
        `/landmark/saved_by/${id}/`,
        {
          is_saved: "false",
        },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      )
      .then((response) => {
        setLandmark((prev) => ({ ...prev, isSaved: false }))
        setSavedLandmarks((prev) =>
          prev.filter((landmark) => landmark.id !== id)
        )
      })
      .catch((err) => {
        console.log("save error", err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  async function getLandmarkById({ id }) {
    setLoading(true)
    try {
      const response = await axiosInstance.get(`/landmark/${id}/`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      })
      console.log("landmark by id", response.data)

      setLandmark({
        isSaved: response.data.is_saved,
        ...response.data.landmark,
      })
    } catch (error) {
      console.log("fetch landmark by id error", error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  async function fetchLandmarkOfTheDay() {
    setLoading(true)

    try {
      const response = await axiosInstance.get("/landmark/", {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      })

      setLandmarkOfTheDay(
        response.data[Math.ceil(Math.random() * response.data.length)]
      )
    } catch (error) {
      console.log(
        "fetch landmark of the day error",
        error?.response?.data?.detail || error
      )
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  function onRefresh() {
    setLoading(true)
    fetchLandmarks()
    fetchSavedLandmarks()
    fetchFeaturedLandmarks()
    fetchLandmarkOfTheDay()
  }

  useEffect(() => {
    onRefresh()
  }, [user])

  return (
    <LandmarkContext.Provider
      value={{
        loading,
        error,
        message,
        landmark,
        landmarks,
        savedLandmarks,
        featuredLandmarks,
        landmarkOfTheDay,
        fetchLandmarks,
        fetchSavedLandmarks,
        fetchFeaturedLandmarks,
        getLandmarkById,
        saveLandmark,
        unsaveLandmark,
        onRefresh,
      }}
    >
      {children}
    </LandmarkContext.Provider>
  )
}

export const useLandmark = () => useContext(LandmarkContext)

export default LandmarkProvider
