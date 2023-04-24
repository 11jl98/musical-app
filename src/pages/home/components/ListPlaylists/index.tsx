import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Image,
  RefreshControl
} from "react-native";
import Animated, { useAnimatedScrollHandler } from "react-native-reanimated";
import { ContextPlaylists } from "../../../../context/palylists";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getPlaylistType } from "../../../../@types/playlist";
import { getUserType } from "../../../../@types/redirectContext";
import { ContextUser } from "../../../../context/user";

export default function Playlists(): JSX.Element {
  const { playlists } = useContext<getPlaylistType>(ContextPlaylists);
  const { scrollY } = useContext<getUserType>(ContextUser);
  const [refreshing, setState] = useState(false)
  const navigation = useNavigation()

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
          contentContainerStyle={{ paddingTop: 200 }}
          data={playlists.playlists?.items}
          keyExtractor={(item: any) => String(item.id)}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          // refreshControl={
          //   <RefreshControl
          //     refreshing={refreshing}
          //     onRefresh={() => {
          //       setState(true);
          //       setTimeout(() => setState(false ), 1000);
          //     }}

          //     progressViewOffset={200}
          //   />
          // }
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("Playlist" as never, {
              idPlaylist: item.id
            } as never)} style={styles.data_playlists}>
              <FlatList
                data={item.images}
                keyExtractor={(item, index) => String(index)}
                horizontal={false}
                renderItem={({ item }) => (
                  <View>
                    <Image
                      source={{ uri: item.url }}
                      style={styles.images_album}
                    />
                  </View>
                )}
              />
              <View style={styles.container_description}>
                <Text style={styles.sub_title}>{item.name}</Text>
                <Text style={styles.desciption}>{item.description}</Text>
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
  image: {
    flex: 1,
    paddingBottom: 55,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
    marginBottom: 15,
    marginStart: 5,
  },
  sub_title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  },
  desciption: {
    fontSize: 12,
    color: "#dcdc",
    marginTop: 15,
    maxWidth: 230,
  },
  images_album: {
    width: 130,
    height: 130,
    margin: 5,
  },
  data_playlists: {
    flexDirection: "row",
  },
  container_description: {
    margin: 10,
  },
});
