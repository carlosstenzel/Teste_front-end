import { Container } from './styles';

function Tooltip({ title, children, dark = true }) {
  return (
    <Container dark={dark}>
      {children}
      <span class="tooltiptext">{title}</span>
    </Container>
  );
}

export default Tooltip;
