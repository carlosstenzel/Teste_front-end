import { useState } from 'react';
import { Input, Label, Container } from './styles';
import { Amount, daysRetrievel } from './rangeData';

function Ranger({
  title,
  min,
  max,
  step,
  beforeText,
  afterText,
  type,
  valueDefault,
  ...rest
}) {
  const [valueRange, setValueRange] = useState(valueDefault);

  function CalcDays(index) {
    setValueRange(daysRetrievel[index]);
  }

  function CalcAmount(index) {
    setValueRange(
      Amount[index].toLocaleString('pt-br', {
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
          {...rest}
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
