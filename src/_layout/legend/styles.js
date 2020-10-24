import styled from 'styled-components';

export const Container = styled.div`
  color: #444;
  h6 {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    margin: 0;

    li {
      margin-bottom: 10px;

      & > svg {
        margin-right: 10px;
        margin-bottom: -6px;
      }

      & > button {
        float: left;
        margin-right: 10px;
      }
    }
  }
`;
