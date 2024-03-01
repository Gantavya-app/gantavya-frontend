import axios from "axios"
import env from "../../../env"

export const axiosInstance = axios.create({
  baseURL: env.API_URL + "/api",
})
