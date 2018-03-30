import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { height } = Dimensions.get("window");

const fontColour = "#07080A";

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    height: 400,
    alignSelf: "stretch"
  },
  ticketTopContainer: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderColor: "#EEEEEE",
    borderBottomWidth: 1
  },
  ticketBottomContainer: {
    flex: 2
  },
  queueSummaryContainer: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 24,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  acceptTicketContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#9AD275",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold"
  },
  subHeading: {
    fontSize: 16,
    fontWeight: "100"
  },
  ticketSummary: {
    // Used to offset the big ticketNumber size
    paddingTop: 16
  },
  ticketNumber: {
    fontSize: 70,
    textAlign: "right"
  },
  queueHeader: {
    paddingBottom: 4
  },
  queueValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333333"
  },
  greyText: {
    color: "#07080A"
  },
  lightGreyText: {
    color: "#AAAAAA"
  },
  whiteText: {
    color: "#FFFFFF"
  }
});

const Ticket = ({
  ticketNumber,
  ticketDate,
  ticketTime,
  estimatedWaitTime,
  queuePosition,
  onAccept
}) => (
  <View style={styles.container}>
    <View style={styles.ticketTopContainer}>
      <View style={[styles.flex, styles.ticketSummary]}>
        <Text style={[styles.heading, styles.greyText]}>Ticket N&deg;</Text>
        <Text style={[styles.subHeading, styles.lightGreyText]}>
          {ticketDate}
        </Text>
        <Text style={[styles.subHeading, styles.lightGreyText]}>
          {ticketTime}
        </Text>
      </View>
      <View style={styles.flex}>
        <Text style={[styles.heading, styles.ticketNumber, styles.greyText]}>
          {ticketNumber}
        </Text>
      </View>
    </View>

    <View style={styles.ticketBottomContainer}>
      <View style={styles.queueSummaryContainer}>
        <View>
          <Text
            style={[styles.subHeading, styles.greyText, styles.queueHeader]}
          >
            Queue position
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ paddingRight: 8 }}>
              <Icon name="md-people" color="#000000" size={32} />
            </View>
            <View>
              <Text style={styles.queueValue}>{queuePosition}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={[styles.subHeading, styles.greyText, styles.queueHeader]}
          >
            Estimated time
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ paddingRight: 8 }}>
              <Icon name="md-timer" color="#000000" size={32} />
            </View>
            <View>
              <Text style={styles.queueValue}>
                {estimatedWaitTime} <Text style={{ fontSize: 18 }}>min</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={onAccept}>
        <View style={styles.acceptTicketContainer}>
          <View>
            <Text style={[styles.heading, styles.whiteText]}>
              Take the ticket
            </Text>
            <Text style={[styles.subHeading, styles.whiteText]}>
              Tap to accept
            </Text>
          </View>
          <View style={{ paddingRight: 24 }}>
            <View
              style={{
                height: 48,
                width: 48,
                borderRadius: 48,
                borderWidth: 2,
                borderColor: "#FFFFFF",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Icon name="md-arrow-round-down" color="#FFFFFF" size={32} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  </View>
);

export default Ticket;
