import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

export default function ExpensesScreen({ navigation }) {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:8080/users/1/wallets/1/expenses');
        setExpenses(response.data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    fetchExpenses();
  }, []); // Added empty dependency array to prevent infinite loop

  return (
    <ScrollView style={styles.container}>
      <Text h4 style={styles.heading}>Expenses List:</Text>
      {expenses.map((expense) => (
        <Card key={expense.id}>
          <Card.Title>Date: {expense.expenseDate}</Card.Title>
          <Card.Divider />
          <Text style={styles.cardText}>Category: {expense.category.categoryName}</Text>
          <Text style={styles.cardText}>Description: {expense.description}</Text>
          <Text style={styles.cardText}>Amount: ${expense.amount}</Text>
        </Card>
      ))}
      <Button
        icon={<Icon name="plus" size={15} color="white" />}
        title=" Add Expense"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("AddExpense")}
      />
    </ScrollView>
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
  button: {
    backgroundColor: "blue",
    borderRadius: 20,
    margin: 20,
  },
});
