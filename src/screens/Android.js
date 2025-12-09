import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import data from "../../data/products.json";
import Item from "../components/Item";

class Android extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [],
      showInStockOnly: false,
    };
  }

  componentDidMount() {
    this.setState({
      product: data,
    });
  }

  render() {
    const androidProducts = this.state.product.android || [];
    const displayedProducts = this.state.showInStockOnly
      ? androidProducts.filter((p) => p.inStock)
      : androidProducts;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.filterRow}>
            <Text style={styles.filterLabel}>In stock only</Text>
            <Switch
              value={this.state.showInStockOnly}
              onValueChange={(val) => this.setState({ showInStockOnly: val })}
            />
          </View>
          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
          <View style={styles.productsContainer}>
            <FlatList
              data={displayedProducts}
              renderItem={({ item }) => <Item item={item} />}
              keyExtractor={(item, index) =>
                item.id ? String(item.id) : String(index)
              }
            />
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>View More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignSelf: "center",
    padding: 20,
  },
  desc: {
    marginBottom: 20,
  },
  filterRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  filterLabel: {
    fontSize: 16,
  },
});

export default Android;
