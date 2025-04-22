import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { colors } from '../../Color'
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../navigation/Types'
import { ScrollView } from 'react-native-gesture-handler'
import MapView, {  Circle } from 'react-native-maps'
import {
  BarChart,
} from "react-native-chart-kit";

const AdminHomeScreen = () => {
  // Datos de ejemplo para el mapa de calor en Santo Domingo
  const heatmapPoints = [
  { latitude: 18.4861, longitude: -69.9312, intensity: 1 }, 
  { latitude: 18.4780, longitude: -69.9250, intensity: 0.8 },
  { latitude: 18.4700, longitude: -69.9300, intensity: 0.6 },
  { latitude: 18.4900, longitude: -69.9400, intensity: 0.4 },
  { latitude: 18.4950, longitude: -69.9200, intensity: 0.2 },
  ];

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const handleNavigateToStats = () => {
    navigation.navigate("Stats")
    }

  return (
    <View style={styles.container}>
   <SafeAreaView style={{ flex: 1 }}>
    <Header />
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>¡Bienvenido ADMIN!</Text>
      <View style={styles.pendingReportsContainer}>
          <Text style={styles.subtitle}>
              Reportes pendientes:
          </Text>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Text style={{fontSize: 25, color: colors.primary, fontWeight: "bold"}}>420</Text>
              <View style={{flexDirection: "row", alignItems: "center"}}>
              <Text style={{fontSize: 16, color: colors.primary, marginRight:10}}>-0.3%</Text>
              <Feather name="trending-down" size={16} color={colors.primary} style={{
                  transform: [{ rotate: '110deg' }]
              }} />
              </View>
          </View>
      </View>

      <View style={styles.chartContainer}>
         
        <BarChart
         yAxisLabel=''
         yAxisSuffix=''
          data={{
              labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
              datasets: [
                  {
                      data: [20, 45, 28, 80, 99, 43],
                  },
              ],
          }}
          width={Dimensions.get("window").width - 50} 
          height={220}
          chartConfig={{
            
              backgroundColor: colors.secondary,
              backgroundGradientFrom: colors.secondary,
              backgroundGradientTo: colors.secondary,
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              propsForLabels: {
                  fontSize: 12,
                  fontWeight: "bold",
                  color: colors.primary,
              },
              propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: colors.primary,
              },
              fillShadowGradient: colors.primary,
              fillShadowGradientFrom: colors.primary,
              fillShadowGradientFromOpacity: 1,
              fillShadowGradientTo: colors.primary,
              fillShadowGradientToOpacity: 1,
              fillShadowGradientOpacity: 1,
              barPercentage: 0.7,
          }}
         />
      </View>
      <Text style={[styles.subtitle, {marginTop: 20}]}>
          Zonas con más reportes
      </Text>
          
      {/* Mapa de calor simulado para Santo Domingo */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 18.4861,
            longitude: -69.9312,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          {heatmapPoints.map((point, index) => (
            <Circle
              key={index}
              center={{ latitude: point.latitude, longitude: point.longitude }}
              radius={300 + point.intensity * 200}
              strokeColor="transparent"
              fillColor={`rgba(255, 0, 0, ${point.intensity})`}
            />
          ))}
        </MapView>
      </View>
      <TouchableOpacity
      style={styles.viewStatsButton}
        onPress={handleNavigateToStats}
        >
            <Text style={styles.viewStatsButtonText}>Ver estadísticas</Text>
        </TouchableOpacity>
    </ScrollView>
   </SafeAreaView>
    </View>
  )
}

export default AdminHomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 33,
        fontWeight: "bold",
        color: colors.primary,
    },
    subtitle: {
        fontSize: 16,
        color: colors.primary,
        fontWeight: "bold",
        marginBottom: 20,
    },
    pendingReportsContainer: {
        backgroundColor: colors.secondary,
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
    },
    chartContainer: {
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
    },
    mapContainer: {
        backgroundColor: colors.secondary,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 20,
        overflow: 'hidden',
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
    },
    map: {
        width: Dimensions.get("window").width - 40,
        height: 250,
        alignSelf: 'center',
        borderRadius: 10,
    }
    ,
    viewStatsButton: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
    },
    viewStatsButtonText: {
        color: "#fff",
        fontSize: 16,
    },
})