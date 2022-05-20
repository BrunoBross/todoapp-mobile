import { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";

export interface TaskType {
  task: {
    id: string | number[];
    name: string;
    color: string;
    time: number;
  };
  handleRemoveTask(taskId: string | number[]): void;
}

export default function Task({ task, handleRemoveTask }: TaskType) {
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

  const date = new Date(task.time);
  console.log(date.toString());
  return (
    <View style={styles.container}>
      <Pressable
        onPress={handleToggleIsChecked}
        style={[
          styles.taskButton,
          { backgroundColor: isChecked ? "#e3ac65" : task.color },
        ]}
      >
        <View style={styles.taskContainer}>
          <Text
            style={[
              styles.taskText,
              isChecked && {
                textDecorationLine: "line-through",
                fontStyle: "italic",
              },
            ]}
          >
            {task.name}
          </Text>
          <Text
            style={{
              color: "rgba(0, 0, 0, 0.3)",
              fontStyle: "italic",
              marginTop: 5,
            }}
          >
            {date.toString().substring(0, 15)}
          </Text>
        </View>

        <Pressable
          style={{
            justifyContent: "center",
            padding: 15,
          }}
          onPress={() => handleRemoveTask(task.id)}
        >
          <Image
            style={styles.binImage}
            source={require("../assets/smallBin.png")}
          />
        </Pressable>
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
    width: 250,
    margin: 5,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  taskContainer: {
    flex: 1,
    padding: 15,
  },
  taskText: {
    fontSize: 15,
  },
  binImage: {
    width: 18,
    height: 22,
  },
});
