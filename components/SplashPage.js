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
          <ImageBackground style={ styles.container } source={require('../wave.jpg')}>
            <Text h1 style={styles.welcome} onPress={ this.spring.bind(this) }>
              HelloH20
            </Text>
            <Animated.Image
              style={{ width: 227, height: 200, transform: [{scale: this.springValue}], marginTop: -100}}
              source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>

            <View style={ styles.buttonGroup }>
              <Button
                style={ styles.button }
                color='black'
                backgroundColor='teal'
                raised
                icon={{ name: 'face' }}
                title="Go to Profile"
                onPress={() =>
                  navigate('Profile', { name: 'Sarah' })
                }
              />

              <Button
                color='black'
                backgroundColor='olive'
                raised
                icon={{name: 'room'}}
                title='Use Current Location'
                onPress={() =>
                  navigate('WebMap', { location: 'Boulder, CO' })
                }
              />
            </View>

            <Text h3>or Enter ZIP</Text>
            <FormInput backgroundColor='black' textAlign='center' />
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
    // backgroundImage: {
    //   position: 'absolute',
    // },
    welcome: {
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
    }
  });
