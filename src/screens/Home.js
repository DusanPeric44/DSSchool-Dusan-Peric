import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";
import Icon from "../components/Icon";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay={true}
          activeDotColor="rgba(34, 212, 255, 1)"
          autoplayTimeout={5}
        >
          <View style={styles.item}>
            <Image
              style={styles.imgItem}
              source={require("../../assets/banner_1.jpg")}
              resizeMode="cover"
            />
          </View>
          <View style={styles.item}>
            <Image
              style={styles.imgItem}
              source={require("../../assets/banner_2.png")}
              resizeMode="cover"
            />
          </View>
          <View style={styles.item}>
            <Image
              style={styles.imgItem}
              source={require("../../assets/banner_3.jpeg")}
              resizeMode="cover"
            />
          </View>
          <View style={styles.item}>
            <Image
              style={styles.imgItem}
              source={require("../../assets/banner_5.jpg")}
              resizeMode="cover"
            />
          </View>
        </Swiper>
      </View>
      <View style={styles.iconsContainer}>
        <Icon name="cellphone" iconText="Iphone"></Icon>
        <Icon name="android" iconText="Samsung"></Icon>
        <Icon name="laptop" iconText="Laptop"></Icon>
      </View>
      <View style={styles.iconsContainer}>
        <Icon name="tablet" iconText="Tablet"></Icon>
        <Icon name="mouse" iconText="Mouse"></Icon>
        <Icon name="keyboard-outline" iconText="Keyboard"></Icon>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconsContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },

  sliderContainer: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 8,
  },

  imgItem: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },

  item: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Home;

// Easy:

// Add color prop

//M
// Add size prop

//H
// Create a Home screen that displays a grid of Icon components.
// The icons should be stored in an array of objects, where each object has name,
// color, and size properties. Map over this array to render the Icon components.
