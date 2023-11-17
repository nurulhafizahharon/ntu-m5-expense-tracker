import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";

export default function AddCategoryScreen() {
  const [category, setCategory] = useState(""); // Need to change to array

  const addCatergory = async () => {
    const data = {categoryName: category};
    try {
      const response = await axios.post(
        `http://10.0.2.2:8080/users/1/categories`, data 
      );
      console.log(response.data);
    } catch (error) {
      console.log("Error posting data: ", error);
    }
  }

  return (
    <>
      <View>
        <TextInput
          placeholder="Category"
          value={category}
          onChangeText={(text) => setCategory(text)}
        />

        <Button
          title="Add Category"
          onPress={addCatergory}
        />
      </View>
    </>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
