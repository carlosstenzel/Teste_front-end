import { useEffect, useState } from 'react';
import _ from 'lodash';

import Accordion from '../components/Accordion';
import Ranger from '../components/Ranger';
import { Amount, daysRetrievel } from '../components/Ranger/rangeData';
import RangerRisk from '../components/RangerRisk';
import { TableContainer } from '../components/Table';
import Legend from '../_layout/legend';

import { HeaderContainer } from '../styles/pages/home';

export default function Home({ data }) {
  const [funds, setFunds] = useState(null);

  const FormatData = (data) => {
    const response = _.groupBy(data, 'specification.fund_macro_strategy.name');

    const filterWithclass = Object.keys(response).map((nameMacro) => {
      const filterFundClass = _.groupBy(
        response[nameMacro],
        'specification.fund_main_strategy.name'
      );

      let filterFunds = {
        nameMacro,
        filterFundClass,
      };

      return filterFunds;
    });

    return filterWithclass;
  };

  useEffect(() => {
    setFunds(FormatData(data));
  }, [data]);

  const handleSearch = (name) => {
    const filterPerRisk = data.filter((re) =>
      re.simple_name.toLowerCase().includes(name.toLowerCase())
    );

    const response = FormatData(filterPerRisk);

    setFunds(response);
  };

  const handleChangeRisk = (numberRisk) => {
    const filterPerRisk = data.filter(
      (re) =>
        re.specification.fund_risk_profile.score_range_order ===
        parseInt(numberRisk)
    );

    const response = FormatData(filterPerRisk);

    setFunds(response);
  };

  const handleChangeDays = (days) => {
    const filterPerDays = data.filter(
      (re) =>
        re.operability.retrieval_quotation_days <= daysRetrievel[parseInt(days)]
    );

    const response = FormatData(filterPerDays);

    setFunds(response);
  };

  const handleChangeMinAmount = (amount) => {
    const filterPerMinAmount = data.filter(
      (re) =>
        re.operability.minimum_initial_application_amount <=
        Amount[parseInt(amount)]
    );

    const response = FormatData(filterPerMinAmount);

    setFunds(response);
  };

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
          <div className="small-12 medium-12 large-9 cell">
            <div className="card">
              <div className="grid-x">
                <div className="small-12 medium-12 cell">
                  <div className="grid-x">
                    <div className="small-12 medium-7 large-7 cell">
                      <div className="input-group search">
                        <input
                          className="input-group-field search"
                          type="search"
                          name="search"
                          placeholder="Busque fundo por nome"
                          onChange={(e) => handleSearch(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid-x grid-margin-x hidden-small">
                    <div className="medium-4 cell">
                      <Ranger
                        title="Aplicação mínima"
                        min="0"
                        max="17"
                        valueDefault="R$ 25.000,00"
                        onInput={(e) => handleChangeMinAmount(e.target.value)}
                      />
                    </div>
                    <div className="medium-4 cell">
                      <RangerRisk
                        title="Perfil de risco do fundo"
                        onInput={(e) => handleChangeRisk(e.target.value)}
                      />
                    </div>
                    <div className="medium-4 cell">
                      <Ranger
                        title="Prazo de resgate"
                        min="0"
                        max="42"
                        valueDefault="30"
                        beforeText=""
                        afterText=" dias úteis"
                        type="days"
                        onInput={(e) => handleChangeDays(e.target.value)}
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
            <Legend />
          </div>
          <div className="small-12 medium-3 cell hidden-small hidden-medium">
            <Accordion
              title={
                <>
                  <input type="checkbox" id="checkboxAll" />{' '}
                  <label id="checkboxAll">RENDA FIXA</label>
                </>
              }
            >
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
      data: funds,
    },
    revalidate: 1, // In seconds
  };
}
