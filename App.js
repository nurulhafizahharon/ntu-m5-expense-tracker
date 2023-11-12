import HomeScreen from "./screens/HomeScreen";
import ExpensesScreen from "./screens/ExpensesScreen";
import CategoryScreen from "./screens/CategoryScreen";
import AddExpenseScreen from "./screens/AddExpenseScreen";
import AddCategoryScreen from "./screens/AddCategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Expense Tracker" }}
        />
        <Stack.Screen
          name="Expenses"
          component={ExpensesScreen}
          options={{ title: "Expenses" }}
        />
        <Stack.Screen
          name="Categories"
          component={CategoryScreen}
          options={{ title: "Categories" }}
        />
        <Stack.Screen
          name="AddExpense"
          component={AddExpenseScreen}
          options={{ title: "Add Expense" }}
        />
        <Stack.Screen
          name="AddCategory"
          component={AddCategoryScreen}
          options={{ title: "Add Category" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
