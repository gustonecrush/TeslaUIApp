import React, { useRef } from "react";
import { useFonts } from "expo-font";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
} from "react-native";
import Header from "../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: 1,
    name: "Model Y",
    range: "300 mi",
    dualMotor: "AWD",
    image: require("../../assets/images/thumb.png"),
  },
];

const { width, height } = Dimensions.get("window");

const Item = ({ image, heading, index }) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const inputRange = [width * 0, width, width];

  const inputRangeOpacity = [
    (index - 0.3) * width,
    index * width,
    (index + 0.3) * width,
  ];

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });

  const translateXHeading = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.1, 0, -width * 0.1],
  });

  const translateXDescription = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.7, 0, -width * 0.7],
  });

  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });

  return (
    <View>
      <View style={styles.carNames}>
        <Text style={styles.subTitle}>Tesla</Text>
        <Text style={styles.title}>Model Y</Text>

        <Image
          source={image}
          // style={{ transform: [{ scale }] }}
        />
      </View>

      <View style={styles.bottomInfo}>
        <View style={styles.speedInfoWrapper}>
          <View
            style={{
              borderRightColor: "#CFD3D9",
              borderRightWidth: 1,
              paddingRight: 40,
              marginBottom: 20,
              marginRight: -65
            }}
          >
            <Text style={styles.textBigInfo}>300 mi</Text>
            <Text style={styles.textSmallInfo}>Range (EPA est.)</Text>
          </View>
          <View>
            <Text style={styles.textBigInfo}>AWD</Text>
            <Text style={styles.textSmallInfo}>Dual Motor</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 15,
            marginTop: 20,
          }}
        >
          <View>
            <Text style={[styles.textHeaderInfo, { color: "#5E5E5E" }]}>
              Acceleration{" "}
              <Text style={{ color: "#FFF" }}>0-60 mph in 3.5s</Text>
            </Text>
            <Text style={[styles.textSubTitleInfo, { color: "#5E5E5E" }]}>
              Top speed: <Text style={{ color: "#FFF" }}>up to 150 mph</Text>
            </Text>
          </View>
        </View>

        <View style={styles.nextInfoWrapper}>
          <TouchableOpacity
            style={styles.nextTextWrapper}
            onPress={() => navigation.navigate("Main")}
          >
            <Text style={styles.nextText}>ORDER NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const [loaded] = useFonts({
    "Gotham-Medium": require("../../assets/fonts/Gotham-Medium.ttf"),
    "Gotham-Regular": require("../../assets/fonts/Gotham-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header theme="dark" />
      <Animated.FlatList
        keyExtractor={(item) => item.key}
        data={data}
        horizontal
        renderItem={({ item, index }) => (
          <Item key={index} {...item} scrollX={scrollX} />
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  subTitle: {
    fontFamily: "Gotham-Regular",
    fontSize: 30,
    color: "#FFF",
  },
  title: {
    fontFamily: "Gotham-Medium",
    fontSize: 40,
    color: "#FFF",
    marginTop: 20,
  },
  carNames: {
    alignItems: "center",
    marginTop: 45,
  },

  bottomInfo: {
    backgroundColor: "#000",
    paddingHorizontal: 25,
    marginTop: -120,
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
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
  },
  nextText: {
    fontSize: 18,
    fontFamily: "Gotham-Medium",
    color: "#FFF",
    marginLeft: 10,
  },
  textHeaderInfo: {
    fontSize: 16,
    fontFamily: "Gotham-Regular",
    textAlign: "center",
  },
  textSubTitleInfo: {
    fontSize: 16,
    fontFamily: "Gotham-Regular",
    marginTop: 10,
    textAlign: "center",
  },

  speedInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  textBigInfo: {
    fontSize: 35,
    fontFamily: "Gotham-Medium",
    color: "#FFF",
  },
  textSmallInfo: {
    fontSize: 13,
    fontFamily: "Gotham-Regular",
    color: "#FFF",
    textAlign: "center",
    marginTop: 10,
  },
});

export default HomeScreen;
