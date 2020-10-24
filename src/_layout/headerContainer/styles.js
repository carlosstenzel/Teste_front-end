import styled from 'styled-components';

export const Container = styled.div`
  padding: 100px 0px;
  background: url(/assets/bg.jpg) no-repeat center top;

  color: #fff;

  h1 {
    margin-bottom: 20px;

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.5rem;
    @media (max-width: 480px) {
      font-size: 1.1rem;
      font-weight: 100;
    }
  }
`;
