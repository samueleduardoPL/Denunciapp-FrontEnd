import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../Color";

type DropdownMenuScreenProps = {
  visible: boolean;
  onLogout: () => void;
  onProfile: () => void;
  onClose: () => void; 
  position?: {
    onRight?: number;
    onTop?: number;
  };
};

const DropdownMenuScreen: React.FC<DropdownMenuScreenProps> = ({ visible, onLogout, onProfile, onClose, position }) => {
  if (!visible) return null;

  const dropdownStyle = {
    ...styles.dropdown,
    top: position?.onTop !== undefined ? position.onTop : 60,
    right: position?.onRight !== undefined ? position.onRight : 10,
    left: undefined, 
  };

  return (
    <TouchableOpacity 
      style={styles.container}
      activeOpacity={1}
      onPress={onClose}
    >
      <View style={dropdownStyle}>
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
  },
  dropdown: {
    position: "absolute",
    backgroundColor: "white",
    minWidth: 150,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eee",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 101,
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