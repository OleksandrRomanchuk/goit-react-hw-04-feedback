import { Component } from "react";

//========== components ==========
import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from "components/Notification/Notification";

//========== styles ==========
import { FeedbackApp } from "./App.styled";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback() { 
    return Object.values(this.state).reduce((acc, value) => {
      return acc += value
    }, 0)
  };

  countPositiveFeedbackPercentage() {
    return Math.floor(this.state.good / this.countTotalFeedback() * 100);
  };

  onLeaveFeedback = (event) => {
    const optionFieldName = event.target.dataset.name;

    this.setState(prevState => {
      return {...prevState, [optionFieldName]: prevState[optionFieldName] += 1}
    })
  };

  // prevState[event.target.dataset.name] += 1


  render() {
    const { good, neutral, bad } = this.state;

    return (
    <FeedbackApp>
        <Section
          title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section
          title="Statistics">
          {!this.countTotalFeedback()
            ? <Notification
                message="There is no feedback" />
            : <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
            />}
        </Section>
    </FeedbackApp>
  );
  }
};

export { App };
