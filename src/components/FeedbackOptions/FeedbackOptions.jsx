import PropTypes from 'prop-types';
import { capitalize } from 'utils/utilsFunc';
import { FeedbackBtnsList, FeedbackBtn } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackBtnsList>
      {options.map(option => (
        <li key={option}>
          <FeedbackBtn type="button" onClick={() => onLeaveFeedback(option)}>
            {capitalize(option)}
          </FeedbackBtn>
        </li>
      ))}
    </FeedbackBtnsList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
