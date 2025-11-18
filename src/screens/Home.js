import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  sliderContainer: {
    width: "90%",
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
