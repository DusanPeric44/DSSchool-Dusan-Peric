import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#FF6347",
  },
  headerTintColor: "white",
};

const MainStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
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
