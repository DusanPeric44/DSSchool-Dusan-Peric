import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigation/TabNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;

// Easy:
// Add another screen, "Profile.js", and add it to the bottom tab navigation.
// Profile page should just have a simple Text component displaying "Profile Page".
// Ensure that you also have an icon associated with this new tab.

// Medium:
// Change the colour of the active tab to your favourite colour.

// Hard:
// Create a Bottom Tab Navigator with five screens: Home, About, Profile,
// Settings, and Contact.
// Each of these screens should be a separate component and should
// display a simple text indicating the name of the screen.
// Additionally, you need to implement the following features:

// Use different icons from the @expo/vector-icons library for each tab.

// Customize the Tab.Navigator and Tab.Screen options to change
// the appearance of the tab bar and individual tabs.

// Implement a badge count for the Settings tab. This badge count
// should increment every time the Settings tab is visited.
