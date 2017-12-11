import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, WebView, Image, Animated } from 'react-native';

import { Header, Text, Icon, Button, FormLabel, FormInput, Avatar, SocialIcon, Card, ListItem } from 'react-native-elements';


export default class WebMap extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          leftComponent={{ icon: 'water-pump', type: 'material-community', color: '#fff' }}
          centerComponent={{ text: 'Map', style: { color: '#fff'} }}
          outerContainerStyles={{ backgroundColor: 'black' }}
          innerContainerStyles={{ justifyContent: 'space-around',}}
        />

        <WebView
          automaticallyAdjustContentInsets={false}
          source={{ uri: 'http://127.0.0.1:8080' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  profileWrap: {
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection:'row',
  },
  welcome : {
    color: 'white',
  },
  header: {
    position: 'absolute',
    marginTop: 0,
  },
});
