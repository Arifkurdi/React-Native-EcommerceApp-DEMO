import React from "react";
import { Image, View } from "react-native";
import { Text } from "react-native-paper";
import { colorsStyles } from "../styles/colors";

const Product = () => {
  return (
    <View
      style={{
        display: "flex",
        flex: "1",
        flexDirection: "row",
        padding: 10,
        marginBottom: "10px",
        borderRadius: 5,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: colorsStyles.color_blue.color,
        shadowOpacity: 0.6,
        shadowRadius: 8,
        backgroundColor: colorsStyles.main_white.backgroundColor,
      }}
    >
      <Image
        source={{ uri: "https://picsum.photos/700" }}
        style={{
          width: 150,
          height: 100,
          marginRight: "15px",
          justifyContent: "center",
        }}
      />
      <View
        style={{
          flex: 1,
          paddingLeft: 10,
          position: "relative",
        }}
      >
        <Text style={{ fontSize: 16, color: colorsStyles.color_blue.color }}>
          IPhone 12 pro max
        </Text>
        <View
          style={{
            position: "absolute",
            bottom: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>1234 SDG</Text>
          <View>Add</View>
        </View>
      </View>
    </View>
  );
};

export default Product;
