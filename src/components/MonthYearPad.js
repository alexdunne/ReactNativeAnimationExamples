import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  inputContainer: {
    flex: 1
  },
  group: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24
  },
  title: {
    fontSize: 14,
    color: "#777777",
    marginBottom: 16
  },
  button: {
    fontSize: 22,
    color: "#FFFFFF"
  }
});

const monthGroups = [
  [
    { label: "01", value: "01" },
    { label: "02", value: "02" },
    { label: "03", value: "03" }
  ],
  [
    { label: "04", value: "04" },
    { label: "05", value: "05" },
    { label: "06", value: "06" }
  ],
  [
    { label: "07", value: "07" },
    { label: "08", value: "08" },
    { label: "09", value: "09" }
  ],
  [
    { label: "10", value: "10" },
    { label: "11", value: "11" },
    { label: "12", value: "12" }
  ]
];

const yearGroups = [
  [{ label: "2018", value: "18" }, { label: "2019", value: "19" }],
  [{ label: "2020", value: "20" }, { label: "2021", value: "21" }],
  [{ label: "2022", value: "22" }, { label: "2023", value: "23" }],
  [{ label: "2024", value: "24" }, { label: "2025", value: "25" }]
];

const InputGroup = ({ title, groups, onPress, isLast = false }) => (
  <View style={[styles.inputContainer, !isLast && { marginRight: 64 }]}>
    <Text style={styles.title}>{title.toUpperCase()}</Text>
    <View>
      {groups.map((group, index) => (
        <View key={index} style={styles.group}>
          {group.map(({ label, value }, index) => (
            <TouchableHighlight
              key={index}
              onPress={() => onPress(value)}
              underlayColor={this.props.highlightColour}
            >
              <Text style={styles.button}>{label}</Text>
            </TouchableHighlight>
          ))}
        </View>
      ))}
    </View>
  </View>
);

class MonthYearPad extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <InputGroup
          title="Month"
          groups={monthGroups}
          onPress={this.props.onMonthPress}
        />
        <InputGroup
          title="Year"
          groups={yearGroups}
          onPress={this.props.onYearPress}
          isLast
        />
      </View>
    );
  }
}

MonthYearPad.propTypes = {
  highlightColour: PropTypes.string.isRequired,
  onMonthPress: PropTypes.func.isRequired,
  onYearPress: PropTypes.func.isRequired
};

export default MonthYearPad;
