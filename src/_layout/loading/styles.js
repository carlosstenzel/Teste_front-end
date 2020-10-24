import styled from 'styled-components';

export const Container = styled.div`
  background: #478436;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;

  div {
    display: block;
    height: 115px;
    width: 500px;
    background: url('/orama.svg') no-repeat center center;
    background-size: auto;
    background-size: contain;
    text-align: center;

    animation: fade 3s infinite;

    @media (max-width: 483px) {
      height: 40px;
      width: 100%;
    }
  }

  svg {
    margin-top: 5rem;

    animation: rotation 2s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  @keyframes fade {
    0% {
      opacity: 0.3;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.3;
    }
  }
`;
