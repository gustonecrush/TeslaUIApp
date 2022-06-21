import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  HomeScreen,
  DetailScreen,
  SummaryScreen,
  CarScreen,
  InteriorScreen,
} from "./src";
import AutopilotScreen from "./src/screens/AutopilotScreen";
import ColorScreen from "./src/screens/ColorScreen";
import { useFonts } from "expo-font";
import MainScreen from "./src/screens/MainScreen";
import Car from "./src/components/Car";
import Color from "./src/components/Color";
import Autopilot from "./src/components/Autopilot";
import Interior from "./src/components/Interior";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

// const TabNavigator = () => {
//   const [loaded] = useFonts({
//     "Gotham-Medium": require("./assets/fonts/Gotham-Medium.ttf"),
//     "Gotham-Regular": require("./assets/fonts/Gotham-Regular.ttf"),
//   });

//   if (!loaded) {
//     return null;
//   }
//   return (
//     <Tab.Navigator
//       style={{ paddingTop: 100 }}
//       screenOptions={{
//         tabBarIndicatorStyle: {
//           backgroundColor: "#D01000",
//           height: 3,
//         },
//         tabBarLabelStyle: { fontSize: 12, fontFamily: "Gotham-Regular" },
//         tabBarItemStyle: { width: 100, marginLeft: -5 },
//         // tabBarIndicatorContainerStyle: { marginLeft: -20 },
//       }}
//     >
//       <Tab.Screen name="Car" component={CarScreen} />
//       <Tab.Screen name="Color" component={ColorScreen} />
//       <Tab.Screen name="Interior" component={InteriorScreen} />
//       <Tab.Screen name="Autopilot" component={AutopilotScreen} />
//     </Tab.Navigator>
//   );
// };

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Car"
          component={Car}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Color"
          component={Color}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Autopilot"
          component={Autopilot}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Interior"
          component={Interior}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Summary"
          component={SummaryScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
