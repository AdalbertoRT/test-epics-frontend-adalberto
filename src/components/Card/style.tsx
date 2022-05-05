import styled from "styled-components";

export const CardComponent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 150px;
  background-color: white;
  box-shadow: 0px 0px 0px 5px #f3f5fa inset;
  border: 1px solid #cfddff;
  border-radius: 20px;

  .show {
    transition: all 1s linear;
    animation: show 1s ease-in-out 1s backwards;
    align-items: center;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const CardHeader = styled.div``;

export const CardImg = styled.div``;

export const CardTitle = styled.div``;

export const CardBody = styled.div``;

export const CardFooter = styled.div``;
