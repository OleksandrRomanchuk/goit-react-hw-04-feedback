import styled from "styled-components";

export const FeedbackBtnsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
`;

export const FeedbackBtn = styled.button`
    min-width: 90px;

    padding: 8px 12px;
    
    font-size: 14px;
    
    background-color: #ffffff;
    border: none;
    outline: none;
    border-radius: 6px;

    transition: background-color 300ms ease, box-shadow 300ms ease;

    :hover, :focus {
        background-color: #64e3ff;

        box-shadow: 0 0 16px #64e3ff;
    }
`;