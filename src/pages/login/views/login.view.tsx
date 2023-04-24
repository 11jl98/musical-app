import { StyleSheet, View } from "react-native";
import SingIn from "../components/SingIn";
import { OauthProvider } from "../../../context/redirect";

export default function Login() {
  return (
    <OauthProvider>
      <View style={styles.container}>
        <SingIn />
      </View>
    </OauthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
