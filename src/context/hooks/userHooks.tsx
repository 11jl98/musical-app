import { useState, useEffect, useRef } from "react";
import { getUser } from "../../services/User";
import { userProfile } from "../../@types/user";
import { useSharedValue } from "react-native-reanimated";

export default function User() {
  const [user, setUser] = useState<userProfile | undefined>();
  const [idUser, setIdUser] = useState<string>("");
  const scrollY = useSharedValue(0);

  async function getUserProfile() {
    try {
      const result = await getUser();
      setUser(result);
      setIdUser(result.id)
    } catch (error) {
      console.log(error)
    }
  }


  return { user, idUser, getUserProfile, scrollY };
}
