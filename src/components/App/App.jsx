import { useState, useEffect} from "react";

//========== components ==========
import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from "components/Notification/Notification";

//========== styles ==========
import { FeedbackApp } from "./App.styled";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (event) => {
    const { dataset: { name } } = event.target;

    switch (name) {
      case 'good':
        setGood(good => good + 1)
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1)
        break;
      
      case 'bad':
        setBad(bad => bad + 1)
        break;
      
      default:
        console.warn(`No feedback option with name ${name}.`)
    };
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor(good / countTotalFeedback() * 100);
  };
  
  return (
      <FeedbackApp>
        <Section
          title="Please leave"
          span=" feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        
        <Section
          title="Statistics">
          {!countTotalFeedback()
            ? <Notification
              message="There is no feedback." />
            : <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />}
        </Section>
      </FeedbackApp>
  );
}

