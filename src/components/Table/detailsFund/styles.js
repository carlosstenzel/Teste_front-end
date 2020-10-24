import styled from 'styled-components';

export const Container = styled.div`
  ul {
    list-style: none;
    margin: 0;
    margin-top: 4rem;
    color: #444;
    font-size: 14px;
  }

  .fund-link {
    margin-top: 30px;
    text-decoration: underline;
    margin-bottom: 60px;

    a {
      color: #444;
    }
  }

  li {
    strong {
      margin-right: 8px;
    }
    svg {
      margin-left: 8px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding-top: 5px;
  }
`;
