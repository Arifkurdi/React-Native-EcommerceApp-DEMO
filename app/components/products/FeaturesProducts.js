import React from "react";
import { View } from "react-native";
import CardMid from "../cards/CardMid";

const FeaturesProducts = ({ nav }) => {
  return (
    <View style={{ display: "flex", flexDirection: "column" }}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <CardMid />
        <CardMid />
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <CardMid />
        <CardMid />
      </View>
    </View>
  );
};

export default FeaturesProducts;
