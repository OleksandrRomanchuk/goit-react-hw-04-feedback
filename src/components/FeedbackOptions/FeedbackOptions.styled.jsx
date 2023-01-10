import styled from "styled-components";

export const FeedbackBtnsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.space * 3}px;

    margin-top: ${({theme}) => theme.space * 8}px;
`;

export const FeedbackBtn = styled.button`
    min-width: 120px;

    padding: ${({ theme }) => theme.space * 2}px ${({ theme }) => theme.space * 4}px;
    
    font-size: ${({theme}) => theme.fontSizes[2]}px;
`;