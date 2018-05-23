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


const MainNavigation = new createStackNavigator({
  Home : { screen : Home },
  Categories : { screen: Categories},
  Questions : { screen: Questions},
  Result : { screen: Result},
  Review : { screen: Review}
}, {
  initialRouteName : 'Home'
});

class App extends Component{
  render() {
    return (
        <MainNavigation />
    );
  }
}

export default App;