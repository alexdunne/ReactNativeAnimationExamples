import React from "react";
import { Animated, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    overflow: "hidden"
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
    paddingHorizontal: 16,
    backgroundColor: "transparent",
    overflow: "hidden"
  }
});

class Printer extends React.Component {
  constructor(props) {
    super(props);

    this.ticketHeight = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.ticketHeight, {
      toValue: this.props.ticketHeight,
      duration: 2500,
      useNativeDriver: true
    }).start();
  }

  render() {
    const ticketStyles = {
      transform: [
        {
          translateY: this.ticketHeight.interpolate({
            inputRange: [0, this.props.ticketHeight],
            outputRange: [this.props.ticketHeight * -1 - 12, 0],
            extrapolate: "clamp"
          })
        }
      ]
    };

    return (
      <View style={styles.container}>
        <View style={styles.printer} />
        <View style={{ backgroundColor: "transparent", marginTop: -12 }}>
          <Animated.View style={[ticketStyles, styles.printerOffset]}>
            {this.props.children}
          </Animated.View>
        </View>
      </View>
    );
  }
}

export default Printer;
