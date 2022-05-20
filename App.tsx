import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import AddTask from "./components/AddTask";
import uuid from "react-native-uuid";
import TasksList, { TasksType } from "./components/TasksList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RemoveTasks from "./components/RemoveTasks";

export default function App() {
  const [taskName, setTaskName] = useState<string>("");
  const [taskColor, setTaskColor] = useState<string>("#76e365");
  const [tasks, setTasks] = useState<TasksType["tasks"]>([]);

  const handleAddTask = () => {
    const newTasks = [
      ...tasks,
      {
        id: uuid.v4(),
        name: taskName,
        color: taskColor,
        time: Date.now(),
      },
    ];

    if (newTasks && taskName !== "") {
      setTasks(newTasks);
      storeData(newTasks);
      setTaskName("");
    }
  };

  const handleRemoveTask = (taskId: string | number[]) => {
    Alert.alert("Você tem certeza?", "Deseja remover essa tarefa?", [
      {
        text: "Sim",
        onPress: () => {
          const newTasks = tasks.filter((task: any) => task.id !== taskId);
          if (newTasks) {
            setTasks(newTasks);
            storeData(newTasks);
          }
        },
      },
      {
        text: "Não",
      },
    ]);
  };

  const handleSetTaskColor = (color: string) => {
    setTaskColor(color);
  };

  const handleSetTaskName = (taskName: string) => {
    setTaskName(taskName);
  };

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
      {tasks.length > 0 && (
        <RemoveTasks removeData={removeData} tasks={tasks} />
      )}

      <AddTask
        taskName={taskName}
        taskColor={taskColor}
        handleSetTaskName={handleSetTaskName}
        handleSetTaskColor={handleSetTaskColor}
        handleAddTask={handleAddTask}
      />
      <TasksList tasks={tasks} handleRemoveTask={handleRemoveTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7a75ff",
    alignItems: "center",
  },
});
