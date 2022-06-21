import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Autopilot from "../components/Autopilot";
import Header from "../components/Header";

const AutopilotScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header theme="light" screen="Color" />
      <Autopilot navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F5F8",
  },
});

export default AutopilotScreen;
