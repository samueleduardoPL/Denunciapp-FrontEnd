import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button({title, onPress}){
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {backgroundColor: "#007bff", padding: 15, borderRadius: 5, alignItems: "center"},
    text: {color: "white", fontWeight: "bold", fontSize: 16}
})