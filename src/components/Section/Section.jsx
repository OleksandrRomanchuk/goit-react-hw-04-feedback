import PropTypes from 'prop-types';
import { AppSection, AppSectionTitle, TitleSpan } from './Section.styled';

export function Section({ title, span, children}) {
    return <AppSection>
        <AppSectionTitle>
            {title}
            {span && <TitleSpan>
                {span}
            </TitleSpan>}
        </AppSectionTitle>
        {children}
    </AppSection>;
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    span: PropTypes.string,
    children: PropTypes.node,
};