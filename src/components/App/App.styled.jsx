import styled from "styled-components";

export const FeedbackApp = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(320px, auto));
    gap: 12px;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;

    text-align: center;
    color: #ffffff;

    @media(min-width: 650px) {
    grid-template-columns: repeat(2, minmax(320px, auto));
  }
`;
