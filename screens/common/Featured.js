import React from "react";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Ionicons";

export default class Featured extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          marginTop: 30,
          backgroundColor: "#FFF",
          height: 250,
          width: 200,
          elevation: 2,
          borderRadius: 10,
          padding: 15,
          marginRight: 30,
          marginLeft: 2,
          marginBottom: 5,
        }}
      >
        <Image
          source={this.props.src}
          style={{
            width: 170,
            height: 110,
            borderRadius: 10,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "#4f4a4a",
              fontSize: 12,
            }}
          >
            {this.props.name}
          </Text>
          <View
            style={{
              height: 4,
              width: 4,
              borderRadius: 4,
              backgroundColor: "red",
              marginHorizontal: 4,
            }}
          ></View>
          <Text
            style={{
              color: "red",
              fontSize: 9,
              fontWeight: "bold",
            }}
          >
            New
          </Text>
        </View>
        <Text
          style={{
            fontSize: 9,
            color: "#4f4a4a",
            fontFamily: "Regular",
          }}
        >
          Studios - 3 Bedrooms Available
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Icon name="ios-water" size={18} color="steelblue" />
          <Icon name="ios-wifi" size={18} color="steelblue" />
          <Icon name="ios-videocam" size={18} color="steelblue" />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 5,
            alignItems: "center",
            width: "100%",
          }}
        >
          <View
            style={{
              width: "80%",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              $2,170+/mo
            </Text>
          </View>
          <View
            style={{
              width: "20%",
            }}
          >
            <Image
              source={require("../images/add.png")}
              style={{
                alignSelf: "flex-end",
                width: 25,
                height: 25,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
