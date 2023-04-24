import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { ContextUser } from "../../../../context/user";
import { useContext } from "react";
import { getUserType } from "../../../../@types/redirectContext";
import { ContextPlaylists } from "../../../../context/palylists";
import Animated, { Extrapolate, interpolate, interpolateColor, useAnimatedStyle } from "react-native-reanimated";
import { AntDesign } from '@expo/vector-icons';

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 8
  : 50;

export default function Hearder(): JSX.Element {
  const { user, scrollY } = useContext<getUserType>(ContextUser);
  const { playlists } = useContext<any>(ContextPlaylists);

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 90],
        [210, 130],
        Extrapolate.CLAMP
      ),
      backgroundColor: interpolateColor(
        scrollY.value,
        [0, 100],
        ['transparent', '#000'],
      )

    }
  })

  const avatarStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [60, 80],
        [1, 0],
        Extrapolate.CLAMP
      )
    }
  })

  const settingsStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [60, 80],
        [0, 1],
        Extrapolate.CLAMP
      )
    }
  })
  

  return (

    <Animated.View style={[styles.container, headerStyle]} >
      <View style={styles.content}>
        <Animated.Image source={{ uri: user?.images[0].url }} style={[styles.image, avatarStyle]} />
        <TouchableOpacity onPress={() => console.log(user?.id)}>
          <Animated.Text style={[styles.username, avatarStyle]}>
            {user?.display_name || "JOAO LUIZ"}
          </Animated.Text>
        </TouchableOpacity>

      </View>
      <View style={styles.containerMessage}>
        <Text style={styles.title} >{playlists.message}</Text>
        <Animated.View style={settingsStyles}>
          <AntDesign name="setting" size={24} color="#fff" />
        </Animated.View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight,
    flexDirection: "column",
    paddingBottom: 17,
    height: 210,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    zIndex: 99

  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginStart: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
    marginBottom: 15,
    marginStart: 5,
    width: 300
  },
  containerMessage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginStart: 10,
    marginEnd: 10
  }
});
