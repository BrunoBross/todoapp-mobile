import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { TasksType } from "./TasksList";

interface RemoveTasksType {
  removeData(): any;
  tasks: TasksType["tasks"];
}

export default function RemoveTasks({ removeData, tasks }: RemoveTasksType) {
  const handleRemoveTask = () => {
    tasks.length > 0 &&
      Alert.alert("Você tem certeza?", "Deseja remover todas as tarefas?", [
        {
          text: "Sim",
          onPress: () => {
            removeData();
          },
        },
        {
          text: "Não",
        },
      ]);
  };
  return (
    <View style={styles.resetButton}>
      <Pressable onPress={handleRemoveTask}>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>Resetar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  resetButton: {
    padding: 10,
    backgroundColor: "#e34444",
    position: "absolute",
    right: 20,
    top: 50,
    borderRadius: 5,
  },
});
