import styled from "styled-components";

export const AppSection = styled.section`
    display: grid;
    justify-content: center;
    align-items: center;

    padding: ${({theme}) => theme.space * 5}px 0;
`;

export const AppSectionTitle = styled.h2`
    font-size: ${({theme}) => theme.fontSizes[5]}px;
`;