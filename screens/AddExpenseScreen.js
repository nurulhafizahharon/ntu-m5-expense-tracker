import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function AddExpenseScreen() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `http://10.0.2.2:8080/users/1/categories`
        );
        console.log(response.data);
        setCategories(response.data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    fetchCategory();
  }, []);

  const handlerDate = (e, selectedDate) => {
    console.log(selectedDate);
    const currentDate = selectedDate;
    setDate(currentDate);
    setShowDatePicker(false);
  };

  const showDate = () => {
    setShowDatePicker(true);
  };

  const formatDate = (date) => {
    const dayOfMonth = date.toLocaleString("default", { day: "numeric" });
    const monthName = date.toLocaleString("default", { month: "long" });
    const formattedDate = `${dayOfMonth} ${monthName}`;

    return formattedDate;
  };

  // const formatDateForJava = (date) => {
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  //   const day = String(date.getDate()).padStart(2, '0');
  
  //   return `${year}-${month}-${day}`;
  // };

  const addExpense = async () => {
    const expense = {description:description, amount:amount, expenseDate:date};
    const data = {expense, categoryNum: category};
    try {
      const response = await axios.post(
        `http://10.0.2.2:8080/users/1/wallets/1/expenses`, data 
      );
      console.log(response.data);
    } catch (error) {
      console.log("Error posting data: ", error);
    }
  }

  return (
    <View>
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={(input) => setDescription(input)}
      />
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={(number) => setAmount(number)}
        keyboardType="numeric"
      />
      <View>
        <Text>Date: {formatDate(date)}</Text>
        <Button onPress={showDate} title="Change Date"></Button>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            is24Hour={true}
            onChange={handlerDate}
          />
        )}
      </View>
      <Picker
        selectedValue={category}
        onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
      >
        {categories.map((category) => (
          <Picker.Item
            label={category.categoryName}
            value={category.categoryNum}
            key={category.categoryNum}
          />
        ))}
      </Picker>
      <Button
        title="Add Expense"
        onPress={addExpense}
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
