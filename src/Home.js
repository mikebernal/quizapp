import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
class Home extends Component{
    constructor(props){
        super(props);
    }
    goToCategories(){
      this.props.navigation.navigate('Categories'); 
    }
  render() {
    return (
      <View>
        <Text>
            Quiz App Please Enter Name
        </Text>
        <Button title="Take the quiz" onPress={() => this.goToCategories() }/>
      </View>
    );
  }
}
export default Home; 