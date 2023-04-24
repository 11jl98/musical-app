import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Oauth() {
  const clientID: string = "f13a0f7e07fc4b098517db17127b1b15";
  const scope: Array<string> = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-follow-modify",
    "user-follow-read",
    "user-library-read"
  ];
  const redirectURi: string = "exp://10.0.0.101:19000";
  const discovery: object = {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
  };
  const navigation = useNavigation();

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: clientID,
      scopes: scope,
      usePKCE: false,
      redirectUri: redirectURi,
    },
    discovery
  );
  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      console.log(access_token);
      AsyncStorage.setItem("token", access_token);
      setTimeout(() => navigation.navigate("Home" as never), 500);
    }
  }, [response]);

  return { promptAsync };
}
