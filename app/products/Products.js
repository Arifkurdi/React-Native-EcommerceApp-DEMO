import React from "react";
import { View } from "react-native";
import Product from "./Product";
import { Text } from "react-native-paper";
import { colorsStyles } from "../styles/colors";

const Products = () => {
  return (
    <View
      style={{
        padding: "20px",
        backgroundColor: colorsStyles.main_sky.backgroundColor,
      }}
    >
      <View
        style={{
          paddingBottom: "10px",
          display: "flex",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <Text variant="headlineSmall" te>
          Product You Would Like
        </Text>
      </View>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </View>
  );
};

export default Products;
