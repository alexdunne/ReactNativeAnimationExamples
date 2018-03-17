import React, { PureComponent } from "react";
import { Alert, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginLeft: 0
  }
});

class PaymentButton extends PureComponent {
  render() {
    return (
      <Button
        title="Pay £45.00"
        containerViewStyle={styles.button}
        backgroundColor="#343434"
        fontSize={24}
        onPress={() => {
          Alert.alert("Payment accepted!");
        }}
      />
    );
  }
}

export default PaymentButton;
