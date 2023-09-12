import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import { RoundedContainer } from "./bigNumber";

const image = require("./assets/cloudy.jpg");

const data = [
  { id: 1, textBold: "Humedad: ", textN: "90%" },
  { id: 2, textBold: "Sensación termica: ", textN: "\n90%" },
  { id: 3, textBold: "Humedad: ", textN: "90%" },
  { id: 4, textBold: "Sensación termica: ", textN: "\n90%" },
];
const itemBuilder = ({ item }) => {
  return (
    <RoundedContainer style={{ margin: 20, paddingLeft: 17 }}>
      <Text style={{ fontSize: 20 }}>
        <Text style={{ fontWeight: "bold" }}>{item.textBold} </Text>{" "}
        {item.textN}
      </Text>
    </RoundedContainer>
  );
};

const App = () => (
  <View style={styles.all}>
    <StatusBar backgroundColor="#fff"></StatusBar>
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <ScrollView style={{ marginTop: 30 }}>
        <RoundedContainer style={{}}>
          <Text style={{ fontSize: 200, textAlign: "center" }}>21º</Text>
        </RoundedContainer>
      </ScrollView>
      <FlatList
        data={data}
        renderItem={itemBuilder}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        style={{ columnGap: 100, rowGap: 20, gap: 10, flex: 1 }}
      />
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  all: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default App;
