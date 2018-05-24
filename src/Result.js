import React, { Component } from 'react';
import { Text, View, Button, ScrollView, StyleSheet } from 'react-native';
class Result extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : this.props.navigation.state.params.name
        }
        console.log("You scored "+this.props.navigation.state.params.score+ " out of 10");
        for (let key in this.props.navigation.state.params.data) {
            if (this.props.navigation.state.params.data.hasOwnProperty(key)) {
                console.log("Question "+ key +": "+this.props.navigation.state.params.data[key].question+"\nCorrect answer: "+this.props.navigation.state.params.data[key].correct_answer);
            }
        }
        this.renderQuestions = this.renderQuestions.bind(this);
    }
    goToCategories(){
        this.props.navigation.navigate('Categories');
    }
    goToHome(){
        this.props.navigation.navigate('Home');
    }
    renderQuestions(datas){
        {
         return (datas.map( (data, i ) => {
            return ( 
                <View key={i}>
                    <Text>Question {i+1}: {data.question}</Text> 
                    <Text>The correct answer is <Text style={styles.correct}>{data.correct_answer}</Text></Text>
                    <Text> </Text>
                </View>
            );
            }));
        }
    }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <View>
        <Text style={styles.heading}>RESULT</Text>
        <Text>{'\n'}</Text>
        <Text style={styles.h2}>{this.state.name} scored {this.props.navigation.state.params.score} out of 10</Text>
        <View style={styles.main}>
            {this.renderQuestions(this.props.navigation.state.params.data)}
        </View>
        <Text>{'\n'}</Text>
        <Button title="Try again" onPress={() => this.goToQuestions() }/>
        <Text>{'\n'}</Text>
        <Button title="Change User" onPress={() => this.goToHome() }/>
      </View>
    </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    contentContainer: {
      paddingVertical: 20
    },
    main: {
        flex:1,
        justifyContent: 'space-between',
    },
    heading: {
        fontSize: 20,
        padding: 5,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    h2: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    correct:{
        color:'blue'
    }
  });
export default Result;