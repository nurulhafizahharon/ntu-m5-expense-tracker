// CategoryScreen.js
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

export default function CategoryScreen({ route, navigation }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (route.params?.updatedCategories) {
      setCategories(route.params.updatedCategories);
    }
  }, [route.params?.updatedCategories]);

  return (
    <View style={styles.container}>
      <Button title="➕ Add Category" onPress={() => navigation.navigate("AddCategory")} />
      {categories.map((category, index) => (
        <Text key={index} style={styles.categoryItem}>{category}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryItem: {
    marginTop: 10,
  },
});
