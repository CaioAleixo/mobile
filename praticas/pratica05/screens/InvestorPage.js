import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View, Dimensions } from "react-native";
import { Appbar, Text, RadioButton } from "react-native-paper";
import { LineChart } from "react-native-chart-kit";

const InvestorPage = () => {
  const [checked, setChecked] = useState("1ano");
  const [chartData, setChartData] = useState({ labels: [], datasets: [{ data: [] }] });

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch("https://api.example.com/petr4"); // Substituir por uma API real
        const data = await response.json();
        const prices = data.map(item => item.price);
        const dates = data.map(item => item.date);
        setChartData({ labels: dates, datasets: [{ data: prices }] });
      } catch (error) {
        console.error("Erro ao buscar dados da ação PETR4", error);
      }
    };
    fetchStockData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Investidor10" />
      </Appbar.Header>

      <View style={styles.section}>
        <Text variant="headlineSmall">COTAÇÃO PETR4</Text>
        <RadioButton.Group onValueChange={setChecked} value={checked}>
          <View style={styles.radioContainer}>
            <RadioButton value="1ano" /><Text>1 Ano</Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.chartContainer}>
        <LineChart
          data={chartData}
          width={Dimensions.get("window").width - 32}
          height={220}
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#f7f7f7",
            backgroundGradientTo: "#e0e0e0",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          bezier
          style={{ marginVertical: 8, borderRadius: 8 }}
        />
      </View>

      <View style={styles.section}>
        <Text variant="bodyLarge">
          Se você tivesse investido R$ 1.000,00 há 1 ano, hoje você teria: R$ 1.211,81*
        </Text>
        <Text variant="bodySmall">*O valor considera o reinvestimento dos dividendos.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text variant="titleMedium" style={styles.buttonText}>
          COMPARAR COM OUTRAS EMPRESAS
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  section: {
    padding: 16,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  chartContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  buttonContainer: {
    backgroundColor: "#ddd",
    padding: 16,
    margin: 16,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#333",
  },
});

export default InvestorPage;