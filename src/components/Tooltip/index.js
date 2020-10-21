import { Container } from './styles';

function Tooltip({ title, children, dark = true }) {
  return (
    <Container dark={dark}>
      <React.Fragment>
        {children}

        <strong className="tooltiptext">{title}</strong>
      </React.Fragment>
    </Container>
  );
}

export default Tooltip;
