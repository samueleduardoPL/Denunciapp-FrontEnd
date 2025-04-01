import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({
  title,
  onPress,
  disabled,
  loading,
  textColor,
  backgroundColor,
  style,
}: {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  textColor?: string;
  backgroundColor?: string;
  style?: object;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={{
        ...style,
        backgroundColor: backgroundColor || "#007BFF",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        opacity: disabled || loading ? 0.5 : 1,
      }}
    >
      {loading ? (
        <Text style={{ color: textColor || "#fff" }}>Loading...</Text>
      ) : (
        <Text style={{ color: textColor || "#fff" }}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
