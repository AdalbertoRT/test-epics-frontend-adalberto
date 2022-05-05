import styled from "styled-components";

export const CardsComponent = styled.article`
  height: 100%;
  width: 100%;
  & .plan {
    transition: all 2s ease;
    width: 100%;
  }

  & .noFocus {
    opacity: 0;
    animation: noFocus 0.5s ease-in-out 2s forwards;
  }

  @keyframes noFocus {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }

  @media screen and (max-width: 475px) {
    flex-direction: column;
  }
`;
