import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function AddCategoryScreen() {
  const [category, setCategory] = useState(""); // Need to change to array

  return (
    <View>
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={(text) => setCategory(text)}
      />
      <Button
        title="Add Category"
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
