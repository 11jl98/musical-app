import { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { ContextOauth } from "../../../../context/redirect";

export default function SingIn(): JSX.Element {
  const { promptAsync } = useContext(ContextOauth);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../../assets/background.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <FontAwesome5 style={styles.spottify_icon} name="music" size={60} />
        <Text style={styles.title_welcome}>Bem vindo ao app-music </Text>
        <Text style={styles.description}>Milhões de musicas à sua escolha</Text>
        <TouchableOpacity style={styles.button} onPress={() => promptAsync()}>
          <Text style={styles.title_button}>Acessar com o Spotify</Text>
        </TouchableOpacity>
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
    justifyContent: "center",
  },
  spottify_icon: {
    alignSelf: "center",
    color: "#474748",
    backgroundColor:"#1ed760",
    padding: 20,
    paddingRight: 24,
    borderRadius: 50/2
  },
  title_welcome: {
    color: "#fff",
    fontSize: 30,
    alignSelf: "center",
    paddingTop: 20,
    paddingStart: 15,
    fontWeight: "bold",
  },
  description: {
    color: "#fff",
    fontSize: 22,
    alignSelf: "center",
    paddingTop: 20,
    paddingStart: 15,
    fontWeight: "bold",
  },
  button: {
    position: "absolute",
    backgroundColor: "#1ed760",
    borderRadius: 50,
    paddingVertical: 8,
    width: "80%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title_button: {
    color: "#121212",
    fontWeight: "bold",
    padding: 10,
  },
});
