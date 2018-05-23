import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
class Questions extends Component{
    constructor(props){
      super(props);
      this.state = {
        index : 0,
        data : [],
        question : '',
        answers : [],
        showSubmit : 'none',
        score : 0,
        is_correct : '',
        userInput : []
      }
      this.getApi = this.getApi.bind(this);
      this.getData = this.getData.bind(this);
      this.goToResult = this.goToResult.bind(this);
      this.shuffleArray = this.shuffleArray.bind(this);
      this.goToNextQuestion = this.goToNextQuestion.bind(this);
    }
    componentDidMount(){
      this.getApi();
    }
    getApi(){
      let category = this.props.navigation.state.params.category;
      let baseUrl = '';
      if(category == 0 ){
        baseUrl = 'https://opentdb.com/api.php?amount=10&type=multiple&token=';
      } else {
        baseUrl = 'https://opentdb.com/api.php?amount=10&category='+category+'&type=multiple&token=';
      }
      let token = 'fea4144e419c5eefa356ad1a6086a2d7bd549a36b1946a2688027be80edd223a';
      fetch(baseUrl + token)
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          data : responseJSON.results
        });
        this.getData(); 
      })
      .catch((error) => console.log('an error occured. ' + error)); 
    }
    getData(){
      let data = this.state.data;
      let index = this.state.index;
      let is_correct = data[index].correct_answer;
      let answers = [
        data[index].correct_answer,
        data[index].incorrect_answers[0],
        data[index].incorrect_answers[1],
        data[index].incorrect_answers[2]
      ];
      answers = this.shuffleArray(answers);
      this.setState({
        question : data[index].question,
        answers : answers,
        is_correct : is_correct 
      });
      console.log("Question "+(index+1)+" out of "+this.state.data.length+"\n" +this.state.question + " \nAnswer : " +is_correct);
      index += 1;
      this.setState({index : index}) // index : index
    }
    goToNextQuestion(answer) {
      console.log("the answer is: "+ answer);
      if(answer === this.state.is_correct){ 
        let newScore = this.state.score + 1;
        console.log("  You score:  "+newScore +" out of "+this.state.data.length);
        this.setState({ score : newScore }); // Update score
      }
      // Check if index = 10
      console.log("this.state.index = " + this.state.index + "\nthis.state.data.length = "+this.state.data.length);
      if(this.state.index === 10 ){
        console.log("FINISH\nChecking if "+this.state.index+" < "+this.state.data.length);
        console.log('Your scored is '+ this.state.score +' out of '+ this.state.data.length);
        this.goToResult( {results : { 
          data : this.state.data,
          score : this.state.score
        }});  
      }
      this.getData(); 
    }
    goToResult({results}){  
      this.props.navigation.navigate('Result', {results});
    }
    shuffleArray(a) {
      let j, x, i;
      for (i = a.length; i; i--) {
          j = Math.floor(Math.random() * i);
          x = a[i - 1];
          a[i - 1] = a[j];
          a[j] = x;
      }
      return a;
  }
  render() {
    return (
      <View>
          <Text> Question { this.state.index } out of 10</Text>
          <Text> { decodeURIComponent(this.state.question) }</Text>
            {
              this.state.answers.map( (answer, i ) => {
               return ( 
                <View key={i}>
                  <Button title={this.state.answers[i]} onPress={() => this.goToNextQuestion(this.state.answers[i])}/> 
                <Text>{'\n'}</Text>
                </View>
                );
              })
            }
      </View>
    );
  }
}
export default Questions;