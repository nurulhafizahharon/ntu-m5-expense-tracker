import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/FontAwesome";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


export default function AddExpenseScreen({ navigation }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("0");
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

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // const formatDateForJava = (date) => {
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  //   const day = String(date.getDate()).padStart(2, '0');

  //   return `${year}-${month}-${day}`;
  // };

  
  const addExpense = async () => {
    const expense = {
      description: description,
      amount: amount,
      expenseDate: date,
    };
    const data = { expense, categoryNum: category };
    try {
      const response = await axios.post(
        `http://10.0.2.2:8080/users/1/wallets/1/expenses`,
        data
      );
      console.log(response.data);
      navigation.navigate("Home");
    } catch (error) {
      console.log("Error posting data: ", error);
      Alert.alert(error.response.data.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.amount}>
        <Picker
          style={{ flex: 2, color: "white" }}
          selectedValue={category}
          onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
          dropdownIconColor="white"
        >
          {categories.map((category) => (
            <Picker.Item
              label={capitalizeFirstLetter(category.categoryName)}
              value={category.categoryNum}
              key={category.categoryNum}
            />
          ))}
        </Picker>
        <TextInput
          placeholder="0"
          placeholderTextColor="white"
          value={amount}
          onChangeText={(number) => setAmount(number)}
          keyboardType="numeric"
          style={{
            flex: 3,
            textAlign: "right",
            color: "white",
            paddingRight: 20,
            fontWeight: "bold",
            fontSize: 24,
          }}
        />
      </View>

      <View style={styles.description}>
        <Icon name="sticky-note" size={20} color="#007EA7" />
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={(input) => setDescription(input)}
          style={{fontSize: 16}}
        />
      </View>

      <View>
        <Pressable style={styles.date} onPress={showDate}>
          <Icon name="calendar" size={20} color="#007EA7" />
          <Text
            style={{
              fontSize: 16,
            }}
          >
            {formatDate(date)}
          </Text>
        </Pressable>
        {/* <Button onPress={showDate} title="Change Date"></Button> */}
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            is24Hour={true}
            onChange={handlerDate}
          />
        )}
      </View>

      <Pressable style={styles.button} onPress={addExpense}>
        <Text style={styles.text}>Add an Expense</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  amount: {
    flexDirection: "row",
    backgroundColor: "#007EA7",
    padding: 8,
    paddingLeft: 20,
    paddingRight: 20,
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
  date: {
    flexDirection: "row",
    margin: 20,
    marginLeft: 30,
    gap: 20,
    alignItems: "center",
  },
  description: {
    flexDirection: "row",
    margin: 20,
    marginLeft: 30,
    gap: 20,
    alignItems: "center",
  },
});
