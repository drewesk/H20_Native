import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, WebView, Image } from 'react-native';
import { Header, Text, Icon, Button, FormLabel, FormInput, Avatar, SocialIcon, Card, ListItem } from 'react-native-elements';

const months = [
 {
    name: 'Jan',
 },
 {
    name: 'Feb',
 },
 {
    name: 'March',
 },
 {
    name: 'April',
 }
]


export default class Profile extends Component {
  
  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'HelloH20', style: { color: '#fff'} }}
          outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
          innerContainerStyles={{ justifyContent: 'space-around',}}
        />

        <ScrollView
          horizontal={false}
          style={styles.footerWrapperNC}
          contentContainerStyle={ styles.profileWrap }>
          <Text h3 style={styles.welcome}>Welcome Back Sarah!</Text>
          <Avatar
            large
            source={{uri: "https://www.shareicon.net/data/2016/09/01/822711_user_512x512.png"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <View style={ styles.socialBar } >
            <SocialIcon
              light
              type='twitter'
            />

            <SocialIcon
              light
              type='github'
            />

            <SocialIcon
              light
              type='facebook'
            />
          </View>

          <Card width={200}>
            <Text>
              Water Usage
            </Text>
            { months.map((m, i) => {
              return (
                <ListItem
                  key={i}
                  title={m.name}
                  leftIcon={{name: 'opacity'}}
                  onPress={() =>
                    navigate('WaterUsage')
                  }
                />
              );
            })
          }
        </Card>

        </ScrollView>
        <WebView
          style={ styles.webView}
          automaticallyAdjustContentInsets={false}
          source={{ uri: 'https://water.usgs.gov/wsc/a_api/index2.html' }}
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
  webView: {
    marginTop: -130,
  }
});
