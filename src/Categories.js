import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
class Categories extends Component{
    constructor(props){
        super(props);
        console.log("Name is "+this.props.navigation.state.params.name);
    }
    goToQuestions(category){
        this.props.navigation.navigate('Questions', {category}); // {category}
    }
  render() {
    return (
      <View>
        <Text style={{'fontWeight':'bold', 'fontSize':30, 'textAlign':'center'}}>Select category</Text>
        <Button title="Random" onPress={() => this.goToQuestions(0) }/>
        <Text>{'\n'}</Text>
        <Button title="Sports" onPress={() => this.goToQuestions(21) }/>
        <Text>{'\n'}</Text>
        <Button title="Science" onPress={() => this.goToQuestions(17) }/>
        <Text>{'\n'}</Text>
        <Button title="General Knowledge" onPress={() => this.goToQuestions(9) }/>
        <Text>{'\n'}</Text>
        <Button title="Television" onPress={() => this.goToQuestions(14) }/>
        <Text>{'\n'}</Text>
        <Button title="Animals" onPress={() => this.goToQuestions(27) }/>
      </View>
    );
  }
}
export default Categories;