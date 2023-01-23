import React, { useState } from "react";
import { Text, View } from "react-native";
import FeaturesNav from "../components/navs/FeaturesNav";
import FeaturesProducts from "../components/products/FeaturesProducts";

const Features = () => {
  const [data, setData] = useState("");

  function sendData(data) {
    return setData(data);
  }

  return (
    <View>
      <FeaturesNav sendData={sendData} />
      <FeaturesProducts />
    </View>
  );
};

export default Features;
