import { useEffect, useState } from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import axios from "axios";

export default function ExpensesScreen({ navigation }) {

  const [expenses, setExpenses] = useState([]); 

  useEffect(() => {
    const fetchExpenses = async() =>{
      try {
        const response = await axios.get('http://10.0.2.2:8080/users/1/wallets/1/expenses'); 
        setExpenses(response.data); 
      } catch(error){
        console.log("Error fetching data: ", error); 
      }
    };

    fetchExpenses(); 
  })

  return (
    <>
        <View style={styles.expensesContainer}>
          <Text style={styles.heading}>Expenses List:</Text>

          {expenses.map((expense) => (
            <View key={expense.id} style={styles.expenseItem}>
              <Text>Date: {expense.expenseDate}</Text>
              <Text>Category: {expense.category.categoryName}</Text>
              <Text>Description: {expense.description}</Text>
              <Text>Amount: ${expense.amount}</Text>
            </View> 
            ))}
        </View>

        <View style={styles.button}>
          <Button title="➕" onPress={() => navigation.navigate("AddExpense")} />
        </View>
    </>

  );
}

const styles = StyleSheet.create({
  expensesContainer: {
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  expenseItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  button: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
  },
});
