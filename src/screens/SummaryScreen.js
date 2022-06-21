import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Summary from "../components/Summary";

const SummaryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Summary navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F5F8",
  },
});

export default SummaryScreen;
