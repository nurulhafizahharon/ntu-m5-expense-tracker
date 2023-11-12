import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function AddExpenseScreen() {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState(""); // Need to change to array and change category as listdown

  return (
    <View>
      <TextInput
        placeholder="Expense"
        value={expense}
        onChangeText={(text) => setExpense(text)}
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
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={(text) => setCategory(text)}
      />
      <Button
        title="Add Expense"
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
