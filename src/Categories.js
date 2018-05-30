import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
class Categories extends Component{
    constructor(props){
      super(props);
      this.state = {
        name : this.props.navigation.state.params.name
      }
     }
     static navigationOptions = {
      title: 'Categories',
    };
    componentDidMount(){
      this.resetToken();
    }
    resetToken(){
      let token = 'e693ced76d81142f46b5445ec30d24f0686761236e2bd5fbdc076c7b0301436d';
      fetch('https://opentdb.com/api_token.php?command=reset&token='+token)
      .then((response) => response.json())
      .then((responseJSON) =>console.log(responseJSON))
      .catch( (error) => {
        console.log("There was an error reseting the api " +error);
        throw error;
      });
    }
    goToQuestions(category, name){
      this.props.navigation.navigate('Questions', {category, name});
    }
  render() {
    return (
      <View>
        <Text>Hello <Text style={{'fontSize':18,'color':'blue','fontFamily':'roboto'}}>{this.state.name} </Text>, </Text>
        <Text style={{'fontWeight':'bold', 'fontSize':25, 'textAlign':'center'}}>Select category</Text>
        <Button title="Random" onPress={() => this.goToQuestions(0, this.state.name) }/>
        <Text>{'\n'}</Text>
        <Button title="Sports" onPress={() => this.goToQuestions(21, this.state.name) }/>
        <Text>{'\n'}</Text>
        <Button title="Science" onPress={() => this.goToQuestions(17, this.state.name) }/>
        <Text>{'\n'}</Text>
        <Button title="General Knowledge" onPress={() => this.goToQuestions(9, this.state.name) }/>
        <Text>{'\n'}</Text>
        <Button title="Television" onPress={() => this.goToQuestions(14, this.state.name) }/>
        <Text>{'\n'}</Text>
        <Button title="Animals" onPress={() => this.goToQuestions(27, this.state.name) }/>
      </View>
    );
  }
}
export default Categories;