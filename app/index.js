import React from "react";
import { Text, View } from "react-native";
import Home from "./screens/Home";
import { MyStack } from "./navigation/Navigator";

const index = () => {
  return (
    // <View>
    //   <Header />
    //   {/* <Home /* navigation={} */ /> */}
    <MyStack />
    //   {/* <Text>Hello World</Text>
    // </View> */}
  );
};

export default index;
