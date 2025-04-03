import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../Color";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/Types";

type DropdownMenuScreenProps = {
  visible: boolean;
  onLogout: () => void;
  onProfile: () => void;
};

const DropdownMenuScreen: React.FC<DropdownMenuScreenProps> = ({ visible, onLogout, onProfile, }) => {
  if (!visible) return null;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dropdown}>
        <TouchableOpacity style={styles.dropdownItem} onPress={onProfile}>
          <Text style={styles.dropdownText}>Mi Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dropdownItem} onPress={onLogout}>
          <Text style={styles.dropdownText}>Cerrar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dropdownItem} onPress={() => {}}>
          <Text style={styles.dropdownText}>Mis reportes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdown: {
    position: "absolute",
    top: -40,
    left: 250,
    right:10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  dropdownText: {
    fontSize: 16,
    color: colors.primary,
  },
});

export default DropdownMenuScreen;