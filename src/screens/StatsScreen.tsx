import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { colors } from '../../Color'
import {Feather} from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import {
    PieChart,
} from "react-native-chart-kit";
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/Types'

const StatsScreen = () => {

  const recentReports = [
    { id: 'RPT-001', status: 'Abierto' },
    { id: 'RPT-002', status: 'Pendiente' },
    { id: 'RPT-003', status: 'Concluido' },
    { id: 'RPT-004', status: 'Pendiente' },
    { id: 'RPT-005', status: 'Rechazado' },
  ];

    const reportTypes = [
        { name: "Asaltos", count: 12, color: `#98A4F9` },
        { name: "Bandalismo", count: 20, color: `#1C1C1C` },
        { name: "Asesinatos", count: 30, color: `#BBE2FC` },
        { name: "Otros", count: 40, color: `#2C3063` },
  ];

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
   <SafeAreaView style={{ flex: 1 }}>
    <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={27} color="black" />
    </TouchableOpacity>
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

      <View style={styles.recentReportsContainer}>
            <Text style={styles.subtitle}>
                Reportes recientes:
            </Text>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeaderText, {flex: 1}]}>ID</Text>
              <Text style={[styles.tableHeaderText, {flex: 1}]}>Estado</Text>
            </View>
            {recentReports.map((report, idx) => (
              <View key={report.id} style={[styles.tableRow, idx % 2 === 0 && {backgroundColor: colors.secondary}]}> 
                <Text style={[styles.tableCell, {flex: 1}]}>{report.id}</Text>
                <Text style={[styles.tableCell, {flex: 1}]}>{report.status}</Text>
              </View>
            ))}
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.subtitle}>Tipos de denuncias:</Text>
        <PieChart
            data={reportTypes.map((type) => ({
                name: type.name,
                count: type.count,
                color: type.color,
                legendFontColor: "#7F7F7F",
                legendFontSize: 15,
            }))}
            width={Dimensions.get("window").width - 60}
            height={220}
            chartConfig={{
                backgroundColor: colors.secondary,
                backgroundGradientFrom: colors.secondary,
                backgroundGradientTo: colors.secondary,
                decimalPlaces: 0, 
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                borderRadius: 16,
                },
            }}
            accessor="count"
            backgroundColor="transparent"
            paddingLeft="15"
            
        />
    </View>

      
    </ScrollView>
   </SafeAreaView>
    </View>
  )
}

export default StatsScreen

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

    viewStatsButton: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
    },
    recentReportsContainer: {
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
    tableHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        paddingBottom: 5,
        marginBottom: 5,
    },
    tableHeaderText: {
        fontWeight: 'bold',
        color: colors.primary,
        fontSize: 15,
        textAlign: 'left',
    },
    tableRow: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 0,
        alignItems: 'center',
    },
    tableCell: {
        fontSize: 14,
        color: colors.primary,
        textAlign: 'left',
    },
    goBackButton:{
        marginBottom: 20
    }
})