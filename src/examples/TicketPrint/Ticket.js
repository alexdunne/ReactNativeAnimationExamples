import React from "react";
import {
  Animated,
  Dimensions,
  PanResponder,
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
  },
  notchContainer: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center"
  },
  notch: {
    height: 80,
    width: 80,
    borderRadius: 80
  },
  ticketNotchContainer: {
    bottom: -60
  },
  ticketNotch: {
    backgroundColor: "#00B9F1"
  }
});

class Ticket extends React.Component {
  constructor(props) {
    super(props);

    this.ticketAcceptedAnimation = new Animated.Value(0);
    this.ticketHidingAnimation = new Animated.Value(0);

    this.ticketDragPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gesture) => {
        if (!this.state.ticketTaken) {
          this.setState({ ticketTaken: true, ticketTimeRemaining: 5 }, () => {
            this.startTicketHidingCountdown();

            Animated.timing(this.ticketAcceptedAnimation, {
              toValue: 1,
              duration: 500,
              useNativeDriver: true
            }).start(() => {
              Animated.timing(this.ticketHidingAnimation, {
                toValue: 1,
                duration: 1000,
                delay: 4500,
                useNativeDriver: true
              }).start(() => {
                this.props.onTicketTaken();
              });
            });
          });
        }
      }
    });

    this.state = {
      ticketTaken: false,
      ticketTimeRemaining: 0
    };
  }

  startTicketHidingCountdown = () => {
    setTimeout(() => {
      const remainingTime = this.state.ticketTimeRemaining - 1;

      this.setState({
        ticketTimeRemaining: remainingTime,
        ticketTaken: remainingTime > 0
      });

      if (remainingTime > 0) {
        this.startTicketHidingCountdown();
      }
    }, 1000);
  };

  render() {
    const { ticketTaken, ticketTimeRemaining } = this.state;
    const {
      ticketNumber,
      ticketDate,
      ticketTime,
      estimatedWaitTime,
      queuePosition
    } = this.props;

    const ticketStyles = {
      transform: [
        {
          translateY: this.ticketAcceptedAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 100]
          })
        },
        {
          scale: this.ticketHidingAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0]
          })
        }
      ],
      opacity: this.ticketHidingAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0]
      })
    };

    return (
      <View style={{ height: 800 }}>
        <Animated.View style={[styles.container, ticketStyles]}>
          <Animated.View style={[styles.ticketTopContainer]}>
            <View style={[styles.flex, styles.ticketSummary]}>
              <Text style={[styles.heading, styles.greyText]}>
                Ticket N&deg;
              </Text>
              <Text style={[styles.subHeading, styles.lightGreyText]}>
                {ticketDate}
              </Text>
              <Text style={[styles.subHeading, styles.lightGreyText]}>
                {ticketTime}
              </Text>
            </View>
            <View style={styles.flex}>
              <Text
                style={[styles.heading, styles.ticketNumber, styles.greyText]}
              >
                {ticketNumber}
              </Text>
            </View>
          </Animated.View>

          <View style={styles.ticketBottomContainer}>
            <View style={styles.queueSummaryContainer}>
              <View>
                <Text
                  style={[
                    styles.subHeading,
                    styles.greyText,
                    styles.queueHeader
                  ]}
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
                  style={[
                    styles.subHeading,
                    styles.greyText,
                    styles.queueHeader
                  ]}
                >
                  Estimated time
                </Text>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={{ paddingRight: 8 }}>
                    <Icon name="md-timer" color="#000000" size={32} />
                  </View>
                  <View>
                    <Text style={styles.queueValue}>
                      {estimatedWaitTime}{" "}
                      <Text style={{ fontSize: 18 }}>min</Text>
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              {...this.ticketDragPanResponder.panHandlers}
              style={styles.acceptTicketContainer}
            >
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
                  {ticketTimeRemaining ? (
                    <Text style={[styles.heading, styles.whiteText]}>
                      {ticketTimeRemaining}
                    </Text>
                  ) : (
                    <Icon
                      name="md-arrow-round-down"
                      color="#FFFFFF"
                      size={32}
                    />
                  )}
                </View>
              </View>
            </View>
          </View>

          <View style={[styles.notchContainer, styles.ticketNotchContainer]}>
            <View style={[styles.notch, styles.ticketNotch]} />
          </View>
        </Animated.View>
      </View>
    );
  }
}

export default Ticket;
