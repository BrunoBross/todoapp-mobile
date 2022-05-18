import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

interface TaskType {
  task: {
    id: string | number[];
    name: string;
    time: number;
  };
}

export default function Task({ task }: TaskType) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleIsChecked = () => {
    Alert.alert(
      "Você tem certeza?",
      isChecked
        ? "Deseja marcar como a fazer?"
        : "Deseja marcar como concluida?",
      [
        {
          text: "Sim",
          onPress: () => {
            setIsChecked(!isChecked);
          },
        },
        {
          text: "Não",
        },
      ]
    );
  };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={handleToggleIsChecked}
        style={[
          styles.taskButton,
          { backgroundColor: isChecked ? "#e3ac65" : "#ccc" },
        ]}
      >
        <Text
          style={[
            styles.taskText,
            { textDecorationLine: isChecked ? "line-through" : "none" },
          ]}
        >
          {task.name}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    alignItems: "center",
    textAlign: "center",
  },
  taskButton: {
    padding: 15,
    width: 250,
    margin: 5,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  taskText: {
    fontSize: 15,
  },
});
