import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { RoundedContainer } from "./bigNumber";
import { apiURL } from "./apiURL";
// Metheo values
export let jsonData = {};
const CurrentTemp = () => {
  const [textValue, setTextValue] = useState(jsonData.current_weather.temperature.toString());

  // Function to update the text value
  const updateTextValue = (val) => {
    setTextValue(val);
  };

  return (
    <RoundedContainer style={{ marginTop: 0, marginBottom: 10, paddingVertical: 40 }}>
      <Text
        style={{ fontSize: 130, textAlign: "center" }}
      >
        {textValue}º
      </Text>
    </RoundedContainer>
  );
};
let current_humidity = "90%";
let current_wind_speed = "8km/h";

const image = require("./assets/cloudy.jpg");

const homeCardsData = [
  { id: 1, textBold: "Humedad: ", textN: "\n90%" },
  { id: 2, textBold: "Sensación termica: ", textN: "\n24º" },
  { id: 3, textBold: "Viento: ", textN: "\n8km/h" },
  { id: 4, textBold: "Min/Max: ", textN: "\n16º/30º" },
];
export const homeCardsBuilder = (item) => {
  return (
    <TouchableOpacity
      key={item.id}
      style={{ ...styles.gridItem, marginTop: 5 }}
      activeOpacity={0.6}
    >
      <RoundedContainer
        style={{ paddingHorizontal: 17, margin: 0, width: "100%" }}
      >
        <Text style={{ fontSize: 20 }}>
          <Text style={{ fontWeight: "bold" }}>{item.textBold} </Text>{" "}
          {item.textN}
        </Text>
      </RoundedContainer>
    </TouchableOpacity>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    // Simulate an asynchronous action (e.g., fetching data)
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      jsonData = data;
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      throw new Error(e);
    }
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "#f5e9d9",
        }}
      >
        <Image
          source={require("./assets/iconchop.png")}
          style={{
            width: 250,
            height: 250,
            alignContent: "center",
            justifyContent: "center",
            marginHorizontal: 20,
            alignSelf: "center",
          }}
        />
        <Text
          style={{
            fontSize: 21,
            textAlign: "center",
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          The forecast for devs by devs
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            marginTop: 10,
            marginBottom: 8,
          }}
        >
          With ♥️ from Viladecans
        </Text>
        <ActivityIndicator size="large" color="#ffb379" />
      </View>
    );
  } else {
    // Main page
    return (
      <View style={styles.all}>
        <StatusBar backgroundColor="#fff"></StatusBar>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.backgroundImage}
        >          
          <ScrollView style={{ marginTop: 30 }}>
          <CurrentTemp />
            <View style={{ ...styles.flexContainerRow, paddingHorizontal: 25 }}>
              {homeCardsData.map((item) => homeCardsBuilder(item))}
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  all: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  flexContainerRow: {
    flex: 1,
    gap: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: Dimensions.get("window").width / 2 - 40,
    height: 120,
    borderWidth: 0,
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
