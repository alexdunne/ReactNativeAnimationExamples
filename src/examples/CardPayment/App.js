import React, { Component } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { IndicatorViewPager, PagerDotIndicator } from "rn-viewpager";

import Card from "./Card";
import PaymentButton from "./PaymentButton";
import NumberPad from "../../components/NumberPad";
import MonthYearPad from "../../components/MonthYearPad";

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: "#EC5E95",
    justifyContent: "space-between"
  },
  cardContainer: {
    height: 225,
    marginBottom: 64,
    paddingHorizontal: 32
  },
  pagerContainer: {
    flex: 4
  },
  keyboardContainer: {
    paddingHorizontal: 32
  },
  paymentContainer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%"
  }
});

export default class App extends Component {
  state = {
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: ""
  };

  constructor(props) {
    super(props);

    this.paymentAnimation = new Animated.Value(0);
  }

  componentDidUpdate() {
    const { cardNumber, expiryMonth, expiryYear, cvc } = this.state;

    if (cvc.length === 3) {
      this.viewPagerRef.setPage(3);
      return;
    }

    if (expiryMonth.length !== 0 && expiryYear.length !== 0) {
      this.viewPagerRef.setPage(2);
      return;
    }

    if (cardNumber.length === 16) {
      this.viewPagerRef.setPage(1);
    }
  }

  handlerCardNumberPress = val => {
    const { cardNumber } = this.state;

    if (cardNumber.length <= 16) {
      this.setState({ cardNumber: cardNumber + val });
    }
  };

  handleMonthPress = val => {
    this.setState({ expiryMonth: val });
  };

  handleYearPress = val => {
    this.setState({ expiryYear: val });
  };

  handleCVCPress = val => {
    const { cvc } = this.state;

    if (cvc.length <= 3) {
      this.setState({ cvc: cvc + val });
    }
  };

  render() {
    const { cardNumber, expiryMonth, expiryYear, cvc } = this.state;

    const paymentButtonStyles = {
      transform: [
        {
          translateY: this.paymentAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [60, 0],
            extrapolate: "clamp"
          })
        }
      ]
    };

    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Card
            cardNumber={cardNumber}
            expiryMonth={expiryMonth}
            expiryYear={expiryYear}
            cvc={cvc}
          />
        </View>
        <View style={styles.pagerContainer}>
          <IndicatorViewPager
            ref={ref => (this.viewPagerRef = ref)}
            style={styles.flex}
            indicator={<PagerDotIndicator pageCount={3} />}
            horizontalScroll={false}
            onPageScroll={({ position }) => {
              Animated.timing(this.paymentAnimation, {
                duration: 300,
                toValue: Number(position === 3),
                useNativeDriver: true
              }).start();
            }}
          >
            <View style={styles.keyboardContainer}>
              <NumberPad onPress={this.handlerCardNumberPress} />
            </View>

            <View style={styles.keyboardContainer}>
              <MonthYearPad
                onMonthPress={this.handleMonthPress}
                onYearPress={this.handleYearPress}
              />
            </View>

            <View style={styles.keyboardContainer}>
              <NumberPad onPress={this.handleCVCPress} />
            </View>

            {/* Placeholder so we can move up the payment button into an empty space */}
            <View />
          </IndicatorViewPager>

          <Animated.View style={[styles.paymentContainer, paymentButtonStyles]}>
            <PaymentButton />
          </Animated.View>
        </View>
      </View>
    );
  }
}
