import { useState } from 'react';
import { Input, Label, Container } from './styles';

function Ranger({ title, min, max, step, beforeText, afterText }) {
  const [valueRange, setValueRange] = useState(0);

  return (
    <>
      <Container>
        <Label>{title}</Label>
        <Input
          type="range"
          min={min}
          max={max}
          step={step}
          onChange={(e) => setValueRange(e.target.value)}
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
