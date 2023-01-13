import PropTypes from 'prop-types';
import { capitalize } from 'utils/utilsFunc';
import { FeedbackBtnsList, FeedbackBtn } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
    return <FeedbackBtnsList>
                {options
                    .map(option => <li
                        key={option}>
                        <FeedbackBtn
                            type="button"
                            data-name={option}
                            onClick={onLeaveFeedback}>
                            {capitalize(option)}
                        </FeedbackBtn>
                    </li>)}
            </FeedbackBtnsList>;
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
}