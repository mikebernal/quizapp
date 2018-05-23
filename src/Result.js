import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
class Result extends Component{
    constructor(props){
        super(props);
        console.log("THIS IS THE RESULT COMPONENT");
        console.log("Navigation state params :"+this.props.navigation.state.params.results.answer);
        this.state = {
            data : this.props.navigation.state.params.data,
            score : this.props.navigation.state.params.score
        }
    }
    componentDidMount(){
        console.log("RESULTS COMPONENTDIMOUNT");
        console.log("Result Component state.data : \n"+this.state.data);
        console.log("Result Component state.score : \n"+this.state.score);
        console.log("Result Component state.answer : \n"+this.state.answer);
    }
    goToReview(){
        this.props.navigation.navigate('Review');
    }
    goToQuestions(){
        this.props.navigation.navigate('Questions');
    }
    goToHome(){
        this.props.navigation.navigate('Home');
    }
//   render() {
//     return (
//       <View>
//         <Text>RESULT PAGE</Text>
//         <Text>You scored out of </Text>
//         {/* {
//             this.state.data.map( (question, i) => {
//               return (
//                 <View key={i}>
//                     <Text></Text>
//                     <Text>Your answer </Text>
//                     <Text>Correct answer : </Text>
//                     <Text>{'\n'}</Text>
//                 </View> 
//               );
//             })
//         } */}
//         <Button title="Review Answer" onPress={() => this.goToReview() }/>
//         <Text>{'\n'}</Text>
//         <Button title="Try Again" onPress={() => this.goToQuestions() }/>
//         <Text>{'\n'}</Text>
//         <Button title="Change User" onPress={() => this.goToHome() }/>
//       </View>
//     );
//   }


  render() {
    return (
        this.state.data && this.state.data.length ? (
      <View>
        <Text>RESULT PAGE</Text>
        <Text>You scored {this.state.score} out of {this.state.data.length}</Text>
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
        }
        <Button title="Review Answer" onPress={() => this.goToReview() }/>
        <Text>{'\n'}</Text>
        <Button title="Try Again" onPress={() => this.goToQuestions() }/>
        <Text>{'\n'}</Text>
        <Button title="Change User" onPress={() => this.goToHome() }/>
      </View>

) : null
    );
  }


}
export default Result;