import React, { useState } from "react";
import { View } from "react-native";
import { headerStyles } from "../../styles/header";
import { colorsStyles } from "../../styles/colors";
import { Appbar, Searchbar } from "react-native-paper";

const Header = ({ navigation }) => {
  const [searchItem, setSearchItem] = useState("");
  const [searchStatus, setSearchStatus] = useState(false);
  const containerStyles = {
    ...headerStyles.container,
    ...colorsStyles.main_blue,
    ...colorsStyles.color_white,
  };

  // Search Query
  const onSearchForItem = () => {
    console.log("Helllo Search");
  };

  return (
    <Appbar.Header style={containerStyles}>
      <Appbar.Content
        color={colorsStyles.color_red.color}
        style={{ flex: 1 }}
        title="MEGA"
      />
      {!searchStatus ? (
        <>
          <Appbar.Action
            icon="magnify"
            color={colorsStyles.color_sky.color}
            onPress={() => {
              setSearchStatus(true);
            }}
          />
          <Appbar.Action
            icon="login"
            color={colorsStyles.color_sky.color}
            onPress={() => {
              navigation.navigate("Register");
            }}
          />
        </>
      ) : (
        <Searchbar
          placeholder="Search"
          onChangeText={(e) => setSearchItem(e)}
          value={searchItem}
          onIconPress={onSearchForItem}
          clearIcon={"bat"}
          inputStyle={{ fontSize: "14px" }}
          style={{ flex: 2 }}
        />
      )}
    </Appbar.Header>
  );
};

export default Header;
