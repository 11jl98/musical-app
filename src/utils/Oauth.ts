import axios, { AxiosInstance } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const http: AxiosInstance = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

http.interceptors.request.use(async function (config)  {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      };
    }
    return config;
  } catch (error) {
    console.log(error);
  }
});

export { http };
