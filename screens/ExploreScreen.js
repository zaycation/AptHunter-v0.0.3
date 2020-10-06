import * as React from "react";
import { View, Text, Image } from "react-native";
import { TextInput, ScrollView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "@expo/vector-icons/Ionicons";
import New from "./common/New";
import Hot from "./common/Hot";
import Featured from "./common/Featured";
import styles from "./ExploreStyles";

const Stack = createStackNavigator();

function MainCont() {
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: "#fff",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "50%",
            }}
          >
            <Text
              style={{
                fontWeight: "Bold",
                fontSize: 22,
              }}
            >
              Local Listings
            </Text>
          </View>
          <View
            style={{
              width: "50%",
              alignItems: "flex-end",
            }}
          >
            <Image
              source={require("./images/bag-2.png")}
              style={{ width: 16, height: 20 }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            marginVertical: 30,
          }}
        >
          <View style={styles.searchBar}>
            <Icon name="ios-search" size={22} color="#4f4a4a" />
            <TextInput
              placeholder="Search nearby listings..."
              style={{
                fontWeight: "Medium",
                paddingHorizontal: 10,
                fontSize: 12,
              }}
            />
          </View>

          <View style={styles.filterIcon}>
            <Image
              source={require("./images/sort.png")}
              style={{
                width: 18,
                height: 25,
              }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text style={styles.header1}>Featured</Text>
          <View
            style={{
              width: 5,
              height: 5,
              borderRadius: 5,
              marginHorizontal: 5,
              backgroundColor: "#4f4a4a",
            }}
          ></View>
          <Text style={styles.subHeader}>🌟 All Star Listings</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Featured
            src={{
              uri:
                "https://50jones.com/wp-content/uploads/2020/04/50-Jones-Apartments-San-Francisco_Exterior_Jones-Street-800x600.jpg",
            }}
            name="50 Jones (San Francisco)"
            onPress={() => this.props.navigation.navigate("About")}
          />
          <Featured
            src={{
              uri:
                "https://www.rentnema.com/assets/uploads/transforms/images/san-francisco/Home/1439/0G3A7916_9bac04bcfeef2626e8a17b2d76793985.jpg",
            }}
            name="NEMA (San Francisco"
            onPress={() => this.props.navigation.navigate("About")}
          />
          <Featured
            src={{
              uri:
                "https://images1.apartments.com/i2/5VKOF_oxR4iIva9LBe8IfKHeg63XRpQ4ESel4OiR9Ck/117/the-gantry-san-francisco-ca-primary-photo.jpg",
            }}
            name="The Gantry (San Francisco)"
            onPress={() => this.props.navigation.navigate("About")}
          />
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            marginTop: 5,
            marginBottom: 10,
            alignItems: "center",
          }}
        >
          <Text style={styles.header1}>Newest Listings</Text>
          <View style={styles.bulletPoint}></View>
          <Text style={styles.subHeader}>📍 Within 50 mi.</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <New src={require("./images/sofa.png")} />
          <New src={require("./images/lr.png")} />
          <New src={require("./images/sofa.png")} />
        </ScrollView>

        <Text style={styles.header2}>Hot Now 🔥</Text>

        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <Hot />
          <Hot />
          <Hot />
        </ScrollView>
      </ScrollView>
    </View>
  );
}

export default function ExploreScreen() {
  return (
    <NavigationContainer independent={true} Z>
      <Stack.Navigator>
        <Stack.Screen name="Explore" component={MainCont} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
