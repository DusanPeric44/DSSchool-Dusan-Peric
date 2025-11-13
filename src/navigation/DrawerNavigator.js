import { createDrawerNavigator } from "@react-navigation/drawer";
import { AboutStackNavigator } from "./StackNavigator";
import BottomTabNavigator from "./TabNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
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
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          title: "Home",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutStackNavigator}
        options={{
          title: "Home",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "information" : "information-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

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
