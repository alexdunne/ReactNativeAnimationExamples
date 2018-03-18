import React from "react";
import { View } from "react-native";
import { StackNavigator } from "react-navigation";

import ExamplesList from "./ExamplesList";
import HeaderLink from "./components/HeaderLink";
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
        headerRight: (
          <HeaderLink
            color="#FFFFFF"
            url="https://github.com/alexdunne/ReactNativeAnimationExamples/tree/master/src/examples/CardPayment"
          />
        )
      }
    }
  },
  {
    initialRouteName: "ExamplesList"
  }
);
