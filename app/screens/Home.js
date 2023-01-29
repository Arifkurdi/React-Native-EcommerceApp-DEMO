import React from "react";
import { Button, View } from "react-native";
import Header from "../components/header/Header";
import Banner from "../components/banners/Banner";
import Categories from "../components/categories/Categories";
import Features from "../features/Features";
import Products from "../products/Products";

const Home = ({ navigation }) => {
  return (
    <View style={{ overflow: "hidden" }}>
      <Header navigation={navigation} />
      <Banner />
      <Categories />
      <Features />
      <Products />
    </View>
  );
};

export default Home;
