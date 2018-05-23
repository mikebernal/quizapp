import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
// import {goToHome, goToCategory, goToQuestions, goToResult, goToReview} from '../functions';

class Review extends Component{
    constructor(props){
        super(props);

        console.log(props);
    }
    // TO DO
    // DISPLAY QUESTION AND ANSWER
    // DISPLAY CORRECT ANSWER BY STYLING COLOR INTO BLUE
    goToHome(){
        this.props.navigation.navigate('Home');
    }
  render() {
    return (
      <View>
        <Text>
            Review your answers here
        </Text>
        <Button title="Go to HOME" onPress={() => this.goToHome() }/>
      </View>
    );
  }
}

export default Review;