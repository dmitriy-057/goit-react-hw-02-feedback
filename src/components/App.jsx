import {Statistics} from "components/Statistics/Statistics"
import {FeedbackOptions} from "components/FeedbackOptions/FeedbackOptions"
import React from "react";
export class App  extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
//  goodIncrement = ()=> {
//     this.setState(prevState => ({good: prevState.good + 1}))
// }
// neutralIncrement = ()=> {
//   this.setState(prevState => ({neutral: prevState.neutral + 1}))
// }
// badIncrement = ()=> {
//   this.setState(prevState => ({bad: prevState.bad + 1}))
// }
changeState = (changeKey) => {
  this.setState((prevState) => {
    return({
      [changeKey]: prevState[changeKey] + 1
    })
  }) 
}
countTotalFeedback(){
  return this.state.good + this.state.neutral + this.state.bad
}
countPositiveFeedbackPercentage(){
  return Math.round((this.state.good  * 100) / this.countTotalFeedback())
  }
render () {
    return (
        <div>
            <h1>Please leave feedback about us</h1>
            <FeedbackOptions options={this.state} onLeaveFeedback={this.changeState}/>
            <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
            
        </div>
    )
}
}
