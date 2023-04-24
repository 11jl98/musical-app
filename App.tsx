import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { TrackProvider } from "./src/context/track";
import Routes from './src/router'

export default function App() {
  return (
    <NavigationContainer>
      <TrackProvider>
        <View style={styles.container}>
          <StatusBar backgroundColor="transparent" style="light" />
          <Routes />
        </View>
      </TrackProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
