import Head from 'next/head';
import { Container } from './styles';

const HeaderContainer = () => (
  <>
    <Head>
      <title>Lista de Fundos de Investimento | Órama Investimentos</title>
      <meta
        name="description"
        content="Conheça a lista de fundos disponíveis na Órama Investimentos. Renda fixa, variável e estratégias diferenciadas."
      />
    </Head>
    <Container>
      <div className="grid-x ">
        <div className="cell text-center">
          <h1 className="primary">Lista de Fundos de Investimento</h1>
          <p>Conheça a nossa lista de fundos</p>
        </div>
      </div>
    </Container>
  </>
);

export default HeaderContainer;
