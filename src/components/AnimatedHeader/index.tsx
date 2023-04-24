import { useContext } from "react";
import { ImageBackground, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { getPlaylistsUserType } from "../../@types/redirectContext";
import { ContextPlaylists } from "../../context/palylists";
import { LinearGradient } from "expo-linear-gradient"
import Animated, { Extrapolate, interpolate, useAnimatedStyle, interpolateColor } from "react-native-reanimated";

const statusBarHeight = StatusBar.currentHeight
    ? StatusBar.currentHeight + 8
    : 50;

export default function AnimatedHeader() {
    const { playlistId, scrollY } = useContext<getPlaylistsUserType>(ContextPlaylists);

    const headerStyle = useAnimatedStyle(() => {
        return {
            height: interpolate(
                scrollY.value,
                [0, 190],
                [300, 110],
                Extrapolate.CLAMP
            ),
            backgroundColor: interpolateColor(
                scrollY.value,
                [0, 90],
                ['transparent', '#000'],
            )
        }
    })

const textStyle = useAnimatedStyle(() => {
    return {
        opacity: interpolate(
            scrollY.value,
            [60, 80],
            [1, 0],
            Extrapolate.CLAMP
        )
    }
})

return (
    <Animated.View style={[styles.container, headerStyle]}>
        <Animated.Image
            source={{ uri: playlistId?.images[0].url }}
            resizeMode="cover"
            style={styles.imageBackground}
            blurRadius={0}
        />
        <LinearGradient
            colors={['#00000000', '#000000']}
            style={styles.content}>
            <TouchableOpacity style={styles.return_button}>
                <Entypo
                    name="chevron-small-left"
                    size={24}
                    color="#fff"
                    style={styles.icon_return}
                />
            </TouchableOpacity>
            <Animated.Text style={[styles.title, textStyle]}>{playlistId?.name}</Animated.Text>
        </LinearGradient>

    </Animated.View>
)
}
const styles = StyleSheet.create({
    container: {
        paddingTop: statusBarHeight,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        overflow: "hidden",
        zIndex: 99,
    },

    imageBackground: {
        width: "100%",
        height: 300,


    },
    return_button: {
        width: 25,
        height: 25,
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 25 / 2,
        position: 'absolute'
    },
    icon_return: {
        padding: 0,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 15,
        marginBottom: 15,
        alignSelf: "flex-end",
    },
    content: {
        width: '100%',
        height: 300,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        position: 'absolute',

    }
})