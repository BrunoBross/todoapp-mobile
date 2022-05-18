import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import AddTask from "./components/AddTask";
import uuid from "react-native-uuid";
import TasksList, { TasksType } from "./components/TasksList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RemoveTasks from "./components/RemoveTasks";

export default function App() {
  const [tasks, setTasks] = useState<TasksType["tasks"]>([]);

  useEffect(() => {
    retrieveData();
  }, []);

  const storeData = async (task: TasksType["tasks"]) => {
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(task));
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("tasks");
      if (value !== null) {
        setTasks(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem("tasks");
      setTasks([]);
      retrieveData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <RemoveTasks removeData={removeData} tasks={tasks} />
      <AddTask tasks={tasks} setTasks={setTasks} storeData={storeData} />
      <TasksList tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b870df",
    alignItems: "center",
  },
});
