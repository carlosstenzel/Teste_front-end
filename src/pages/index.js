import { HeaderContainer } from '../styles/pages/home';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <div className="grid-x ">
          <div className="cell text-center">
            <h1 className="primary">Lista de Fundos de Investimento</h1>
            <p>Conheça a nossa lista de fundos</p>
          </div>
        </div>
      </HeaderContainer>
    </>
  );
}
