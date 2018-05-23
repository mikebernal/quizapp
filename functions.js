function goToHome(){
  this.props.navigation.navigate('Home');
}
function goToCategory(){
  this.props.navigation.navigate('Category');
}
function goToQuestions(){
    this.props.navigation.navigate('Questions');
}
function goToResult(){
  this.props.navigation.navigate('Result');
}
function goToReview(){
  this.props.navigation.navigate('Review');
}
export {goToHome, goToCategory, goToQuestions, goToResult, goToReview };