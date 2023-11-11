import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function AddFoodScreen() {
  const [food, setFood] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  return (
    <View>
      <Text>Add Food</Text>
      <TextInput
        placeholder="Food"
        value={food}
        onChangeText={(text) => setFood(text)}
      />
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={(text) => setAmount(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Date"
        value={date}
        onChangeText={(text) => setDate(text)}
      />
      <Button
        title="Add Food"
        // onPress={}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
