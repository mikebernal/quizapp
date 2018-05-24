import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
class Categories extends Component{
    constructor(props){
        super(props);
        this.state = {
          name : this.props.navigation.state.params.name
        }
        let token = '71b4df0a055bda14f0b0d7f393a727b60bc056fa1c78cb955c39c97b995b4e58';
        fetch('https://opentdb.com/api_token.php?command=reset&token='+token)
        .then((response) =>response.json())
        .then((responseJSON) =>console.log('The token has been reset'))
        .catch( (error) => console.log("There was an error fetching the api" +error));
        // Reset token https://opentdb.com/api_token.php?command=reset&token=YOURTOKENHERE
    }
    goToQuestions(category, name){
        this.props.navigation.navigate('Questions', {category, name}); // {category}
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