import React from "react";
import { View } from "react-native";
import { StackNavigator } from "react-navigation";

import ExamplesList from "./ExamplesList";
import CardPayment from "./examples/CardPayment";

export default StackNavigator(
  {
    ExamplesList: {
      screen: ExamplesList,
      navigationOptions: {
        title: "Examples"
      }
    },
    // Examples
    CardPayment: {
      screen: CardPayment,
      navigationOptions: {
        title: "Checkout",
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          textAlign: "center",
          flex: 1
        },
        headerStyle: {
          backgroundColor: "#EC5E95",
          borderBottomWidth: 0,
          elevation: 0
        },
        // Workaround for centered headerTitle on android
        headerRight: <View />
      }
    }
  },
  {
    initialRouteName: "ExamplesList"
  }
);
