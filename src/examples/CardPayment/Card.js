import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Animated,
  Image
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 32,
    backgroundColor: "#FFFFFF",
    borderRadius: 15
  },
  logoContainer: {
    flex: 2
  },
  detailsContainer: {
    flex: 8
  },
  detailRow: {
    marginBottom: 16
  },
  label: {
    fontSize: 14,
    letterSpacing: 2,
    color: "#DADADA",
    marginBottom: 4
  },
  labelActive: {
    color: "#999999"
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  inputChunk: {
    flexDirection: "row"
  },
  inputCharacter: {
    color: "#555555",
    fontSize: 18
  },
  inputCharacterPlaceholder: {
    color: "#DADADA"
  }
});

const splitString = (string, size) => {
  return string.match(new RegExp(".{1," + size + "}", "g"));
};

class Card extends Component {
  constructor(props) {
    super(props);

    this.animation = new Animated.Value(0);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.expiryYear && this.props.expiryYear) {
      Animated.timing(this.animation, {
        toValue: 1,
        duration: 500
      }).start();
    }

    if (this.props.cvc.length === 3) {
      Animated.timing(this.animation, {
        toValue: 0,
        duration: 500
      }).start();
    }
  }

  render() {
    const { cardNumber, expiryMonth, expiryYear, cvc } = this.props;

    const rotateAnimation = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 180],
      extrapolate: "clamp"
    });

    const rotateDegAnimation = rotateAnimation.interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"]
    });

    const frontOpacity = rotateAnimation.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0]
    });

    const backOpacity = rotateAnimation.interpolate({
      inputRange: [89, 90],
      outputRange: [0, 1]
    });

    const rotateYStyle = {
      transform: [
        {
          rotateY: rotateDegAnimation
        }
      ]
    };

    const cardNumberChunks = splitString(
      Array(16)
        .fill("X")
        .map((char, index) => (cardNumber[index] ? cardNumber[index] : char))
        .join(""),
      4
    );

    return (
      <Animated.View style={[styles.container, rotateYStyle]}>
        <Animated.View
          style={{
            flex: 1,
            opacity: frontOpacity
          }}
        >
          <View style={styles.logoContainer} />
          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <Text style={[styles.label, styles.labelActive]}>
                CARD NUMBER
              </Text>

              <View style={styles.inputRow}>
                {cardNumberChunks.map((chunk, index) => (
                  <View key={index} style={styles.inputChunk}>
                    {chunk.split("").map((number, index) => (
                      <Text
                        key={index}
                        style={[
                          styles.inputCharacter,
                          isNaN(number) && styles.inputCharacterPlaceholder
                        ]}
                      >
                        {number}
                      </Text>
                    ))}
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.label}>EXP DATE</Text>
              <View style={styles.inputChunk}>
                <Text
                  style={[
                    styles.inputCharacter,
                    !expiryMonth && styles.inputCharacterPlaceholder
                  ]}
                >
                  {expiryMonth ? expiryMonth : "XX"}/
                </Text>
                <Text
                  style={[
                    styles.inputCharacter,
                    !expiryYear && styles.inputCharacterPlaceholder
                  ]}
                >
                  {expiryYear ? expiryYear : "XX"}
                </Text>
              </View>
            </View>
          </View>
        </Animated.View>

        <Animated.View
          style={{
            flex: 1,
            transform: [{ rotateY: "180deg" }],
            opacity: backOpacity,
            position: "absolute",
            top: 50,
            left: 0,
            right: 0
          }}
        >
          <View
            style={{
              backgroundColor: "#000000",
              height: 50
            }}
          />

          <View
            style={{
              marginTop: 50,
              flexDirection: "row",
              paddingHorizontal: 16
            }}
          >
            <Image
              source={{
                uri:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Helmut_Schmidt_Signature.svg/615px-Helmut_Schmidt_Signature.svg.png"
              }}
              style={{ width: 150, height: 50, marginRight: 48 }}
            />

            <View>
              <Text style={styles.label}>CVC</Text>
              <View style={styles.inputChunk}>
                <Text
                  style={[
                    styles.inputCharacter,
                    !cvc && styles.inputCharacterPlaceholder
                  ]}
                >
                  {cvc}
                </Text>
              </View>
            </View>
          </View>
        </Animated.View>
      </Animated.View>
    );
  }
}

export default Card;
