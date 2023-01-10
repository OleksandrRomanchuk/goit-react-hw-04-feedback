import PropTypes from 'prop-types';

export function Statistics(props) {
    const { good, neutral, bad, total, positivePercentage } = props;

    return <>
                <ul>
                    <li><p>Good:<span> {good}</span></p></li>
                    <li><p>Neutral:<span> {neutral}</span></p></li>
                    <li><p>Bad:<span> {bad}</span></p></li>
                    </ul>
                <ul>
                    <li><p>Total:<span> {total}</span></p></li>
                    <li><p>Positiv feedback:<span> {positivePercentage}%</span></p></li>
                </ul>
            </>
}