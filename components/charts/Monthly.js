import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { StockLine } from 'react-native-pathjs-charts'


export default class Monthly extends Component {
  render() {
    let data = [[{
        "x": 0,
        "y": 80000
      }, {
        "x": 1,
        "y": 60000
      }, {
        "x": 2,
        "y": 58000
      }, {
        "x": 3,
        "y": 40000
      }, {
        "x": 4,
        "y": 30000
      }]];

    let options = {
      width: 250,
      height: 250,
      color: '#2980B9',
      margin: {
        top: 10,
        left: 35,
        bottom: 30,
        right: 10
      },
      animate: {
        type: 'delayed',
        duration: 200
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        tickValues: [
          {value:'Jan'},
          {value:'Feb'},
          {value:'March'},
          {value:'April'}
        ],
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        tickValues: [],
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }

    return (
      <View>
        <StockLine data={data} options={options} xKey='x' yKey='y' height={250} width={250}/>
      </View>
    )
  }
}
