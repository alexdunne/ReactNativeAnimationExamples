import React from "react";
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
        title: "Card Payment"
      }
    }
  },
  {
    initialRouteName: "ExamplesList"
  }
);
