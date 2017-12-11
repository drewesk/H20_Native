import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Pie } from 'react-native-pathjs-charts';

export default class Weekly extends Component {
render() {
    let data = [{
      "name": "Total",
      "amount": 28
    }, {
      "name": "Daily Avg",
      "amount": 4
    }]

    let options = {
      margin: {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20
      },
      width: 350,
      height: 350,
      color: '#2980B9',
      r: 50,
      R: 150,
      legendPosition: 'topLeft',
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        color: '#ECF0F1'
      }
    }

    return (
      <View>
        <Pie
          data={ data }
          options={ options }
          accessorKey="amount" height={300} width={300} />
      </View>
    )
  }
}
