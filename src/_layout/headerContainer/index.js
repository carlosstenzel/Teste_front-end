import { Container } from './styles';

const HeaderContainer = () => (
  <Container>
    <div className="grid-x ">
      <div className="cell text-center">
        <h1 className="primary">Lista de Fundos de Investimento</h1>
        <p>Conheça a nossa lista de fundos</p>
      </div>
    </div>
  </Container>
);

export default HeaderContainer;
