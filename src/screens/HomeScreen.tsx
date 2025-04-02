import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import useAuthStore from "../stores/AuthStore";
import Button from "../components/Button";
import { colors } from "../../Color";
import MapView from "react-native-maps";

// const ProfileDropDown = () => {
//   const [dropdownVisible, setDropdownVisible] =  useState(false);

//   return (
//     {dropdownVisible && (
//       <View style={styles.dropdown}>
//         <TouchableOpacity
//       </View>
//     )}
//   )
// }

const HomeScreen = () => {
  const { user } = useAuthStore();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Feather name="menu" size={34} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="user" size={34} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>¡Denuncia Ya con Hector!</Text>
        <Text style={styles.subtitle}>
          Haz una denuncia rápida usando nuestro agente de inteligencia
          artificial Hector
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Button
            title="Aprende sobre Hector"
            onPress={() => {}}
            backgroundColor={colors.secondary}
            textColor={colors.primary}
            style={{
              // shadow
              shadowColor: colors.primary,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.18,
              shadowRadius: 1.0,
              elevation: 1,
            }}
          />
          <Button
            title="Hacer denuncia"
            onPress={() => {}}
            backgroundColor={colors.primary}
            textColor={colors.secondary}
          />
        </View>
        <Text style={styles.mapTitle}>Mapa de denuncias </Text>
        <View style={styles.mapContainer}>
          <MapView
            style={{ width: "100%", height: 400 }}
            initialRegion={{
              latitude: 18.4861,
              longitude: -69.9312,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
        <View
          style={{ alignItems: "flex-end", marginTop: 20, paddingBottom: 60 }}
        >
          <Button
            title="Ver mapa completo"
            onPress={() => {}}
            backgroundColor={colors.primary}
            textColor={colors.secondary}
            style={{
              width: " 60%",
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    width: "65%",
    fontSize: 35,
    fontWeight: "400",
    marginBottom: 10,
    color: colors.primary,
  },
  subtitle: {
    width: "85%",
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 20,
    color: colors.primary,
  },
  mapTitle: {
    fontSize: 20,
    fontWeight: "400",
    marginTop: 20,
    color: colors.primary,
  },
  mapContainer: {
    width: "100%",
    padding: 10,
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  // dropdown: {
  //   position: "absolute",
  //   top: 40, 
  //   left: 0,
  //   backgroundColor: "white",
  //   padding: 10,
  //   borderRadius: 5,
  //   shadowColor: "#000",
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 2,
  //   elevation: 5,
  // },
  // dropdownItem: {
  //   padding: 10,
  // },
});
