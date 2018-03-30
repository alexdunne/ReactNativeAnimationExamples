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
  state = {
    // This is a lazy way to rerender the printer and the ticket to
    // restart the animation by rendering everything
    ticketIndex: 1
  };

  render() {
    const ticketHeight = 400;

    return (
      <View style={styles.container}>
        <Printer key={this.state.ticketIndex} ticketHeight={ticketHeight}>
          <Ticket
            height={ticketHeight}
            ticketNumber={25}
            ticketDate="30/03/18"
            ticketTime="01:07"
            estimatedWaitTime="12"
            queuePosition="2"
            onTicketTaken={() => {
              this.setState({ ticketIndex: this.state.ticketIndex + 1 });
            }}
          />
        </Printer>
      </View>
    );
  }
}

export default TicketPrint;
