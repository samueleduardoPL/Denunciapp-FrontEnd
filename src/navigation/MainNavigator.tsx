import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import AdminHomeScreen from "../screens/AdminHomeScreen";
import StatsScreen from "../screens/StatsScreen";

const MainNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Chat" component={ChatScreen}/>
      <Stack.Screen name="AdminHome" component={AdminHomeScreen}/>
      <Stack.Screen name="Stats" component={StatsScreen}/>
    </Stack.Navigator>
  );
};

export default MainNavigator;
// This code sets up a navigation container with a stack navigator for the main application screens.
