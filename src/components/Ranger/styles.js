import styled from 'styled-components';

export const Input = styled.input`
  border-radius: 1px;
  cursor: pointer;
  height: 4px;
  width: 100%;
  -webkit-appearance: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    background: #119c9f;
    border: 0;
    border-radius: 1.3px;
    width: 100%;
    height: 4px;
    cursor: pointer;
  }
  &::-webkit-slider-thumb {
    margin-top: -7px;
    width: 18px;
    height: 18px;
    background: #ffffff;
    border: 4px solid #444444;
    border-radius: 50px;
    cursor: pointer;
    -webkit-appearance: none;
  }
  &:focus::-webkit-slider-runnable-track {
    background: #119c9f;
  }
  &::-moz-range-track {
    background: #119c9f;
    border: 0;
    border-radius: 1.3px;
    width: 100%;
    height: 4px;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 10px;
    height: 10px;
    background: #ffffff;
    border: 4px solid #444444;
    border-radius: 50px;
    cursor: pointer;
  }
  &::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 8px 0;
    color: transparent;
    width: 100%;
    height: 4px;
    cursor: pointer;
  }
  &::-ms-fill-lower {
    background: #119c9f;
    border: 0;
    border-radius: 2.6px;
  }
  &::-ms-fill-upper {
    background: #119c9f;
    border: 0;
    border-radius: 2.6px;
  }
  &::-ms-thumb {
    width: 18px;
    height: 18px;
    background: #ffffff;
    border: 4px solid #444444;
    border-radius: 50px;
    cursor: pointer;
    margin-top: 0px;
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
  text-align: center;
`;

export const Container = styled.div`
  padding: 2rem;

  p {
    color: #333;
    margin-top: 10px;
    text-align: center;
  }
`;
