import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import { RoundedContainer } from "./bigNumber";

const image = require("./assets/cloudy.jpg");

const homeCardsData = [
  { id: 1, textBold: "Humedad: ", textN: "90%" },
  { id: 2, textBold: "Sensación termica: ", textN: "\n90%" },
  { id: 3, textBold: "Humedad: ", textN: "90%" },
  { id: 4, textBold: "Sensación termica: ", textN: "\n90%" },
];
export const homeCardsBuilder = ({ item }) => {
  return (
    <RoundedContainer style={{ margin: 20, paddingLeft: 17 }}>
      <Text style={{ fontSize: 20 }}>
        <Text style={{ fontWeight: "bold" }}>{item.textBold} </Text>{" "}
        {item.textN}
      </Text>
    </RoundedContainer>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous action (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


  if (isLoading) {
    return (
    <View style= {{flex: 1, alignContent: 'center', justifyContent:'center', backgroundColor: '#f5e9d9'}}>
      <Image source={require('./assets/iconchop.png')} style={{width: 250, height: 250, alignContent: 'center', justifyContent:'center', marginHorizontal: 20, alignSelf: 'center'}}/>
      <Text style={{fontSize: 21, textAlign: 'center', fontWeight: 'bold', marginTop: 10}}>The forecast for devs by devs</Text>
      <Text style={{fontSize: 16, textAlign: 'center', marginTop: 10, marginBottom: 8}}>With ♥️ from Viladecans</Text>
      <ActivityIndicator size="large" color="#ffb379" />
    </View>
    );
  } else {
    return (
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
            <FlatList
              data={homeCardsData}
              renderItem={homeCardsBuilder}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              style={{ columnGap: 100, rowGap: 20, gap: 10, flex: 1 }}
            />
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
});

export default App;
