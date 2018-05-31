import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
class Categories extends Component{
    constructor(props){
      super(props);
      this.state = {
        name : this.props.navigation.state.params.name,
        token : ''
      }
     }
     static navigationOptions = {
      title: 'Categories'
    };
    componentDidMount(){
      this.requestToken();
    }
    requestToken(){
      let baseUrl = 'https://opentdb.com/api_token.php?command=request';
      fetch(baseUrl)
       .then((response) => response.json())
       .then((responseJSON)=>{
         console.log("API response message: " +responseJSON.response_message);
         this.setState({token : responseJSON.token});
         console.log('the state token is: '+this.state.token);
       })
       .catch((error) => {
         console.log("There was an error requesting token " + error);
        throw error;
       });
    }
    goToQuestions(category, name, token){
      this.props.navigation.navigate('Questions', {category, name, token});
    }
  render() {
    return (
      <View>
        <Text>Hello <Text style={{'fontSize':18,'color':'blue','fontFamily':'roboto'}}>{this.state.name} </Text>, </Text>
        <Text style={{'fontWeight':'bold', 'fontSize':25, 'textAlign':'center'}}>Select category</Text>
        <Button title="Random" onPress={() => this.goToQuestions(0, this.state.name, this.state.token) }/>
        <Text>{'\n'}</Text>
        <Button title="Sports" onPress={() => this.goToQuestions(21, this.state.name, this.state.token) }/>
        <Text>{'\n'}</Text>
        <Button title="Science" onPress={() => this.goToQuestions(17, this.state.name, this.state.token) }/>
        <Text>{'\n'}</Text>
        <Button title="General Knowledge" onPress={() => this.goToQuestions(9, this.state.name, this.state.token) }/>
        <Text>{'\n'}</Text>
        <Button title="Television" onPress={() => this.goToQuestions(14, this.state.name, this.state.token) }/>
        <Text>{'\n'}</Text>
        <Button title="Animals" onPress={() => this.goToQuestions(27, this.state.name, this.state.token) }/>
      </View>
    );
  }
}
export default Categories;