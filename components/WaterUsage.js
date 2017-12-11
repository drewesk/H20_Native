import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import { StockLine } from 'react-native-pathjs-charts';
import { Header, Rating, Button, ButtonGroup, Card } from 'react-native-elements';

import Current from './charts/Current';
import Weekly from './charts/Weekly';
import Monthly from './charts/Monthly';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
});

export default class WaterUsage extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  render() {
    const component1 = () => <Text>Current</Text>
    const component2 = () => <Text>Weekly</Text>
    const component3 = () => <Text>Monthly</Text>

    const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }];
    const { selectedIndex } = this.state;



    return (
      <View >
        <Header
          style={styles.container}
          statusBarProps={{ barStyle: 'light-content' }}
          leftComponent={{ icon: 'water-pump', type: 'material-community', color: '#fff' }}
          centerComponent={{ text: 'Consumption', style: { color: '#fff'} }}
          outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
          innerContainerStyles={{ justifyContent: 'space-around',}}
        />

        <Rating
          type='custom'
          ratingImage={require('../water-logo.png')}
          ratingColor='#3498db'
          ratingBackgroundColor='#c8c7c8'
          startingValue={8}
          imageSize={40}
        />

        <ButtonGroup
        onPress={ this.updateIndex }
        selectedIndex={selectedIndex}
        buttons={buttons} />

        <ScrollView>

          <Card>
            <Monthly/>
          </Card>

          <Card>
            <Weekly/>
          </Card>

          <Card>
            <Current/>
          </Card>

        </ScrollView>

      </View>
    )
  }
}
