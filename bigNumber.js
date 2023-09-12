import { StyleSheet, Dimensions, View } from "react-native";
import React from 'react';
export function marginToMaxWidth(width = 330){
    return Dimensions.get('window').width < width ? 0 : Dimensions.get('window').width - width
}
const roundedContainerStyles = StyleSheet.create({
  normal: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#eeed",
    height: "auto",
    width: "auto",
    borderRadius: 30,
    margin: 10,
    marginHorizontal: marginToMaxWidth(360),
    textAlign: "center",
    padding: 10,
  },
});
export class RoundedContainer extends React.Component {
  render() {
    return (
      <View style={{...roundedContainerStyles.normal, ...this.props.style}}>{this.props.children}</View>
    );
  }
}
