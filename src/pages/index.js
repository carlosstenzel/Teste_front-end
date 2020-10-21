import {
  MdCheckCircle,
  MdReply,
  MdStars,
  MdHelpOutline,
  MdInfoOutline,
  MdBlock,
} from 'react-icons/md';
import Accordion from '../components/Accordion';
import Ranger from '../components/Ranger';
import RangerRisk from '../components/RangerRisk';
import { TableContainer } from '../components/Table';

import { HeaderContainer } from '../styles/pages/home';

export default function Home({ funds }) {
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
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-padding-y">
          <div className="medium-9 cell">
            <div className="card">
              <div className="grid-x">
                <div className="medium-12 cell">
                  <div className="grid-x">
                    <div className=" medium-7 large-7 cell">
                      <div className="input-group search">
                        <input
                          className="input-group-field search"
                          type="search"
                          name="search"
                          placeholder="Busque fundo por nome"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid-x grid-margin-x">
                    <div className="medium-4 cell">
                      <Ranger title="Aplicação mínima" min="0" max="17" />
                    </div>
                    <div className="medium-4 cell">
                      <RangerRisk title="Perfil de risco do fundo" />
                    </div>
                    <div className="medium-4 cell">
                      <Ranger
                        title="Prazo de resgate"
                        min="0"
                        max="42"
                        beforeText=""
                        afterText=" dias úteis"
                        type="days"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p className="color-footer-card">
                <small>Horário limite de aplicação 12:00</small>
              </p>
            </div>

            <TableContainer data={funds} />

            <div className="grid-x">
              <div className="medium-5 cell">
                <div className="card legenda">
                  <h6>Legenda</h6>

                  <ul>
                    <li>
                      <MdStars color="#639d31" size={25} />
                      Fundo para investidor qualificado
                    </li>
                    <li>
                      <MdCheckCircle color="#9c9d9e" size={25} />
                      Você já investe neste fundo
                    </li>
                    <li>
                      {' '}
                      <MdInfoOutline color="#444" size={25} />
                      Entenda o resgate deste fundo
                    </li>
                    <li>
                      <MdBlock color="#9c9d9e" size={25} /> Fundo fechado para
                      aplicação
                    </li>
                    <li>
                      <button
                        className="button small button-apply"
                        type="button"
                      >
                        <MdReply size={20} />
                      </button>
                      Aplicar neste fundo
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="medium-3 cell">
            <Accordion title="<input type='checkbox' id='checkboxAll' /> <label id='checkboxAll'>RENDA FIXA</label>">
              <ul>
                <li>
                  <input id="checkbox1" type="checkbox" />
                  <label htmlFor="checkbox1">Indexado Soberano</label>
                </li>
                <li>
                  <input type="checkbox" id="checkbox2" />
                  <label htmlFor="checkbox2">Renda Fixa</label>
                </li>
                <li>
                  <input type="checkbox" id="checkbox3" />
                  <label htmlFor="checkbox3">Renda Fixa Crédito Privado</label>
                </li>
                <li>
                  <input type="checkbox" id="checkbox4" />
                  <label htmlFor="checkbox4">Crédito Privado High Yield</label>
                </li>
                <li>
                  <input type="checkbox" id="checkbox5" />
                  <label htmlFor="checkbox5">Renda Fixa infação Soberano</label>
                </li>
                <li>
                  <input type="checkbox" id="checkbox6" />
                  <label htmlFor="checkbox6">Inflação Crédito Privado</label>
                </li>
              </ul>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}funds`);
  const funds = await res.json();

  return {
    props: {
      funds,
    },
    revalidate: 1, // In seconds
  };
}
