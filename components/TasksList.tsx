import { ScrollView, StyleSheet, Text, View } from "react-native";
import Task from "./Task";

export interface TasksType {
  tasks: {
    id: string | number[];
    name: string;
    color: string;
    time: number;
  }[];
  handleRemoveTask(taskId: string | number[]): void;
}

export default function TasksList({ tasks, handleRemoveTask }: TasksType) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {tasks
          .slice(0)
          .reverse()
          .map((task: any) => {
            return (
              <Task
                key={task.id}
                task={task}
                handleRemoveTask={handleRemoveTask}
              />
            );
          })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 260,
  },
});
