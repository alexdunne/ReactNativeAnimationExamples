import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Printer from "./Printer";
import Ticket from "./Ticket";

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
        <Printer>
          <Ticket
            ticketNumber={25}
            ticketDate="30/03/18"
            ticketTime="01:07"
            estimatedWaitTime="12"
            queuePosition="2"
          />
        </Printer>
      </View>
    );
  }
}

export default TicketPrint;
