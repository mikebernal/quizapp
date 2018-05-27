import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput,TouchableOpacity, YellowBox } from 'react-native';
// Ignoring warnings for for faster development process only. 
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
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
      <View style={{'flex':1,'justifyContent': 'center', 'alignItems': 'center','backgroundColor':'#fff'}}>
        <Text style={{'textAlign':'center', 'fontSize':30,'fontWeight':'bold','color': '#000'}}>Enter Name</Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width:'80%','backgroundColor': '#FFF','margin':20,'color':'#000', 'fontSize': 20}}
        onChangeText={(name) => this.setState({name})}
        value={this.state.name}
      />
        <TouchableOpacity style={styles.button} onPress={() => this.goToCategories(this.state.name)}>
         <Text style={styles.buttonText}> Start Quiz </Text>
       </TouchableOpacity>
      </View> 
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,

  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  },
  buttonText: {
    color:"#000",
    fontWeight: "100",
    borderColor : 'black'
  }
})

export default Home; 
