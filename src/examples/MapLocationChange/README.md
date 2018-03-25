# Map Location Change From Scroll

* Needs better name...

## Attribution

* Design from: AirBnB map view which changes location when a different property is selected in the scroller

* Images from:
  * http://www.chicroomproperties.com
  * https://www.designingbuildings.co.uk

## Dependencies

### External

* [react-native-maps](https://github.com/react-community/react-native-maps). This is currently pointing at the git repo. See [https://github.com/react-community/react-native-maps/issues/2051#issuecomment-371530715](https://github.com/react-community/react-native-maps/issues/2051#issuecomment-371530715) for the reason.

## How it works

* The first thing to do is mock up the basic AirBnB map view screen.

* Render the custom map markers

* Add a onMomentumScrollEnd callback prop and set the selectedProperty state. We calculate this by dividing the x position from the event by the CARD_WIDTH.

* We also need to get a reference of the `ScrollView` via the `ref` prop.

* We then implement `componentDidUpdate` to pick up this state change. If we have a ref to the `ScrollView` and the `selectedProperty` has change invoke the `scrollTo` method on the reference with the new `x` position.

* Now that we have the `selectedProperty` we can add conditional checks to the `MapMarker` `View` and `Text` to change the backgroundColor/color if it is the selected property.

* Finally, we can conditionally render a green bar to sit on the top of the `ScrollView` item if it is the selected property.
