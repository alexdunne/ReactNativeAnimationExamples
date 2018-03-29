import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  tickerPrinter: {
    alignSelf: "stretch",
    height: 24,
    backgroundColor: "#000000",
    borderWidth: 8,
    borderColor: "#312931",
    borderRadius: 16
  }
});

const Printer = ({ children }) => (
  <View style={styles.tickerPrinter}>{children}</View>
);

export default Printer;
