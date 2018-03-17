import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonLabel: {
    flex: 1,
    fontSize: 28,
    marginTop: 20,
    color: "#FFFFFF"
  }
});

const inputs = [
  [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 }
  ],
  [
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 }
  ],
  [
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 }
  ],
  [
    { label: "", value: null },
    { label: "0", value: 0 },
    { label: "", value: null }
  ]
];

const Button = ({ label, value, onPress }) => (
  <TouchableHighlight
    style={styles.button}
    onPress={() => onPress(value)}
    underlayColor="#f47aa9"
  >
    <Text style={styles.buttonLabel}>{label}</Text>
  </TouchableHighlight>
);

const Row = ({ buttons, onPress }) => (
  <View style={styles.row}>
    {buttons.map((button, index) => (
      <Button
        key={index}
        label={button.label}
        value={button.value}
        onPress={onPress}
      />
    ))}
  </View>
);

class NumberPad extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        {inputs.map((buttons, index) => (
          <Row key={index} buttons={buttons} onPress={this.props.onPress} />
        ))}
      </View>
    );
  }
}

export default NumberPad;
