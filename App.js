import HomeScreen from "./screens/HomeScreen";
import ExpensesScreen from "./screens/ExpensesScreen";
import CategoryScreen from "./screens/CategoryScreen";
import AddExpenseScreen from "./screens/AddExpenseScreen";
import AddCategoryScreen from "./screens/AddCategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DataProvider } from "./DataContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Expenses"
            component={ExpensesScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Categories"
            component={CategoryScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddExpense"
            component={AddExpenseScreen}
            options={{ title: "Add an Expense" }}
          />
          <Stack.Screen
            name="AddCategory"
            component={AddCategoryScreen}
            options={{ title: "Add a Category" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}
