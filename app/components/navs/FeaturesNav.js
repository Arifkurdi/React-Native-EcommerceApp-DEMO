import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { colorsStyles } from "../../styles/colors";
import { Text } from "react-native-paper";

const FeaturesNav = ({ setActiveNavName }) => {
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  function hundelUnderLine(order) {
    if (order == "first") {
      setActive(true);
      setActive2(false);
      setActive3(false);
      setActiveNavName("bestSeller");
    } else if (order == "secound") {
      setActive2(true);
      setActive(false);
      setActive3(false);
      setActiveNavName("newest");
    } else {
      setActive3(true);
      setActive(false);
      setActive2(false);
      setActiveNavName("sheepest");
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => hundelUnderLine("first")}
        style={styles.touchable}
      >
        <View style={!active ? styles.unit : styles.active_unit} id="first">
          <Text variant="labelLarge">Best Sell</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => hundelUnderLine("secound")}
        style={styles.touchable}
      >
        <View style={!active2 ? styles.unit : styles.active_unit} id="secound">
          <Text variant="labelLarge">Newest</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => hundelUnderLine("third")}
        style={styles.touchable}
      >
        <View style={!active3 ? styles.unit : styles.active_unit} id="third">
          <Text variant="labelLarge">Sheepest</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    width: "30%",
    padding: "5px",
    textAlign: "center",
    marginRight: "1.5%",
    marginLeft: "1.5%",
  },
  container: {
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
  },
  unit: {
    fontSize: "20px",
  },
  active_unit: {
    fontSize: "20px",

    padding: "5px",
    textAlign: "center",

    borderBottomWidth: "3px",
    borderBottomColor: colorsStyles.color_red.color,
  },
});
export default FeaturesNav;
