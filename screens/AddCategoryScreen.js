import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import DataContext from "../DataContext";


export default function AddCategoryScreen() {
  const [category, setCategory] = useState(""); // Need to change to array
  const dataCtx = useContext(DataContext);

  const navigation = useNavigation();

  const addCatergory = async () => {
    const data = { categoryName: category };
    try {
      const response = await axios.post(
        `http://10.0.2.2:8080/users/1/categories`,
        data
      );
      console.log(response.data);
      dataCtx.handlerData();
      navigation.navigate("Home");
    } catch (error) {
      console.log("Error posting data: ", error);
      Alert.alert(error.response.data.message);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Create a New Category</Text>
        <TextInput
          placeholder="Category name"
          value={category}
          onChangeText={(text) => setCategory(text)}
          style={styles.category}
        />
        {/* <Button
          title="Add Category"
          onPress={addCatergory}
        /> */}
        <Pressable style={styles.button} onPress={addCatergory}>
          <Text style={styles.text}>Add a Category</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#003249",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    margin: 20,
    paddingVertical: 12,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  category: {
    margin: 20,
    fontSize: 16,
  },
});
