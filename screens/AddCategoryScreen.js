// AddCategoryScreen.js
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";

export default function AddCategoryScreen({ navigation }) {
  const [currentCategory, setCurrentCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const handleAddCategory = () => {
    if (currentCategory.trim() !== "") {
      const updatedCategories = [...categories, currentCategory.trim()];
      setCategories(updatedCategories);
      setCurrentCategory("");

      // navigation.navigate('CategoryScreen', { updatedCategories });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Category"
        value={currentCategory}
        onChangeText={setCurrentCategory}
      />
      <Button
        title="Add Category"
        onPress={handleAddCategory}
      />
      {categories.map((category, index) => (
        <Text key={index} style={styles.categoryItem}>{category}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
  },
  categoryItem: {
    marginTop: 5,
  },
});
