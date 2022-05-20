import { Alert, Image, Pressable, StyleSheet, View } from "react-native";
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
        <Image
          style={styles.binImage}
          source={require("../assets/smallBin.png")}
        />
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
  binImage: {
    marginHorizontal: 5,
    width: 18,
    height: 22,
  },
});
