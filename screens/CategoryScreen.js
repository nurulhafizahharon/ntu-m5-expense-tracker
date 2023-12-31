import React, { useEffect, useState, useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import DataContext from "../DataContext";

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function CategoryScreen({ navigation }) {
  const [categories, setCategories] = useState([]);
  const dataCtx = useContext(DataContext);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://10.0.2.2:8080/users/1/categories"
      );
      setCategories(response.data);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (dataCtx.fetchData) {
      fetchCategories();
    }
  }, [dataCtx.fetchData]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text h4 style={styles.heading}>
          Category List:
        </Text>
        {categories.map((category) => (
          <Card key={category.id}>
            <Text style={styles.cardText}>
              {capitalizeFirstLetter(category.categoryName)}
            </Text>
          </Card>
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          icon={<Icon name="plus" size={15} color="white" />}
          title="Add Category"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("AddCategory")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    marginVertical: 10,
  },
  cardText: {
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    // backgroundColor: "blue",
    backgroundColor: "#003249",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    margin: 20,
    paddingVertical: 12,
  },
});
