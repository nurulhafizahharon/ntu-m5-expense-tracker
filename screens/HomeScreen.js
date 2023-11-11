import FoodScreen from "./FoodScreen";
import TransportScreen from "./TransportScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function HomeScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Food" component={FoodScreen} />
      <Drawer.Screen name="Transport" component={TransportScreen} />
    </Drawer.Navigator>
  );
}
