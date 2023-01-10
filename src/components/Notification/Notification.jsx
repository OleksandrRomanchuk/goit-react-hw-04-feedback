import PropTypes from 'prop-types';
import { NotifyMessage } from './Notification.styled';

export function Notification(props) {
    const { message } = props;

    return <NotifyMessage>
                {message}
            </NotifyMessage>;
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}