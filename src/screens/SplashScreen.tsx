import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useAuthStore from "../stores/AuthStore";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const { isLoggedIn } = useAuthStore();
  const navigation = useNavigation();

  React.useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate("MainNavigator");
    } else {
      navigation.navigate("AuthNavigator");
    }
  }, [isLoggedIn, navigation]);

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
