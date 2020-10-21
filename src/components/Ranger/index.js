import { useState } from 'react';
import { Input, Label, Container } from './styles';

function Ranger({ title, min, max, step, beforeText, afterText, type }) {
  const [valueRange, setValueRange] = useState(0);

  function CalcDays(index) {
    const daysRetrievel = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      9,
      10,
      12,
      13,
      14,
      15,
      17,
      18,
      19,
      20,
      21,
      26,
      27,
      28,
      29,
      30,
      31,
      33,
      37,
      42,
      44,
      45,
      50,
      57,
      58,
      59,
      60,
      89,
      90,
      91,
      119,
      120,
      179,
      180,
      270,
    ];

    setValueRange(daysRetrievel[index]);
  }

  function CalcAmount(index) {
    const Amount = [
      '25000.00',
      '15000.00',
      '10000.00',
      '5000.00',
      '1000.00',
      '500.00',
      '0.00',
      '1.00',
      '50000.00',
      '100.00',
      '3000.00',
      '20000.00',
      '2000.00',
      '100000.00',
      '250000.00',
      '500000.00',
      '30000.00',
      '2500.00',
    ];

    setValueRange(
      parseFloat(Amount[index]).toLocaleString('pt-br', {
        minimumFractionDigits: 2,
        style: 'currency',
        currency: 'BRL',
      })
    );
  }

  return (
    <>
      <Container>
        <Label>{title}</Label>
        <Input
          type="range"
          min={min}
          max={max}
          step={step}
          onChange={(e) => {
            type === 'days'
              ? CalcDays(e.target.value)
              : CalcAmount(e.target.value);
          }}
        />
        <p>
          Até {beforeText}
          {valueRange}
          {afterText}{' '}
        </p>
      </Container>
    </>
  );
}

export default Ranger;
