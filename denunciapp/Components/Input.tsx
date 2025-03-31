import React from "react";
import {TextInput, View, Text, StyleSheet, KeyboardTypeOptions} from "react-native";

export default function input({Label, Value, onChangeText, SecureTextEntry, KeyboardType ='default' as KeyboardTypeOptions}){
    return (
<view style={styles.container}>
<Text style={styles.label}>{Label}</Text>
<TextInput
value={Value}
onChangeText={onChangeText}
secureTextEntry={SecureTextEntry}
keyboardType={KeyboardType}
style={styles.input}
/>
</view>

    );
}

const styles = StyleSheet.create({
    container: {marginBottom: 15},
    label: {fontSize: 16, fontWeight: "bold", marginBottom: 5},
    input: {borderBottomWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 5}
});