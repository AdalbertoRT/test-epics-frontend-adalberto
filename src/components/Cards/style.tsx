import styled from "styled-components";

export const CardsComponent = styled.article`
  height: 100%;
  width: 100%;
  & .plan {
    transition: all 1s ease-in-out;
    width: 100%;
    animation: inFocus 1s ease-in-out backwards;
  }

  & .hide {
    animation: noFocus 1s ease-in-out forwards;
  }

  @keyframes inFocus {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 100%;
    }
  }

  @keyframes noFocus {
    from {
      opacity: 1;
      width: 100%;
    }
    to {
      opacity: 0;
      width: 0;
    }
  }

  @media screen and (max-width: 475px) {
    flex-direction: column;
  }
`;
