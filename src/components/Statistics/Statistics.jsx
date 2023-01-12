import PropTypes from 'prop-types';
import {
    FeedbackList,
    FeedbackStatList,
} from './Statistics.styled';

export function Statistics({good, neutral, bad, total, positivePercentage}) {
    return <>
                <FeedbackList>
                    <li>
                        <p>
                            Good:
                            <span> {good}</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            Neutral:
                            <span> {neutral}</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            Bad:
                            <span> {bad}</span>
                        </p>
                    </li>
                </FeedbackList>
                <FeedbackStatList>
                    <li><p>Total:<span> {total}</span></p></li>
                    <li><p>Positiv feedback:<span> {positivePercentage}%</span></p></li>
                </FeedbackStatList>
            </>
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}