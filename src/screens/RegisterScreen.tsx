import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Button from "../components/Button";
import useAuthStore from "../stores/AuthStore";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../Color";
import AuthInput from "../components/AuthInput";
import { KeyboardAvoidingView, Platform } from "react-native";

const RegisterScreen = () => {
  const [userForm, setUserForm] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { setUser, setIsLoggedIn } = useAuthStore();
  const navigation = useNavigation();
  const handleChange = (name: string, value: string) => {
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    setUser({
      id: Math.random().toString(),
      name: userForm.name,
      lastname: userForm.lastname,
      email: userForm.email,
      password: userForm.password,
    });
    setIsLoggedIn(true);
    navigation.navigate("MainNavigator");
  };

  const isBothPasswordsEqual = userForm.password === userForm.confirmPassword;
  const isFormValid =
    userForm.name &&
    userForm.lastname &&
    userForm.email &&
    userForm.password &&
    userForm.confirmPassword &&
    isBothPasswordsEqual;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.formContainer}>
          <AntDesign name="user" size={64} color={colors.primary} />
          <Text style={styles.title}>Registráte</Text>
          <View style={{ width: "100%" }}>
            <AuthInput
              label="Nombres"
              placeholder="Fulano"
              value={userForm.name}
              onChangeText={(text) => handleChange("name", text)}
            />
            <AuthInput
              label="Apellidos"
              placeholder="Perez Gonzalez"
              value={userForm.lastname}
              onChangeText={(text) => handleChange("lastname", text)}
            />
            <AuthInput
              label="Correo Electrónico"
              placeholder="fulano@google.com"
              value={userForm.email}
              onChangeText={(text) => handleChange("email", text)}
            />
            <AuthInput
              label="Contraseña"
              placeholder="Contraseña"
              value={userForm.password}
              onChangeText={(text) => handleChange("password", text)}
            />
            <AuthInput
              label="Confirmar Contraseña"
              placeholder="Confirmar Contraseña"
              secureTextEntry
              value={userForm.confirmPassword}
              onChangeText={(text) => handleChange("confirmPassword", text)}
            />

            <Button
              title="Registrarme"
              disabled={!isFormValid}
              onPress={handleSubmit}
              backgroundColor={colors.primary}
              textColor={colors.secondary}
              style={{ marginTop: 30 }}
            />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  formContainer: {
    width: "80%",
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: colors.primary,
    shadowOffset: {
      width: -5,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    marginTop: 10,
    marginBottom: 20,
  },
});

//RegisterScreen
