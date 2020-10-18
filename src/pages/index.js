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
                      <Ranger
                        title="Aplicação mínima"
                        min="0"
                        max="50000"
                        step="100"
                        beforeText="R$"
                        afterText=",00"
                      />
                    </div>
                    <div className="medium-4 cell">
                      <RangerRisk title="Perfil de risco do fundo" />
                    </div>
                    <div className="medium-4 cell">
                      <Ranger
                        title="Prazo de resgate"
                        min="0"
                        max="365"
                        beforeText=""
                        afterText=" dias úteis"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p className="color-footer-card">
                <small>Horário limite de aplicação 12:00</small>
              </p>
            </div>
            <div className="card funds">
              <table>
                <thead>
                  <tr>
                    <th>Fundo</th>
                    <th>Data da cota</th>
                    <th>Mes (%)</th>
                    <th>2016 (%)</th>
                    <th>12 M (%)</th>
                    <th>Aplicação mínima (R$)</th>
                    <th>Prazo do resgate</th>
                    <th>Aplicar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="strategy-name">
                    <th colspan="8">RENDA FIXA</th>
                  </tr>
                  <tr className="strategy-funds">
                    <th colspan="8">Indexado soberano</th>
                  </tr>
                  <tr className="fund">
                    <td className="fund-name-cell">
                      <div className="fund-risk-cell">
                        <div class="fund-info-risk-level-1"></div>
                      </div>
                      <p>
                        Angá Portfólio FIM
                        <span className="fund-icons">
                          <MdStars
                            color="#639d31"
                            size={16}
                            data-title="Fundo para investidor qualificado"
                          />
                          <MdCheckCircle
                            color="#9c9d9e"
                            size={16}
                            data-title="Você já investe neste fundo."
                          />
                        </span>
                        <span className="fund-type">
                          Multimercado | Multimercado Livre
                        </span>
                      </p>
                    </td>
                    <td>29/04/2016</td>
                    <td>0,47</td>
                    <td>2,93</td>
                    <td>13,16</td>
                    <td>1.000,00</td>
                    <td>
                      <MdInfoOutline
                        color="#444"
                        size={18}
                        data-title="Dias para conversão do resgate"
                      />
                    </td>
                    <td>
                      <button
                        className="button small button-apply"
                        type="button"
                      >
                        <MdReply size={20} />
                      </button>
                    </td>
                  </tr>
                  <tr className="fund-detail">
                    <td colspan="9">
                      <div className="grid-container">
                        <div className="grid-x">
                          <div className="medium-6 small-12 cell"></div>
                          <div className="medium-6 small-12 cell">
                            <ul>
                              <li>
                                <strong>Cotização da aplicação:</strong>
                                D+0
                                <a href="#">
                                  <MdHelpOutline
                                    color="#9c9d9e"
                                    size={16}
                                    data-title="Total de dias para que o valor aplicado
                            seja convertido em cotas do fundo."
                                  />
                                </a>
                              </li>
                              <li>
                                <strong>Cotização do resgate:</strong>
                                D+30 (dias corridos)
                                <a href="" class="box-info bx--left">
                                  <MdHelpOutline
                                    color="#9c9d9e"
                                    size={16}
                                    data-title="Total de dias para que as cotas do fundo
                            sejam transformadas em valor monetário."
                                  />
                                </a>
                              </li>
                              <li>
                                <strong>Liquidação do resgate:</strong>
                                D+2 (dias úteis)
                                <a href="" class="box-info bx--right">
                                  <MdHelpOutline
                                    color="#9c9d9e"
                                    size={16}
                                    data-title="Total de dias após a conversão para que o
                            valor do resgate esteja disponível em sua
                            Subconta Órama."
                                  />
                                </a>
                              </li>
                              <li>
                                <strong>Taxa de administração:</strong> 3,00%
                              </li>
                            </ul>
                            <p className="fund-link">
                              <a href="#">
                                Conheça mais informações sobre este fundo
                              </a>
                            </p>
                            <p className="fund-cnpj">
                              <strong>CNPJ do fundo:</strong> 33.041.260/1223-59
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
