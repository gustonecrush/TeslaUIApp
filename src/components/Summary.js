import React from "react";
import { useFonts } from "expo-font";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const colors = [
  { id: 1, image: require("../../assets/images/gray.png") },
  { id: 2, image: require("../../assets/images/black.png") },
];

const Summary = ({ navigation }) => {
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
          source={require("../../assets/images/summary.png")}
          style={{ resizeMode: "cover" }}
        />

        <View style={styles.bottomInfo}>
          <Text style={styles.textHeader}>Summary</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 15,
              marginTop: 20,
            }}
          >
            <View>
              <Text style={[styles.textHeaderInfo, { color: "#FFF" }]}>
                Your Model Y
              </Text>
              <Text style={[styles.textSubTitleInfo, { color: "#FFF" }]}>
                $60,700
              </Text>
            </View>
          </View>

          <View style={styles.nextInfoWrapper}>
            <TouchableOpacity
              style={styles.nextTextWrapper}
              onPress={() => alert('💳 : Your Transaction will be processed!\n')}
            >
              <MaterialCommunityIcons name="apple" size={25} color="#FFF" />
              <Text style={styles.nextText}>PAY</Text>
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
    textAlign: "center",
    alignSelf: "center",
  },
  imgCar: {
    width: "100%",
    height: 230,
  },
  infoWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textHeaderInfo: {
    fontSize: 30,
    fontFamily: "Gotham-Medium",
    textAlign: "center",
  },
  textSubTitleInfo: {
    fontSize: 23,
    fontFamily: "Gotham-Regular",
    marginTop: 10,
    textAlign: "center",
  },
  car: {
    marginTop: 15,
    marginHorizontal: 25,
  },
  bottomInfo: {
    backgroundColor: "#000",
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
    paddingHorizontal: 85,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nextText: {
    fontSize: 18,
    fontFamily: "Gotham-Medium",
    color: "#FFF",
    marginLeft: 10,
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
});

export default Summary;
