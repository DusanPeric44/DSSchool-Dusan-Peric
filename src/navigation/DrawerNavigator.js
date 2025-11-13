import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AboutStackNavigator } from "./StackNavigator";
import BottomTabNavigator from "./TabNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import screensConfig from "../data/screens.json";

const Drawer = createDrawerNavigator();
const componentMap = { BottomTabNavigator, AboutStackNavigator };

class DrawerNavigator extends Component {
  render() {
    return (
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: "white",
          drawerActiveBackgroundColor: "#FF6347",
          drawerStyle: {
            width: 250,
          },
        }}
      >
        {screensConfig.map((screen) => (
          <Drawer.Screen
            key={screen.name}
            name={screen.name}
            component={componentMap[screen.componentKey]}
            options={{
              title: screen.title,
              drawerIcon: ({ focused, color, size }) => (
                <MaterialCommunityIcons
                  name={focused ? screen.iconActive : screen.iconInactive}
                  size={22}
                  color={color}
                />
              ),
            }}
          />
        ))}
      </Drawer.Navigator>
    );
  }
}

export default DrawerNavigator;

// Easy:

// Create a Drawer Navigator with three screens: Home, About, and Contact.
// Each of these screens should be a separate component and should
// display a simple text indicating the name of the screen.

// Medium:

// Implement a custom drawer content component.
// This component should display a list of the screens (Home, About, Profile, etc.)
//  and when you click on a screen name, it should navigate to that screen.

// Hard:

// Implement a dynamic drawer content component. This component should fetch
// a list of screen names from a remote API (you can use a mock API for this)
// and display them in the drawer. When you click on a screen name,
// it should navigate to that screen.
