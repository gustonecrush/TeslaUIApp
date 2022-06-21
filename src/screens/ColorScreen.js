import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Color from "../components/Color";
import Header from "../components/Header";

const ColorScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header theme="light" screen="Color" />
      <Color navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F5F8",
  },
});

export default ColorScreen;
