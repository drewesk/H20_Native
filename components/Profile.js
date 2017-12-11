import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, WebView, Image } from 'react-native';
import { Header, Text, Icon, Button, FormLabel, FormInput, Avatar, SocialIcon, Card, ListItem } from 'react-native-elements';


export default class Profile extends Component {

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          leftComponent={{ icon: 'water-pump', type: 'material-community', color: '#fff' }}
          centerComponent={{ text: 'Profile', style: { color: '#fff'} }}
          rightComponent={{ icon: 'share-apple', type: 'evilicon' }}
          outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
          innerContainerStyles={{ justifyContent: 'space-around',}}
        />

        <ScrollView
          horizontal={ false }
          style={ styles.footerWrapperNC }
          contentContainerStyle={ styles.profileWrap }>
          <Avatar
            large
            source={{uri: "https://www.shareicon.net/data/2016/09/01/822711_user_512x512.png"}}
            activeOpacity={ 0.7 }
          />

        <Card width={200}>
          <Button
            large
            raised
            icon={{ name: 'chart-gantt', type: 'material-community' }}
            title='Track Usage'
            onPress={() => {
              navigate('WaterUsage');
            }}/>
          <Button
            large
            raised
            icon={{ name: 'opacity' }}
            title='Local Levels' />
          <Button
            large
            raised
            icon={{ name: 'chemical-weapon', type: 'material-community' }}
            title='Watershed' />
        </Card>

        </ScrollView>
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
  webView: {
    marginTop: -130,
  }
});
