import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
class Result extends Component{
    constructor(props){
        super(props);
        console.log("THIS IS THE RESULT COMPONENT");
        console.log("You scored "+this.props.navigation.state.params.score+ " out of 10");
        // console.log(this.props.navigation.state.params.data);
        for (let key in this.props.navigation.state.params.data) {
            if (this.props.navigation.state.params.data.hasOwnProperty(key)) {
                console.log("Question "+ key +": "+this.props.navigation.state.params.data[key].question+"\nCorrect answer: "+this.props.navigation.state.params.data[key].correct_answer);
            }
        }
        // this.state = {
        //     data : this.props.navigation.state.params.data,
        //     score : this.props.navigation.state.params.score
        // }
    }
    goToCategories(){
        this.props.navigation.navigate('Categories');
    }
    goToHome(){
        this.props.navigation.navigate('Home');
    }
  render() {
    return (
        this.state.data && this.state.data.length ? (
      <View>
        <Text>RESULT PAGE</Text>
        {/* <Text>You scored {this.state.score} out of {this.state.data.length}</Text>
        {
            this.state.data.map( (question, i) => {
              return (
                <View key={i}>
                    <Text>{this.state.data[i].question}</Text>
                    <Text>Your answer {this.state.answer}</Text>
                    <Text>Correct answer : {this.state.data[i].correct_answer}</Text>
                    <Text>{'\n'}</Text>
                </View> 
              );
            })
        } */}
        <Button title="Review Answer" onPress={() => this.goToReview() }/>
        <Text>{'\n'}</Text>
        <Button title="Try Again" onPress={() => this.goToQuestions() }/>
        <Text>{'\n'}</Text>
        <Button title="Change User" onPress={() => this.goToHome() }/>
      </View>

) : (null)
    );
  }


}
export default Result;