import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

interface TaskType {
  task: {
    id: string | number[];
    name: string;
    time: Date;
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
      <View
        style={[
          styles.task,
          { backgroundColor: isChecked ? "#6dd54e" : "#ccc" },
        ]}
      >
        <Pressable onPress={handleToggleIsChecked} style={styles.taskButton}>
          <Text
            style={[
              styles.taskText,
              { textDecorationLine: isChecked ? "line-through" : "none" },
            ]}
          >
            {task.name}
          </Text>
          <Text>
            {task.time.getHours()}:{task.time.getMinutes()}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    alignItems: "center",
    textAlign: "center",
  },
  task: {
    padding: 10,
    width: 250,
    margin: 5,
  },
  taskButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  taskText: {
    fontSize: 15,
  },
});
