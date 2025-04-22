import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import Button from "../components/Button";
import { colors } from "../../Color";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/Types";
import UniversalMap from "../components/MapComponent";
import Header from "../components/Header";

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleDenunciaPress = () => {
    navigation.navigate("Chat");
  };
  
  const handleAdminPress = () => {
    navigation.navigate("AdminHome");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Header/>
        <Text style={styles.title}>¡Denuncia Ya con Hector!</Text>
        <Text style={styles.subtitle}>
          Haz una denuncia rápida usando nuestro agente de inteligencia
          artificial Hector
        </Text>

        <View style={styles.buttonRow}>
          <Button
            title="Aprende sobre Hector"
            onPress={() => {}}
            backgroundColor={colors.secondary}
            textColor={colors.primary}
            style={{
              shadowColor: colors.primary,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.18,
              shadowRadius: 1.0,
              elevation: 1,
            }}
          />
          <Button
            title="Hacer denuncia"
            onPress={handleDenunciaPress}
            backgroundColor={colors.primary}
            textColor={colors.secondary}
          />
        </View>

        <Text style={styles.mapTitle}>Mapa de denuncias </Text>
        <View style={styles.mapContainer}>
          <UniversalMap />
        </View>        
        <View style={styles.verMapaBtn}>
          <Button
            title="Ver mapa completo"
            onPress={() => {}}
            backgroundColor={colors.primary}
            textColor={colors.secondary}
            style={{ width: "60%" }}
          />
        </View>

        <View style={styles.adminBtnContainer}>
          <Button
            title="Acceder a Panel Admin"
            onPress={handleAdminPress}
            backgroundColor={colors.primary}
            textColor={colors.secondary}
            style={{ width: "100%" }}
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
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },  verMapaBtn: {
    alignItems: "flex-end",
    marginTop: 20,
    paddingBottom: 20,
  },
  adminBtnContainer: {
    marginTop: 10,
    marginBottom: 60,
    alignItems: "center",
  },
});
