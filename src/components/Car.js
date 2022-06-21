import React from "react";
import { useFonts } from "expo-font";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Car = ({ navigation, setComponent }) => {
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
        <View style={styles.car}>
          <Text style={styles.textHeader}>Select Your Car</Text>
          <Image
            source={require("../../assets/images/tesla-red.png")}
            style={styles.imgCar}
          />
          <View style={styles.infoWrapper}>
            <View>
              <Text style={[styles.textHeaderInfo, { color: "#000" }]}>
                Performance
              </Text>
              <Text style={[styles.textSubTitleInfo, { color: "#D01000" }]}>
                $57,700
              </Text>
            </View>
            <View>
              <Text style={[styles.textHeaderInfo, { color: "#919395" }]}>
                Long Range
              </Text>
              <Text style={[styles.textSubTitleInfo, { color: "#D3D9E0" }]}>
                $46,700
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomInfo}>
          <View style={styles.speedInfoWrapper}>
            <View
              style={{
                borderRightColor: "#CFD3D9",
                borderRightWidth: 1,
                paddingRight: 50,
                marginRight: -60,
              }}
            >
              <Text style={styles.textBigInfo}>3.5s</Text>
              <Text style={styles.textSmallInfo}>0-60 mph</Text>
            </View>
            <View>
              <Text style={styles.textBigInfo}>150mph</Text>
              <Text style={styles.textSmallInfo}>Top Speed</Text>
            </View>
          </View>
          <Text style={styles.description}>
            Tesla All-Wheel Drive has two independent motors. Unlike traditional
            all-wheel drive systems, these two motors digitally control torque
            to the front and rear wheels—for far better handling and traction
            control.
          </Text>

          <View style={styles.nextInfoWrapper}>
            <Text style={styles.price}>$55,700</Text>
            <TouchableOpacity
              style={styles.nextTextWrapper}
              onPress={() => setComponent(navigation)}
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
    marginTop: 30,
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
});

export default Car;
