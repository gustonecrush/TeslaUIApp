import React, { useState } from "react";
import { useFonts } from "expo-font";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const colors = [
  { id: 1, name: "Black", image: require("../../assets/images/black.png") },
  { id: 2, name: "Gray", image: require("../../assets/images/gray.png") },
  { id: 3, name: "Blue", image: require("../../assets/images/blue.png") },
  { id: 4, name: "White", image: require("../../assets/images/white.png") },
  { id: 5, name: "Red", image: require("../../assets/images/red.png") },
];

const Color = ({ navigation }) => {
  const [color, setColor] = useState("White");
 
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
        <Text style={[styles.textHeader, { marginLeft: 25 }]}>
          Select Color
        </Text>

        <View style={styles.car}>
          <Image
            source={require("../../assets/images/tesla-white.png")}
            style={styles.imgCar}
          />

          <View style={styles.infoWrapper}>
            <View>
              <Text style={[styles.textHeaderInfo, { color: "#000" }]}>
                Pearl White Multi-Coat
              </Text>
              <Text style={[styles.textSubTitleInfo, { color: "#D01000" }]}>
                $2,000
              </Text>
            </View>
          </View>

          <View style={styles.colorWrapper}>
            {colors.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setColor(item.name)}
                style={
                  color == item.name
                    ? styles.colorBorderActive(item.name)
                    : styles.colorBorderActive()
                }
              >
                <Image
                  source={item.image}
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                />
              </TouchableOpacity>
            ))}
          </View>

          <View style={{ marginTop: 30 }}>
            <Text style={styles.text}>20'' Performance Wheels</Text>
            <Text style={styles.text}>Carbon Fiber Spoiler</Text>
          </View>
        </View>

        <View style={styles.bottomInfo}>
          <View style={styles.nextInfoWrapper}>
            <Text style={styles.price}>$57,700</Text>
            <TouchableOpacity
              style={styles.nextTextWrapper}
              onPress={() => navigation.navigate("Interior")}
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
  container: {
    paddingVertical: 30,
  },
  textHeader: { fontFamily: "Gotham-Regular", fontSize: 18, color: "#A4B0BC" },
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
    marginTop: 20,
    paddingHorizontal: 25,
    paddingVertical: 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 40,
  },
  description: {
    fontFamily: "Gotham-Regular",
    fontSize: 14,
    color: "#979797",
    lineHeight: 20,
    marginVertical: 15,
    textAlign: "justify",
    marginHorizontal: 8,
  },
  speedInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
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
    justifyContent: "space-between",
    marginTop: 20,
    paddingBottom: 30,
    borderBottomColor: "#CFD3D9",
    borderBottomWidth: 1,
  },
  text: {
    fontFamily: "Gotham-Regular",
    color: "#000",
    marginBottom: 20,
  },
  colorBorderActive: (color) => ({
    borderWidth: color ? 3 : 0,
    borderColor: color ? "#D01000" : "",
    borderRadius: "50%",
  }),
});

export default Color;
