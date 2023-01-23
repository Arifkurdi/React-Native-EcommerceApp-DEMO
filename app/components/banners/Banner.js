import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { colorsStyles } from "../../styles/colors";

const Banner = () => {
  return (
    <View
      style={{
        // justifyContent: "space-around",
        paddingTop: "20px",
        paddingBottom: "20px",
        flexDirection: "row",
        overflow: "scroll",
        backgroundColor: colorsStyles.main_sky.backgroundColor,
      }}
    >
      <Card
        style={{
          width: "80%",
          marginRight: "30px",
          marginLeft: "30px",
          borderWidth: "1px",
          borderColor: colorsStyles.color_red.color,
        }}
      >
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      </Card>
      <Card style={{ width: "80%", marginRight: "30px" }}>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      </Card>
      <Card style={{ width: "80%", marginRight: "30px" }}>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      </Card>
      <Card style={{ width: "80%" }}>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      </Card>
    </View>
  );
};

export default Banner;
