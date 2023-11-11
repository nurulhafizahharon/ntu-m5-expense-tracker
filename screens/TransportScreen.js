import { Button, StyleSheet, View } from "react-native";

export default function TransportScreen({ navigation }) {
  return (
    <View style={styles.button}>
      <Button title="➕" onPress={() => navigation.navigate("AddTransport")} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
  },
});
