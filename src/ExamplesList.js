import React from "react";
import { View } from "react-native";
import { List, ListItem } from "react-native-elements";
import PropTypes from "prop-types";

const ExamplesList = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <List style={{ flex: 1 }}>
      <ListItem
        title="Card Payment"
        onPress={() => navigation.navigate("CardPayment")}
      />
      <ListItem
        title="Map Location Change"
        onPress={() => navigation.navigate("MapLocationChange")}
      />
      <ListItem
        title="Ticket Print"
        onPress={() => navigation.navigate("TicketPrint")}
      />
    </List>
  </View>
);

ExamplesList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default ExamplesList;
