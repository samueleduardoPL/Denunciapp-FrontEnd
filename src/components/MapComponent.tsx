import React from "react";
import { Platform, View, Text, StyleSheet } from "react-native";

if (Platform.OS === "web") {
  require("leaflet/dist/leaflet.css");
}

const UniversalMap = () => {
  if (Platform.OS === "web") {
    const { MapContainer, TileLayer, Marker, Popup } = require("react-leaflet");
    const position: [number, number] = [18.4861, -69.9312];

    return (
      <div style={{ height: 400, width: "100%", zIndex: 1 }}>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Santo Domingo, RD <br /> ¡Aquí empieza todo!
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }

  // Placeholder para Android/iOS
  return (
    <View style={styles.placeholder}>
      <Text style={styles.text}>
        Mapa no disponible en esta plataforma aún.
      </Text>
    </View>
  );
};

export default UniversalMap;

const styles = StyleSheet.create({
  placeholder: {
    width: "100%",
    height: 400,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "#333",
    fontSize: 16,
  },
});
