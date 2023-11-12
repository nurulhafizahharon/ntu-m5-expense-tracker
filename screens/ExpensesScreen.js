import { Button, StyleSheet, View } from "react-native";

export default function ExpensesScreen({ navigation }) {
  // const handleAddFood = () => {
  //   navigation.navigate("AddFood");
  // };

  return (
    <View style={styles.button}>
      <Button title="➕" onPress={() => navigation.navigate("AddExpense")} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
  },
});
