import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, Text, View} from 'react-native';


const image = require('./assets/cloudy.jpg');

const roundedContainerStyles = StyleSheet.create({
  normal: {
    flex: 1,
    alignContent: 'start',
    backgroundColor: '#fffa',
    height: 'auto',
    width: 'auto',
    borderRadius: 30,
    margin: 10,
  
  }
});
const RoundedContainer = ()=>{
  return (
    <View style={roundedContainerStyles.normal}>
      <Text style={{fontSize: 200, textAlign: 'center'}}>21º</Text>
    </View>
  )
}

const App = () => (
  <View style={styles.all}>
    <ImageBackground source={image} resizeMode="cover" style={styles.backgroundImage}>
    <ScrollView style={{marginTop: 30}}>
    <RoundedContainer/>
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