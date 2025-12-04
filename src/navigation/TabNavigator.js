import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MainStackNavigator,
  AboutStackNavigator,
  IosStackNavigator,
  AndroidStackNavigator,
} from "./StackNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "lightgray",
        tabBarStyle: {
          backgroundColor: "#384053",
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutStackNavigator}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="video-stabilization"
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ios"
        component={IosStackNavigator}
        options={{
          tabBarLabel: "iOS",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="apple" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Android"
        component={AndroidStackNavigator}
        options={{
          tabBarLabel: "Android",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="android" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
