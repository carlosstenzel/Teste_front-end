import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: #fff;
  color: #444;
  cursor: pointer;
  padding: 11px 28px 0px 20px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  transition: background-color 0.6s ease;

  &:hover,
  &.active {
    background-color: #ddd;
  }
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 0px;
`;

export const Icon = styled.div`
  margin-left: auto;
  margin-top: -10px;
  transition: transform 0.6s ease;
`;

export const Content = styled.div`
  background-color: white;
  overflow: hidden;
  transition: max-height 0.6s ease;

  & > div {
    padding: 8px 0px 5px;

    & ul {
      list-style: none;
      margin-left: 0px;

      li {
        border-bottom: 1.5px solid #e8e8e8;
        font-size: 13px;
        padding: 7px 0px 5px 25px;

        label {
          color: #333;
        }
      }
    }
  }
`;
