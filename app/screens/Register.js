import React from "react";
import { Button, Text, View } from "react-native";

const Register = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </View>
  );
};

export default Register;
