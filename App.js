import React, { Component } from "react";
import { View } from "react-native";

import AppNavigator from "./src/AppNavigator";

const App = () => (
  <View style={{ flex: 1 }}>
    <AppNavigator />
  </View>
);

export default App;
