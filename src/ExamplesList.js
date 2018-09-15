import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Card, Icon } from "react-native-elements";
import PropTypes from "prop-types";

const examples = [
  {
    title: "Card payment",
    icon: {
      name: "credit-card",
      color: "#FF8A65"
    },
    screen: "CardPayment"
  },
  {
    title: "Map location change",
    icon: {
      name: "map",
      color: "#4FC3F7"
    },
    screen: "MapLocationChange"
  },
  {
    title: "Ticket print",
    icon: {
      name: "print",
      color: "#81C784"
    },
    screen: "TicketPrint"
  }
];

const ExamplesList = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: "#2e3e4e" }}>
    <FlatList
      data={examples}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <Card>
          <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <View style={{ marginRight: 10 }}>
                <Icon name={item.icon.name} color={item.icon.color} size={32} />
              </View>
              <View>
                <Text style={{ fontSize: 16 }}>{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Card>
      )}
    />
  </View>
);

ExamplesList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default ExamplesList;
