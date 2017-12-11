import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, Animated, Image } from 'react-native';
import { Button, FormLabel, FormInput, Text } from 'react-native-elements';

export default class SplashPage extends Component {

  constructor() {
    super();
    this.springValue = new Animated.Value(0.5);
  }

  spring() {
    this.springValue.setValue(0.5);
    Animated.spring(
    this.springValue,
      {
        toValue: 1,
        friction: 1,
        tension: 1
      }
    ).start();
  }

  render() {
    const { navigate } = this.props.navigation;

      return (
          <ImageBackground style={ styles.container } source={ require('../wave.jpg' )}>
            <Text h1 style={styles.welcome} onPress={ this.spring.bind(this) }>
              HelloH20
            </Text>
            <Animated.Image
              style={{ width: 150, height: 200, transform: [{scale: this.springValue}], marginTop: -100}}
              source={ require('../water-logo.png') }/>

            <View style={ styles.buttonGroup }>
              <Button
                large
                style={ styles.button }
                color='black'
                backgroundColor='teal'
                raised
                icon={{ name: 'human-greeting', type: 'material-community' }}
                title="Profile"
                onPress={() =>
                  navigate('Profile', { name: 'Sarah' })
                }
              />

              <Button
                large
                color='black'
                backgroundColor='olive'
                raised
                icon={{ name: 'home-map-marker', type: 'material-community' }}
                title='Current Location'
                onPress={() =>
                  navigate('WebMap', { location: 'Boulder, CO' })
                }
              />
            </View>
          </ImageBackground>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: undefined,
      height: undefined,
      backgroundColor:'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcome: {
      fontSize: 70,
      marginTop: 30,
      marginBottom: 100,
      color: 'black',
    },
    button: {
      marginBottom: 30,
    },
    buttonGroup: {
      marginBottom: 50,
      padding: 25,
    },
    waterLogo: {
      height: 50,
      width: 50,
    }
  });
