import Accordion from '../components/Accordion';
import Ranger from '../components/Ranger';

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
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-padding-y">
          <div className="medium-9 cell">
            <div className="card">
              <div className="grid-x">
                <div className="mediun-12 cell">
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
                      <Ranger
                        title="Aplicação mínima"
                        min="0"
                        max="50000"
                        step="100"
                        before="R$"
                        after=",00"
                      />
                    </div>
                    <div className="medium-4 cell"></div>
                    <div className="medium-4 cell">
                      <Ranger
                        title="Prazo de resgate"
                        min="0"
                        max="365"
                        before=""
                        after=" dias úteis"
                      />
                    </div>
                  </div>
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
