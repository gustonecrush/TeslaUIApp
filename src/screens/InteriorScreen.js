import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Interior from "../components/Interior";

const InteriorScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header theme="light" screen="Color" />
      <Interior navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F5F8",
  },
});

export default InteriorScreen;
