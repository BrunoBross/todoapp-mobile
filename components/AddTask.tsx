import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import uuid from "react-native-uuid";
import { TasksType } from "./TasksList";
import ColorPicker from "./ColorPicker";

interface AddTaskType {
  taskName: string;
  taskColor: string;
  handleAddTask(): void;
  handleSetTaskColor(color: string): void;
  handleSetTaskName(newTaskName: string): void;
}

export default function AddTask({
  handleAddTask,
  handleSetTaskColor,
  handleSetTaskName,
  taskName,
  taskColor,
}: AddTaskType) {
  return (
    <View style={styles.container}>
      <Text style={styles.strongText}>Adicionar Task</Text>
      <TextInput
        style={styles.inputName}
        onChangeText={(newTaskName) => handleSetTaskName(newTaskName)}
        defaultValue={taskName}
        onSubmitEditing={handleAddTask}
      />

      <Pressable style={styles.submitButton} onPress={handleAddTask}>
        <Text style={styles.strongText}>Adicionar</Text>
      </Pressable>
      <ColorPicker
        handleSetTaskColor={handleSetTaskColor}
        currentColor={taskColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  inputName: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#fff",
    width: 250,
    fontSize: 15,
    borderRadius: 5,
    elevation: 5,
  },
  submitButton: {
    marginTop: 15,
    padding: 15,
    width: 200,
    backgroundColor: "#7aed93",
    borderRadius: 5,
  },
  strongText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
