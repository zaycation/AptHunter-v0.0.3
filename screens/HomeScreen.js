import * as React from "react";
import { View, ScrollView, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tours from "./common/Tours";

const Stack = createStackNavigator();

function MainCont() {
  return (
    <ScrollView style={styles.headerView}>
      <View>
        <Text style={styles.header}>AptHunterv0.0.3</Text>
        <Text style={styles.subHeader}>
          Stop searching for your next pad on craigslist. Chat with real locals
          for a quality stay with us!
        </Text>
      </View>

      <View>
        <Text
          style={{
            marginTop: 20,
            color: "#4f4a4a",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Recent Tours
        </Text>

        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <Tours />
          <Tours />
          <Tours />
        </ScrollView>
      </View>

      <View>
        <Button title="Login" />
        <Button title="Sign Up" />
      </View>
    </ScrollView>
  );
}

export default function HomeScreen() {
  return (
    <NavigationContainer independent={true} Z>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainCont} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerView: {
    flex: 1,
    margin: "auto",
    padding: 20,
  },
  header: { fontWeight: "bold", color: "#4f4a4a", fontSize: 20 },
  subHeader: { color: "tomato", fontSize: 14 },
});
