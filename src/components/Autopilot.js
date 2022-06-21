import React from "react";
import { useFonts } from "expo-font";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const colors = [
  { id: 1, image: require("../../assets/images/gray.png") },
  { id: 2, image: require("../../assets/images/black.png") },
];

const Autopilot = () => {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    "Gotham-Medium": require("../../assets/fonts/Gotham-Medium.ttf"),
    "Gotham-Regular": require("../../assets/fonts/Gotham-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/images/map.png")}
          style={{ resizeMode: "cover", height: 550, width: "100%" }}
        />

        <View style={styles.bottomInfo}>
          <Text style={styles.textHeader}>Autopilot</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 15,
              marginTop: 20,
              marginHorizontal: 5,
            }}
          >
            <View>
              <Text style={[styles.textHeaderInfo, { color: "#000" }]}>
                Full Self-Driving
              </Text>
              <Text style={[styles.textSubTitleInfo, { color: "#D01000" }]}>
                $5,000
              </Text>
            </View>

            <View>
              <Text style={[styles.textHeaderInfo, { color: "#999999" }]}>
                Autopilot
              </Text>
              <Text style={[styles.textSubTitleInfo, { color: "#A4B0BC" }]}>
                $3,000
              </Text>
            </View>
          </View>

          <Text style={styles.description}>
            Atomatic driving from highway on-ramp to off-ramp including
            interchanges and overtaking slower cars.
          </Text>

          <View style={styles.nextInfoWrapper}>
            <Text style={styles.price}>$58,700</Text>
            <TouchableOpacity
              style={styles.nextTextWrapper}
              onPress={() => navigation.navigate("Summary")}
            >
              <Text style={styles.nextText}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textHeader: {
    fontFamily: "Gotham-Regular",
    fontSize: 18,
    color: "#A4B0BC",
    marginLeft: 5,
  },
  imgCar: {
    width: "100%",
    height: 230,
  },
  infoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textHeaderInfo: {
    fontSize: 24,
    fontFamily: "Gotham-Regular",
  },
  textSubTitleInfo: {
    fontSize: 18,
    fontFamily: "Gotham-Regular",
    marginTop: 10,
  },
  car: {
    marginTop: 15,
    marginHorizontal: 25,
  },
  bottomInfo: {
    backgroundColor: "#FFF",
    paddingHorizontal: 25,
    marginTop: -150,
    paddingVertical: 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 40,
  },
  textBigInfo: {
    fontSize: 25,
    fontFamily: "Gotham-Medium",
    color: "#000",
  },
  textSmallInfo: {
    fontSize: 11,
    fontFamily: "Gotham-Regular",
    color: "#000",
    textAlign: "center",
    marginTop: 10,
  },
  nextInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 20,
    fontFamily: "Gotham-Regular",
    color: "#000",
  },
  nextInfoWrapper: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  nextTextWrapper: {
    borderColor: "#D01000",
    borderRadius: 50,
    borderWidth: 1,
    paddingHorizontal: 45,
    paddingVertical: 15,
  },
  nextText: {
    fontSize: 14,
    fontFamily: "Gotham-Medium",
    color: "#000",
  },
  colorWrapper: {
    flexDirection: "row",
    marginTop: 5,
    paddingBottom: 5,
  },
  text: {
    fontFamily: "Gotham-Regular",
    color: "#000",
    marginBottom: 20,
  },
  description: {
    fontFamily: "Gotham-Regular",
    fontSize: 14,
    color: "#979797",
    lineHeight: 20,
    textAlign: "justify",
    marginHorizontal: 8,
  },
});

export default Autopilot;
