import * as React from "react";
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Text style={{ fontWeight: "bold", color: "#4f4a4a", fontSize: 20 }}>
          AptHunterv0.0.3
        </Text>
      </View>
    </View>
  );
}
