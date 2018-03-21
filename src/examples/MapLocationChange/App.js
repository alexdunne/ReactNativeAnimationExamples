import React, { Component } from "react";
import {
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
  View,
  Image,
  Text,
  Platform
} from "react-native";
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

const MAP_HEIGHT = height * 0.75;
const CARD_HEIGHT = height - MAP_HEIGHT - 20;
const CARD_WIDTH = 250;
const ACCENT_COLOUR = "#008489";

export default class App extends Component {
  state = {
    properties: [
      {
        id: 1,
        title: "Lovely flat in central London",
        type: "Entire home",
        bedCount: 1,
        price: "£107",
        rating: 5,
        reviewsCount: 75,
        imageUrl:
          "http://www.chicroomproperties.com/thumb/property-gallery/items/166/furnished-studio-flat-for-rent-mid-term-in-barcelona-gothic-2.jpg",
        coords: {
          latitude: 51.5131,
          longitude: -0.1221
        }
      },
      {
        id: 1,
        title: "Room with a view in Leicester Square",
        type: "Private room",
        bedCount: 1,
        price: "£144",
        rating: 4,
        reviewsCount: 139,
        imageUrl:
          "https://www.designingbuildings.co.uk/w/images/a/a8/xStudioflat.jpg.pagespeed.ic.xN613dZkvW.jpg",
        coords: {
          latitude: 51.5073,
          longitude: -0.1657
        }
      }
    ]
  };

  render() {
    const { properties } = this.state;

    return (
      // The marginTop here is used to move the map above where the navigation would be
      <View style={{ flex: 1, marginTop: -60 }}>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: 51.5,
            longitude: -0.15,
            latitudeDelta: 0.15,
            longitudeDelta: 0.01
          }}
          loadingEnabled
          showsUserLocation
        >
          {properties.map(property => (
            <MapView.Marker key={property.id} coordinate={property.coords}>
              <View
                style={{
                  backgroundColor: "#FFFFFF",
                  height: 30,
                  width: 45,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text>{property.price}</Text>
              </View>
            </MapView.Marker>
          ))}
        </MapView>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            paddingTop: 20,
            paddingBottom: 50,
            backgroundColor: "#FFFFFF"
          }}
          contentContainerStyle={{
            paddingRight: 40,
            paddingLeft: 20
          }}
        >
          {properties.map((property, index) => (
            <View
              key={property.id}
              style={{ width: CARD_WIDTH, marginHorizontal: 5 }}
            >
              <Image
                style={{
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT
                }}
                source={{ uri: property.imageUrl }}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: 4
                }}
              >
                <Text
                  style={{
                    fontSize: 9,
                    fontWeight: "bold"
                  }}
                >
                  {property.type.toUpperCase()}
                </Text>

                <View
                  style={{
                    backgroundColor: "#555555",
                    height: 2,
                    width: 2,
                    borderRadius: 2,
                    marginHorizontal: 4
                  }}
                />

                <Text style={{ fontSize: 9, fontWeight: "bold" }}>
                  {property.bedCount} {property.bedCount === 1 ? "BED" : "BED"}
                </Text>
              </View>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", marginBottom: 4 }}
              >
                {property.title}
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "100" }}>
                {property.price} per night
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: 4
                }}
              >
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <Icon
                      key={index}
                      color={ACCENT_COLOUR}
                      name={
                        index < property.rating
                          ? Platform.OS === "ios" ? "ios-star" : "md-star"
                          : Platform.OS === "ios"
                            ? "ios-star-outline"
                            : "md-star-outline"
                      }
                      size={14}
                    />
                  ))}
                <Text style={{ fontSize: 12, marginLeft: 4 }}>
                  {property.reviewsCount}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
