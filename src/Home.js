import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
// import FontAwesome, { Icons } from 'react-native-fontawesome';
class Home extends Component{
  constructor(props){
      super(props);
      this.state = { name: '' };
  }
  static navigationOptions = {
    title: 'Home',
  };
  goToCategories(name){
    this.props.navigation.navigate('Categories', {name}); 
  }
  render() {
    return (
      <View style={{'flex':1,'justifyContent': 'center', 'alignItems': 'center'}}>
        <Text style={{'textAlign':'center', 'fontSize':30,'fontWeight':'bold'}}>Enter Name</Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width:'80%','borderRadius': 10,'backgroundColor': '#FFFFEF','margin':20}}
        onChangeText={(name) => this.setState({name})}
        value={this.state.name}
      />
        <Button color="#ff00f" title="Take the quiz" onPress={() => this.goToCategories(this.state.name) }/>
      </View>
    );
  }
}
export default Home; 
