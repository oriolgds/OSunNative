import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, Text, View} from 'react-native';
import { RoundedContainer } from './bigNumber';



const image = require('./assets/cloudy.jpg');



const App = () => (
  <View style={styles.all}>
    <StatusBar backgroundColor='#fff'></StatusBar>
    <ImageBackground source={image} resizeMode="cover" style={styles.backgroundImage}>
    <ScrollView style={{marginTop: 30}}>
      <RoundedContainer>
        <Text style={{fontSize: 200, textAlign: 'center'}}>21º</Text>
      </RoundedContainer>

      <RoundedContainer>
        <Text style={{fontSize: 200, textAlign: 'center'}}>21°</Text>
      
      </RoundedContainer>
    </ScrollView>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  all: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default App;