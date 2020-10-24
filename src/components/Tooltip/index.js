import { Container } from './styles';

function Tooltip({ title, children, dark = true, ...rest }) {
  return (
    <Container dark={dark} {...rest}>
      <React.Fragment>
        {children}

        <strong className="tooltiptext">{title}</strong>
      </React.Fragment>
    </Container>
  );
}

export default Tooltip;
