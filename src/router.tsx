import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Login from "./pages/login/login.page";
import Home from "./pages/home/home.page";
import Playlist from "./pages/playlist/playlist.page";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function MyStack2() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Playlist"
        component={Playlist}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}



function MyTabs() {
  return (

    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#dcdc"
      barStyle={{
        backgroundColor: "#000000ba",
        position: "absolute",
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={MyStack2}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={!focused ? "home-outline" : "home"}
              size={24}
              color={"#000"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

