import React from "react";
import { Text, ImageBackground } from "react-native";

export default class MainImgHeader extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../images/lr.png")}
        style={{
          height: 200,
          width: 370,
          marginRight: 20,
          borderRadius: 50,
          marginBottom: 15,
          opacity: 0.7,
          backgroundColor: "#000",
          marginLeft: 4,
          padding: 12,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "black",
            fontSize: 15,
          }}
        >
          10/05/2020
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "black",
            fontSize: 12,
          }}
        >
          Virtual 3D Tour
        </Text>
      </ImageBackground>
    );
  }
}
