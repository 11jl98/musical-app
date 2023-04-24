import { StyleSheet, View } from "react-native";
import Playlists from "../components/Playlist";
import AnimatedHeader from "../../../components/AnimatedHeader";
import { ContextPlaylists, PlaylistsProvider } from "../../../context/palylists";
import { useContext, useEffect } from "react";
import { getPlaylistsUserType } from "../../../@types/redirectContext";

export default function Playlist({ route }: any) {

  return (
    <PlaylistsProvider>
      <View style={styles.container}>
        <AnimatedHeader />
        <Playlists route={route} />
      </View>
    </PlaylistsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
