import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from "react-native";
import { Foundation } from "@expo/vector-icons";

import { styles } from "./styles";
import Form from "./utils/Form";
import { useState } from "react";
import Todos from "./utils/Todos";

export default function App() {
  const [todos, setToDos] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.text}>rastaTech</Text>
        <TouchableOpacity>
          <Text style={styles.text}>
            <Foundation name="indent-more" size={40} />
          </Text>
        </TouchableOpacity>
      </View>
      <Form todos={todos} setToDos={setToDos} />
      <Todos todos={todos} />
      <StatusBar style="auto" />
    </View>
  );
}
