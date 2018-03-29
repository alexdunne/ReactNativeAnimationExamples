import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Printer from "./Printer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 32,
    backgroundColor: "#00B9F1"
  }
});

class TicketPrint extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Printer />
      </View>
    );
  }
}

export default TicketPrint;
