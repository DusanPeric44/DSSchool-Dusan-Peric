import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";
import Ios from "../screens/Ios";
import Android from "../screens/Android";
import Single from "../screens/Single";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#384053",
  },
  headerTintColor: "white",
};

const MainStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Ios" component={Ios} />
      <Stack.Screen name="Android" component={Android} />
      <Stack.Screen name="Single" component={Single} />
    </Stack.Navigator>
  );
};

const AboutStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};
export { MainStackNavigator, AboutStackNavigator };

// Easy:

// Create a new screen called "Contact.js" in the screens folder.
// This screen should contain a single Text element with the words "Contact Page".
// Add this screen to your MainStackNavigator and test that you can navigate to
// it from the Home screen.
