import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import { View } from "react-native";

export default Form = ({ todos, setToDos }) => {
  const [todo, setTodo] = useState("");
  const handleAddToDo = () => {
    setToDos([...todos, todo]);
    setTodo("");
  };

  return (
    <View style={styles.dashboard_wrapper}>
      <Text style={styles.head3}>To Do Application</Text>

      <View style={styles.input_wrapper}>
        <TextInput
          style={styles.inputField}
          defaultValue="Add a todo"
          value={todo}
          onChangeText={(text) => setTodo(text)}
        />
        <TouchableOpacity style={styles.btn}>
          <Button title="Add" onPress={handleAddToDo} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
