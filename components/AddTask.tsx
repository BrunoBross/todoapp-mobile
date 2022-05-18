import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import uuid from "react-native-uuid";
import { TasksType } from "./TasksList";

interface AddTaskType {
  tasks: TasksType["tasks"];
  setTasks(newTasks: TasksType["tasks"]): any;
}

export default function AddTask({ tasks, setTasks }: AddTaskType) {
  const [taskName, setTaskName] = useState("");
  const handleAddTask = () => {
    const newTasks = [
      ...tasks,
      {
        id: uuid.v4(),
        name: taskName,
        time: new Date(),
      },
    ];

    if (newTasks && taskName !== "") {
      setTasks(newTasks);
      setTaskName("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.strongText}>Adicionar Task</Text>
      <TextInput
        style={styles.inputName}
        onChangeText={(newTaskName) => setTaskName(newTaskName)}
        defaultValue={taskName}
        onSubmitEditing={handleAddTask}
      />
      <Pressable style={styles.submitButton} onPress={handleAddTask}>
        <Text style={styles.strongText}>Adicionar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginBottom: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputName: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#ccc",
    width: 250,
    fontSize: 15,
  },
  submitButton: {
    marginTop: 15,
    padding: 15,
    width: 200,
    backgroundColor: "#ccc",
    borderRadius: 5,
  },
  strongText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
