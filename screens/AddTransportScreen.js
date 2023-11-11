import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function AddTransportScreen() {
  const [trasnsport, setTransport] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  return (
    <View>
      <Text>Add Transport</Text>
      <TextInput
        placeholder="Transport"
        value={trasnsport}
        onChangeText={(text) => setTransport(text)}
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
        title="Add Transport"
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
