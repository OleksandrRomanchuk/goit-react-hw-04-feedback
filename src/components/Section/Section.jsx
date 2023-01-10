import PropTypes from 'prop-types';
import { AppSection, AppSectionTitle } from './Section.styled';

export function Section (props) {
    const { title, children } = props;

    return <AppSection>
                <AppSectionTitle>{title}</AppSectionTitle>
                {children}
            </AppSection>;
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}