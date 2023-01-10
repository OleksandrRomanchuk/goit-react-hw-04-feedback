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
    this.setState(prevState => prevState[event.target.dataset.name] += 1)
  };


  render() {
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
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
            />}
        </Section>
    </FeedbackApp>
  );
  }
};

export { App };
