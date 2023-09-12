import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';



const image = require('./assets/cloudy.jpg');

function marginToMaxWidth(width = 330){
  return Dimensions.get('window').width < width ? 0 : Dimensions.get('window').width - width
}

const roundedContainerStyles = StyleSheet.create({
  normal: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffa',
    height: 'auto',
    width: 'auto',
    borderRadius: 30,
    margin: 10,
    marginHorizontal: marginToMaxWidth(360),
    textAlign: 'center',
  }
});
class RoundedContainer extends React.Component{
  render(){
    return (
      <View style={roundedContainerStyles.normal}>
          {this.props.children}
      </View>
    )
  }
}

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