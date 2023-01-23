import React from "react";
import { View } from "react-native";
import { categoryStyles } from "../../styles/category";
// import {} from ""
import { Text } from "react-native-paper";
import { Icon } from "react-native-vector-icons/EvilIcons";
// import {} from "react-native-vector-icons/FontAwesome";
const CardSmall = () => {
  return (
    <View style={categoryStyles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View>
          <Text>
            {/* <Icon name="facebook"></Icon> */}
            <Text variant="headlineLarge">I</Text>
            {/* <Icon.Button name="laptop" size={20}></Icon.Button> */}
            {/* <Icon.Button ></Icon.Button> */}
          </Text>
        </View>
        <View style={{ overflow: "hidden" }}>
          <Text variant="headlineSmall">Laptops</Text>
        </View>
      </View>
      <Text variant="labelLarge" style={{ color: "#555" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
        nesciunt.
      </Text>
    </View>
  );
};

export default CardSmall;
