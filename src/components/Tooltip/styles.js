import styled from 'styled-components';

export const Container = styled.span`
  position: absolute;
  display: inline-block;
  cursor: pointer;

  .tooltiptext {
    visibility: hidden;
    width: 220px;
    background-color: ${(props) => (props.dark ? '#555555' : '#f7f7f7')};
    color: ${(props) => (props.dark ? '#ffffff' : '#4444444')};
    font-size: 12px;
    text-align: center;
    padding: 10px;
    border-radius: 6px;

    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -100px;

    opacity: 0;
    transition: opacity 0.3s;
  }

  /* Tooltip arrow */
  .tooltiptext::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${(props) => (props.dark ? '#555555' : '#f7f7f7')} transparent
      transparent transparent;
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  &:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;
