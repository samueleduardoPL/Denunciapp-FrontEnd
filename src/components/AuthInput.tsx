import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { colors } from "../../Color";

const AuthInput = ({
  label,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  errorMessage,
  onBlur,
  autoCapitalize,
  keyboardType,
  returnKeyType,
  onSubmitEditing,
  editable = true,
}: {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: string) => void;
  errorMessage?: string;
  onBlur?: () => void;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  returnKeyType?: "done" | "go" | "next" | "search";
  onSubmitEditing?: () => void;
  editable?: boolean;
}) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontSize: 16, marginBottom: 5 }}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        editable={editable}
        style={{
          width: "100%",
          paddingVertical: 15,
          paddingHorizontal: 10,
          borderRadius: 10,
          backgroundColor: "rgba(0, 0, 0, 0.05)",
        }}
      />
      {errorMessage && (
        <Text style={{ color: "red", marginTop: 5 }}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default AuthInput;

const styles = StyleSheet.create({});
