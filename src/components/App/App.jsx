import { useState } from 'react';
import { initOptions } from 'initials/options';

//========== components ==========
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

//========== styles ==========
import { FeedbackApp } from './App.styled';

export function App() {
  const [options, setOptions] = useState({ ...initOptions });

  const onLeaveFeedback = option => {
    setOptions(prevOptions => ({
      ...prevOptions,
      [option]: prevOptions[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = options;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = options;
    return Math.floor((good / countTotalFeedback()) * 100);
  };

  const { good, neutral, bad } = options;

  return (
    <FeedbackApp>
      <Section title="Please leave" span=" feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <Notification message="There is no feedback." />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </FeedbackApp>
  );
}
