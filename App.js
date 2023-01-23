import React, { Component } from "react";
import { View, Text } from "react-native";
import MainApp from "./app/index.js";

export default class App extends Component {
  render() {
    return (
      <View style={{ height: "3000px" }}>
        <MainApp />
        {/* <Text style={{ width: "100%", backgroundColor: "#f00" }}>
          Hello Wrold
        </Text> */}
      </View>
    );
  }
}
