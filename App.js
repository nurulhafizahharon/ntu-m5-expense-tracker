import HomeScreen from "./screens/HomeScreen";
import FoodScreen from "./screens/FoodScreen";
import TransportScreen from "./screens/TransportScreen";
import AddFoodScreen from "./screens/AddFoodScreen";
import AddTransportScreen from "./screens/AddTransportScreen";
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
          options={{ title: "Overview" }}
        />
        <Stack.Screen
          name="Food"
          component={FoodScreen}
          options={{ title: "Food" }}
        />
        <Stack.Screen
          name="Transport"
          component={TransportScreen}
          options={{ title: "Transport" }}
        />
        <Stack.Screen
          name="AddFood"
          component={AddFoodScreen}
          options={{ title: "Add Food" }}
        />
        <Stack.Screen
          name="AddTransport"
          component={AddTransportScreen}
          options={{ title: "Add Transport" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
