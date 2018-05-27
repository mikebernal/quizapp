import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './src/Home';
import Categories from './src/Categories';
import Questions from './src/Questions';
import Result from './src/Result';
import Review from './src/Review';

const MainNavigation = createStackNavigator({
  Home : { screen : Home },
  Categories : { screen: Categories},
  Questions : { screen: Questions},
  Result : { screen: Result},
  Review : { screen: Review}
},{
  initialRouteName : 'Home',
  // navigationOptions: {
  //   headerStyle: {
  //     backgroundColor: '#000000',
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: '200',
  //   }
  // }
});

class App extends Component{
  render() {
    return (
        <MainNavigation />
    );
  }
}

export default App;