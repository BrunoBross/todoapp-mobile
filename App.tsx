import { useState } from "react";
import { StyleSheet, View } from "react-native";
import AddTask from "./components/AddTask";
import uuid from "react-native-uuid";
import TasksList, { TasksType } from "./components/TasksList";

export default function App() {
  const [tasks, setTasks] = useState<TasksType["tasks"]>([]);

  return (
    <View style={styles.container}>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <TasksList tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
