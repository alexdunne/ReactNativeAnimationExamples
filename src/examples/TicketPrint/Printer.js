import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  printer: {
    alignSelf: "stretch",
    height: 24,
    backgroundColor: "#000000",
    borderWidth: 8,
    borderColor: "#312931",
    borderRadius: 16
  },
  printerOffset: {
    marginTop: -12,
    paddingHorizontal: 16
  }
});

const Printer = ({ children }) => (
  <View style={styles.container}>
    <View style={styles.printer} />
    <View style={styles.printerOffset}>{children}</View>
  </View>
);

export default Printer;
