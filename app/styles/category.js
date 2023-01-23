import { StyleSheet } from "react-native";
import { colorsStyles } from "./colors";

export const categoryStyles = StyleSheet.create({
  container: {
    minWidth: "45%",
    maxWidth: "65%",
    padding: "10px",
    borderRadius: "10px",
    borderWidth: "1px",
    borderStyle: "dotted",
    borderColor: colorsStyles.color_red.color,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    // backgroundColor: colorsStyles.main_red.backgroundColor,
    color: colorsStyles.color_blue.color,
    marginRight: "10px",
  },
});
