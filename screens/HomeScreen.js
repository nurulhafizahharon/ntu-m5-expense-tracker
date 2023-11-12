import ExpensesScreen from "./ExpensesScreen";
import CategoryScreen from "./CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function HomeScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Expenses" component={ExpensesScreen} />
      <Drawer.Screen name="Categories" component={CategoryScreen} />
    </Drawer.Navigator>
  );
}
