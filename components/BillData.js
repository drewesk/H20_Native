import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Text } from 'react-native-elements';

export default class BillData extends Component {
  render() {
    return (
      <ImageBackground>
        <View>
          <Text>Hello</Text>
        </View>
      </ImageBackground>
    );
  }
}

const style = StyleSheet.create({
  container: {
  }
})
