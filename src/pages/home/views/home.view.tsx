import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import Playlists from "../components/ListPlaylists";
import Track from "../../../components/Tracks";
import { getUserType } from "../../../@types/redirectContext";
import { ContextUser } from "../../../context/user";
import { useContext, useEffect } from "react";
import { ContextPlaylists } from "../../../context/palylists";
import { getPlaylistType } from "../../../@types/playlist";

export default function Home() {
  const { getUserProfile } = useContext<getUserType>(ContextUser);
  const { PlaylistsUser } = useContext<getPlaylistType>(ContextPlaylists);

  useEffect(() => {
    getUserProfile();
  }, []);

  useEffect(() => {
    PlaylistsUser();
  }, []);


  return (
    <View style={styles.container}>
      <Header />
      <Playlists />
      <Track />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
