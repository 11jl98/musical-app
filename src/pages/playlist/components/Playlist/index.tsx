import { useContext, useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ContextPlaylists } from "../../../../context/palylists";
import { getPlaylistsUserType, getUserType } from "../../../../@types/redirectContext";
import Animated, { useAnimatedScrollHandler } from "react-native-reanimated";

export default function playlist({ route }: any): JSX.Element {
  const { getPlaylistById, playlistId, scrollY } = useContext<getPlaylistsUserType>(ContextPlaylists);
  const { idPlaylist } = route.params;

  useEffect(() => {
    getPlaylistById(idPlaylist);
  }, []);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y
  })

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../../assets/playlistsBackground.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Animated.FlatList
          contentContainerStyle={{ paddingTop: 305 }}
          data={playlistId?.tracks.items}
          keyExtractor={(item: any, index) => String(index)}
          horizontal={false}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => console.log(JSON.stringify(item))}>
              <View style={styles.container_track}>
                <View>
                  <Image
                    source={{ uri: item?.track?.album?.images[0].url }}
                    style={styles.images_tracks}
                  />
                </View>
                <View style={styles.container_info_track}>
                  <Text style={styles.name_music}>{item?.track?.name}</Text>
                  <View style={styles.container_artists}>
                    <FlatList
                      data={item?.track?.artists}
                      keyExtractor={(item, index) => String(index)}
                      horizontal={true}
                      renderItem={({ item }) => (
                        <Text

                          key={item.id}
                          style={styles.name_artist}
                        >
                          {item.name}{" "}
                        </Text>
                      )}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
    marginBottom: 15,
    marginStart: 10,
    alignSelf: "flex-end",
  },
  sub_title: {
    fontSize: 14,
    color: "#dcdc",
    marginTop: 15,
    marginStart: 5,
  },
  desciption: {
    fontSize: 12,
    color: "#dcdc",
    marginTop: 15,
    maxWidth: 230,
  },
  spottify_icon: {
    marginTop: 5,
    color: "#dcdc",
  },
  heart_icon: {
    marginTop: 18,
    marginStart: 10,
  },
  images_tracks: {
    width: 60,
    height: 60,
    marginEnd: 10,
  },
  container_track: {
    flexDirection: "row",
    margin: 5,
    marginTop: 15,
  },
  name_music: {
    color: "#fff",
    maxWidth: 325,
  },
  name_artist: {
    color: "#dcdc",
    marginEnd: 2,
  },

  container_info_track: {
    flexDirection: "column",
  },
  container_artists: {
    flexDirection: "row",
    flex: 1,
  },
  image: {
    flex: 1,
    paddingBottom: 55,
  },
});
