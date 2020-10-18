import { useState } from 'react';
import { Input, Label, Container } from './styles';

function Ranger({ title, min, max, step, before, after }) {
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
          Até {before}
          {valueRange}
          {after}{' '}
        </p>
      </Container>
    </>
  );
}

export default Ranger;
