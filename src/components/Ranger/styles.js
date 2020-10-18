import styled from 'styled-components';

export const Input = styled.input`
  border-radius: 1px;
  cursor: pointer;
  height: 4px;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    width: 10px;
    height: 10px;
    background: #eee;
    border: 4px solid #444;
    margin-top: 3px;
    background: #119c9f;
    cursor: pointer;
    -webkit-appearance: none;
  }

  &::-moz-range-thumb {
    width: 10px;
    height: 10px;
    background: #eee;
    border: 4px solid #444;
    border-radius: 50%;

    cursor: pointer;
  }

  &::-ms-thumb {
    width: 10px;
    height: 10px;
    background: #eee;
    border: 4px solid #444;
    border-radius: 50%;
    cursor: pointer;
    margin-top: 0px;
    /*Needed to keep the Edge thumb centred*/
  }

  // Firefox
  &::-moz-range-progress {
    background-color: #119c9f;
    height: 4px;
  }
  &::-moz-range-track {
    background-color: #cecfd0;
    height: 3px;
  }
  // IE
  &::-ms-fill-lower {
    background-color: #119c9f;
    height: 4px;
  }
  &::-ms-fill-upper {
    background-color: #cecfd0;
    height: 3px;
  }
`;

export const Label = styled.label`
  color: #444;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Container = styled.div`
  padding: 2rem;

  p {
    color: #333;
    margin-top: 10px;
  }
`;
