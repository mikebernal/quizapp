import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, ScrollView,TouchableOpacity } from 'react-native';
class Questions extends Component{
    constructor(props){
      super(props);
      this.state = {
        index : 0,
        data : [],
        question : '',
        answers : [],
        score : 0,
        is_correct : '',
        userInput : [],
        name : this.props.navigation.state.params.name
      }
      this.getApi = this.getApi.bind(this);
      this.getData = this.getData.bind(this);
      this.goToResult = this.goToResult.bind(this);
      this.shuffleArray = this.shuffleArray.bind(this);
      this.goToNextQuestion = this.goToNextQuestion.bind(this);
    }
    static navigationOptions = {
      title: 'Question',
    };
    componentDidMount(){
      this.getApi();
    }
    getApi(){
      let category = this.props.navigation.state.params.category;
      let baseUrl = '';
      let token = this.props.navigation.state.params.token;
      if(category === 0 ){
        baseUrl = 'https://opentdb.com/api.php?amount=10&type=multiple&token=';
      } else {
        baseUrl = 'https://opentdb.com/api.php?amount=10&category='+category+'&type=multiple&token=';
      }
      fetch(baseUrl + token)
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          data : responseJSON.results
        });
        this.getData(); 
      })
      .catch( (error) => {
        console.log("There was an error fetching the api in the Questions Component\n" +error);
        throw error;
      });
    }
    getData(){
      let data = this.state.data;
      let index = this.state.index;
      console.log('Variable index is: '+index);
      console.log("the state index is: "+this.state.index);
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
        newScore = this.state.score + 1;
        console.log("You score: "+newScore +" out of "+this.state.data.length);
        this.setState({ score : newScore });
      }
      console.log("this.state.index = " + this.state.index + "\nthis.state.data.length = "+this.state.data.length);
      if(this.state.index === 10 ){
        console.log("FINISH\nChecking if "+this.state.index+" < "+this.state.data.length);
        console.log('Question component:>> Your scored is '+ newScore +' out of '+ this.state.data.length);
        this.goToResult( {data : this.state.data, score : newScore, name : this.state.name} );  
      }
      console.log("this.getData has been called at "+Date.now());
      if(this.state.index <= 9){
        this.getData(); 
      }
    }
    goToResult({data, score, name}){ 
      console.log('goToResults has been called at '+Date.now());
      this.props.navigation.navigate('Result', {data , score, name});
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
      this.state.index === 0 ? (<View style = {[styles.container, styles.horizontal]}><ActivityIndicator  size="large"/></View>) : (
        <ScrollView style={styles.scroll}>
        <View>
          <Text> Name: { this.state.name }</Text>
          <Text> Question { this.state.index } out of 10</Text>
          <Text> { decodeURI(this.state.question)  }</Text>
            {
              this.state.answers.map( (answer, i ) => {
               return ( 
                <View style={styles.background} key={i}>
                  <TouchableOpacity  raised={true}style={styles.button} onPress={() => this.goToNextQuestion(this.state.answers[i])}> 
                    <Text style={styles.buttonText}> {this.state.answers[i]}  </Text>
                  </TouchableOpacity>
                </View>
                );
              })
            }
      </View>
      </ScrollView>
      )
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  background: {
    paddingVertical: 10,
    backgroundColor:'#ffffff'
  },
  scroll: {
    paddingVertical: 20,
    backgroundColor:'#ffffff'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    borderColor :'#000' 
  },
  buttonText: {
    color:"#000",
    fontWeight: "100",
  }
})
export default Questions;