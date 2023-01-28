import React, { useState } from "react";
import { Text, View } from "react-native";
import FeaturesNav from "../components/navs/FeaturesNav";
import FeaturesProducts from "../components/products/FeaturesProducts";

const Features = () => {
  const [navName, setNavName] = useState("bestSeller");

  function setActiveNavName(navName) {
    return setNavName(navName);
  }

  function displayNavProducts() {
    switch (navName) {
      case "bestSeller":
        return <FeaturesProducts nav="bestSeller" />;

      case "newest":
        return <FeaturesProducts nav="newest" />;

      case "sheepest":
        return <FeaturesProducts nav="sheepest" />;
    }
  }

  return (
    <View>
      <FeaturesNav setActiveNavName={setActiveNavName} />
      {displayNavProducts()}
    </View>
  );
};

export default Features;
