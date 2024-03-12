import { Text, TouchableOpacity, View } from "react-native";
export default ToDos = ({ todos }) => {
  return (
    <View style={{ flex: 1 }}>
      {todos?.map((todo) => {
        return (
          <TouchableOpacity>
            <Text style={{ textAlign: "center", fontSize: 18 }}>{todo}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
