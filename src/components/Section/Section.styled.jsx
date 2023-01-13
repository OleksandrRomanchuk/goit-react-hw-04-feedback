import styled from "styled-components";

export const AppSection = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
    justify-content: center;
    align-items: flex-start;

    min-width: 320px;
    height: 250px;
    
`;

export const AppSectionTitle = styled.h2`
    font-size: 32px;
    font-weight: 400;
`;

export const TitleSpan = styled.span`
    display: block;

    font-size: 40px;
    font-weight: 600;
    text-transform: uppercase;
    color: #ffffff;
    text-shadow: 0 0 5px #FFF, 0 0 15px #FFF, 0 0 20px #33f918, 0 0 30px #33f918, 0 0 40px #33f918, 0 0 55px #33f918, 0 0 75px #33f918, 2px 2px 2px rgba(206,89,55,0);
`;
