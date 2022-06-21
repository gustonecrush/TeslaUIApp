import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Car from "./Car";
import Autopilot from "./Autopilot";
import Interior from "./Interior";
import Color from "./Color";

const Tab = createMaterialTopTabNavigator();

const menus = [
  { id: 1, name: "Car" },
  { id: 2, name: "Eksterior" },
  { id: 3, name: "Interior" },
  { id: 4, name: "Autopilot" },
];

const Logo = ({ theme, navigation }) => {
  if (theme === "dark")
    return (
      <Image
        source={require("../../assets/images/tesla-dark.png")}
        style={{ alignSelf: "center" }}
      />
    );
  if (theme === "light")
    return (
      <View style={styles.logoWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Feather name="arrow-left" size={25} color={"#999999"} />
        </TouchableOpacity>

        <Image
          source={require("../../assets/images/tesla-light.png")}
          style={{ marginLeft: -25 }}
        />
        <Image />
      </View>
    );
};

const Header = ({ theme, screen }) => {
  const navigation = useNavigation();
  const [activeMenu, setActiveMenu] = useState("Car");
  const [component, setComponent] = useState("Car");

  const Menu = ({ menu }) => (
    <View style={styles.menuWrapper}>
      <TouchableOpacity
        onPress={() => {
          setActiveMenu(menu.name);
          setComponent(menu.name);
        }}
        style={
          menu.name == activeMenu
            ? styles.menuActive(activeMenu)
            : styles.menuActive()
        }
      >
        <Text
          style={
            menu.name == activeMenu
              ? styles.menuText(activeMenu)
              : styles.menuText()
          }
        >
          {menu.id}. {menu.name}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const Component = ({ navigation, setComponent }) => {
    if (component === "Car") return <Car navigation={navigation} setComponent={setComponent} />;
    if (component === "Eksterior") return <Color navigation={navigation} setComponent={setComponent} />;
    if (component === "Interior") return <Interior navigation={navigation} setComponent={setComponent} />;
    if (component === "Autopilot") return <Autopilot navigation={navigation} setComponent={setComponent} />;
    return <Car />;
  };

  const [loaded] = useFonts({
    "Gotham-Medium": require("../../assets/fonts/Gotham-Medium.ttf"),
    "Gotham-Regular": require("../../assets/fonts/Gotham-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <View style={styles.container(theme)}>
        <Logo theme={theme} navigation={navigation} />

        <View style={styles.menuWrapperMain}>
          {theme === "light"
            ? menus.map((menu, index) => <Menu menu={menu} key={index} />)
            : null}
        </View>
      </View>

      {theme === "light" ? <Component navigation={component} setComponent={setComponent} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: (theme) => ({
    width: "100%",
    paddingHorizontal: 25,
    backgroundColor: theme === "dark" ? "#000" : "#FFF",
    paddingTop: theme === "light" ? 80 : 0,
    marginTop: theme === "light" ? -60 : 0,
  }),
  logoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuWrapperMain: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  menuText: (active) => ({
    fontFamily: active ? "Gotham-Medium" : "Gotham-Regular",
    color: active ? "#000" : "#CCCCCC",
    marginTop: active ? -3 : 0,
  }),
  menuActive: (active) => ({
    borderBottomColor: active ? "#D01000" : "",
    borderBottomWidth: active ? 3 : 0,
    paddingBottom: 20,
  }),
});

export default Header;
