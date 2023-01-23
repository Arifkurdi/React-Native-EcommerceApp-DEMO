import React from "react";
import { Button, View } from "react-native";
import Header from "../components/header/Header";
import Banner from "../components/banners/Banner";
import Categories from "../components/categories/Categories";
import Features from "../features/Features";

const Home = ({ navigation }) => {
  return (
    <View style={{ overflow: "hidden" }}>
      <Header navigation={navigation} />
      <Banner />
      <Categories />
      <Features />
    </View>
  );
};

export default Home;
