import React, { Component } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: height * 0.6,
    width: "100%"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        />
      </View>
    );
  }
}
