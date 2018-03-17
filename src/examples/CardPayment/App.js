import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { IndicatorViewPager, PagerDotIndicator } from "rn-viewpager";

import Card from "./Card";
import NumberPad from "../../components/NumberPad";
import MonthYearPad from "../../components/MonthYearPad";

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 32,
    backgroundColor: "#EC5E95",
    justifyContent: "space-between"
  },
  cardContainer: {
    flex: 3,
    marginBottom: 64
  },
  keyboardContainer: {
    flex: 4
  }
});

export default class App extends Component {
  state = {
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: ""
  };

  componentDidUpdate() {
    if (
      this.state.expiryMonth.length !== 0 &&
      this.state.expiryYear.length !== 0
    ) {
      this.viewPagerRef.setPage(2);
      return;
    }

    if (this.state.cardNumber.length === 16) {
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
    this.setState({ expiryYear: vall });
  };

  handleCVCPress = val => {
    const { cvc } = this.state;

    if (cvc.length <= 3) {
      this.setState({ cvc: cvc + val });
    }
  };

  render() {
    const { cardNumber, expiryMonth, expiryYear, cvc } = this.state;

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
        <View style={styles.keyboardContainer}>
          <IndicatorViewPager
            ref={ref => (this.viewPagerRef = ref)}
            style={styles.flex}
            indicator={<PagerDotIndicator pageCount={3} />}
            horizontalScroll={false}
          >
            <View>
              <NumberKeyboard onPress={this.handlerCardNumberPress} />
            </View>

            <View>
              <ExpiryDateKeyboard
                onMonthPress={this.handleMonthPress}
                onYearPress={this.handleYearPress}
              />
            </View>

            <View>
              <NumberKeyboard onPress={this.handleCVCPress} />
            </View>
          </IndicatorViewPager>
        </View>
      </View>
    );
  }
}
