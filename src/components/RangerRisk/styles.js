import styled from 'styled-components';

export const Label = styled.label`
  color: #444;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Container = styled.div`
  position: relative;
  padding: 1.5rem;

  span {
    font-size: 11px;
    display: block;
    margin-top: 30px;
  }

  input[type='range'] {
    width: 100%;
    margin-top: -33px;
    background: transparent;
    height: 85px;
  }

  input[type='range']:focus {
    outline: none;
  }

  input[type='range']::-webkit-slider-thumb {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #444 transparent;
    cursor: pointer;
    -webkit-appearance: none;
  }

  input[type='range']::-moz-range-thumb {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #444 transparent;

    cursor: pointer;
  }

  input[type='range']::-ms-thumb {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #444 transparent;
    cursor: pointer;
    margin-top: 0px;
    /*Needed to keep the Edge thumb centred*/
  }

  // Firefox
  input[type='range']::-moz-range-progress {
    background-color: #000;

    height: 1px;
  }
  input[type='range']::-moz-range-track {
    height: 0px;
  }
  // IE
  input[type='range']::-ms-fill-lower {
    background-color: #444;
    height: 1px;
  }
  input[type='range']::-ms-fill-upper {
    height: 0px;
  }
  .ranking {
    padding-right: 5px;
  }

  #custom-list {
    display: flex;
    justify-content: space-between;
    padding-right: 4px;
  }

  #custom-list option {
    position: relative;
    background: white;
    top: 18px;
    width: 8px;
    background: #444;
    cursor: pointer;
  }

  #custom-list option:nth-child(1) {
    background: #a6ecfc;
    margin-left: 2px;
    height: calc(15px + 2px);
    margin-top: calc(40px - (15px + 2px));
  }
  #custom-list option:nth-child(2) {
    background: #68f1dd;
    height: calc(15px + 4px);
    margin-top: calc(40px - (15px + 4px));
  }
  #custom-list option:nth-child(3) {
    background: #91ed6e;
    height: calc(15px + 6px);
    margin-top: calc(40px - (15px + 6px));
  }
  #custom-list option:nth-child(4) {
    background: #b0f42a;
    height: calc(15px + 8px);
    margin-top: calc(40px - (15px + 8px));
  }
  #custom-list option:nth-child(5) {
    background: #ddf40c;
    height: calc(15px + 10px);
    margin-top: calc(40px - (15px + 10px));
  }
  #custom-list option:nth-child(6) {
    background: #faf00e;
    height: calc(15px + 12px);
    margin-top: calc(40px - (15px + 12px));
  }
  #custom-list option:nth-child(7) {
    background: #ffdc00;
    height: calc(15px + 14px);
    margin-top: calc(40px - (15px + 14px));
  }
  #custom-list option:nth-child(8) {
    background: #fb0;
    height: calc(15px + 16px);
    margin-top: calc(40px - (15px + 16px));
  }
  #custom-list option:nth-child(9) {
    background: #f80;
    height: calc(15px + 18px);
    margin-top: calc(40px - (15px + 18px));
  }
  #custom-list option:nth-child(10) {
    background: #ff5e00;
    height: calc(15px + 20px);
    margin-top: calc(40px - (15px + 20px));
  }
  #custom-list option:nth-child(11) {
    background: #ff0600;
    height: calc(15px + 22px);
    margin-top: calc(40px - (15px + 22px));
  }
  #custom-list option:nth-child(12) {
    background: #b51414;
    height: calc(15px + 24px);
    margin-top: calc(40px - (15px + 24px));
  }
`;
