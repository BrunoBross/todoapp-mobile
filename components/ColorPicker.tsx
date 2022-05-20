import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

interface ColorPickerType {
  currentColor: string;
  handleSetTaskColor(color: string): void;
}

export default function ColorPicker({
  handleSetTaskColor,
  currentColor,
}: ColorPickerType) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const handleChooseColor = (color: string) => {
    handleSetTaskColor(color);
    setIsExpanded(!isExpanded);
  };
  return (
    <View style={styles.container}>
      <View style={styles.initialContainer}>
        <Pressable
          onPress={() => handleChooseColor("#7aed93")}
          style={[styles.initialColorButton, { backgroundColor: currentColor }]}
        />
      </View>
      {isExpanded && (
        <View style={styles.colorContainer}>
          <Pressable
            onPress={() => handleChooseColor("#7aed93")}
            style={[styles.colorPicker, { backgroundColor: "#7aed93" }]}
          />
          <Pressable
            onPress={() => handleChooseColor("#e34444")}
            style={[styles.colorPicker, { backgroundColor: "#e34444" }]}
          />
          <Pressable
            onPress={() => handleChooseColor("#2fd9ce")}
            style={[styles.colorPicker, { backgroundColor: "#2fd9ce" }]}
          />
          <Pressable
            onPress={() => handleChooseColor("#352fd9")}
            style={[styles.colorPicker, { backgroundColor: "#352fd9" }]}
          />
          <Pressable
            onPress={() => handleChooseColor("#d64dcf")}
            style={[styles.colorPicker, { backgroundColor: "#d64dcf" }]}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    position: "absolute",
    top: 30,
  },
  initialContainer: {
    width: "100%",
    position: "absolute",
    alignItems: "flex-end",
  },
  initialColorButton: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#ccc",
  },
  colorContainer: {
    position: "absolute",
    flexDirection: "column",
    top: -5,
    right: 0,
  },
  colorPicker: {
    marginTop: 5,
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#ccc",
  },
});
