import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 32,
    backgroundColor: "#00B9F1"
  },
  tickerPrinter: {
    alignSelf: "stretch",
    height: 24,
    backgroundColor: "#000000",
    borderWidth: 8,
    borderColor: "#312931",
    borderRadius: 16
  }
});

class TicketPrint extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tickerPrinter} />
      </View>
    );
  }
}

export default TicketPrint;
