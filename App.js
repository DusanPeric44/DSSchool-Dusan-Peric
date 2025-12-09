import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import { MainStackNavigator } from "./src/navigation/StackNavigator";
// import BottomTabNavigator from "./src/navigation/TabNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default App;
