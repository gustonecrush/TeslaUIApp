import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Car from "../components/Car";
import Header from "../components/Header";

const CarScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header theme="light" screen="Car" />
      <Car navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F5F8",
  },
});

export default CarScreen;
