import React from "react";
import { Linking, Platform, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

const HeaderLink = ({ color, url }) => (
  <View style={{ marginRight: 16 }}>
    <Icon
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
      color={color}
      size={24}
      onPress={() => {
        Linking.canOpenURL(url)
          .then(supported => {
            if (!supported) {
              console.log("Can't handle url: " + url);
            } else {
              return Linking.openURL(url);
            }
          })
          .catch(err => console.error("An error occurred", err));
      }}
    />
  </View>
);

HeaderLink.propTypes = {
  color: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default HeaderLink;
