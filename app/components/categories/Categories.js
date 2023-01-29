import React from "react";
import { View } from "react-native";
import CardSmall from "../cards/CardSmall";
import { colorsStyles } from "../../styles/colors";

const Categories = () => {
  return (
    <View
      style={{
        display: "flex",
        padding: "20px",
        overflow: "scroll",
        backgroundColor: colorsStyles.main_white.backgroundColor,
      }}
    >
      <View
        style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}
      >
        <CardSmall />
        <CardSmall />
        <CardSmall />
        <CardSmall />
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <CardSmall />
        <CardSmall />
        <CardSmall />
      </View>
    </View>
  );
};

export default Categories;
