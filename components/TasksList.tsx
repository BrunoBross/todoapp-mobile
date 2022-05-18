import { ScrollView, Text, View } from "react-native";
import Task from "./Task";

export interface TasksType {
  tasks: {
    id: string | number[];
    name: string;
    time: number;
  }[];
}

export default function TasksList({ tasks }: TasksType) {
  return (
    <ScrollView>
      <View>
        {tasks
          .slice(0)
          .reverse()
          .map((task: any) => {
            return <Task key={task.id} task={task} />;
          })}
      </View>
    </ScrollView>
  );
}
