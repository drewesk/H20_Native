import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, FormLabel, FormInput, Text } from 'react-native-elements';

export default class SplashPage extends Component {
  render() {
    const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <Image
            style={styles.backgroundImage}
            source={require('../wave.jpg')}
          />
          <Text h1 style={styles.welcome}>
            HelloH20
          </Text>

          <View style={ styles.buttonGroup }>
            <Button
              style={ styles.button }
              color='black'
              backgroundColor='teal'
              raised
              icon={{name: 'face'}}
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

            <Text  h3>or Enter ZIP</Text>
            <FormInput backgroundColor='black' textAlign='center' />
        </View>
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
    backgroundImage: {
      position: 'absolute',
    },
    welcome: {
      marginTop: -100,
      marginBottom: 100,
      color: 'black',
      backgroundColor: 'rebeccapurple',
    },
    button: {
      marginBottom: 30,
    },
    buttonGroup: {
      marginBottom: 50,
      padding: 25,
    }
  });
