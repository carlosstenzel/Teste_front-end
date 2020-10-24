import { useEffect, useState } from 'react';

import Ranger from '../components/Ranger';
import { Amount, daysRetrievel } from '../components/Ranger/rangeData';
import RangerRisk from '../components/RangerRisk';
import { TableContainer } from '../components/Table';

import Legend from '../_layout/legend';
import HeaderContainer from '../_layout/headerContainer';
import FilterRendaFixa from '../_layout/filterRendaFixa';

import formatFundsData from '../utils/formatFundsData';

export default function Home({ data }) {
  const [funds, setFunds] = useState(null);

  useEffect(() => {
    setFunds(formatFundsData(data));
  }, [data]);

  const handleSearch = (name) => {
    setFunds(
      formatFundsData(
        data.filter((re) =>
          re.simple_name.toLowerCase().includes(name.toLowerCase())
        )
      )
    );
  };

  const handleChangeRisk = (numberRisk) => {
    setFunds(
      formatFundsData(
        data.filter(
          (re) =>
            re.specification.fund_risk_profile.score_range_order ===
            parseInt(numberRisk)
        )
      )
    );
  };

  const handleChangeDays = (days) => {
    setFunds(
      formatFundsData(
        data.filter(
          (re) =>
            re.operability.retrieval_quotation_days <=
            daysRetrievel[parseInt(days)]
        )
      )
    );
  };

  const handleChangeMinAmount = (amount) => {
    setFunds(
      formatFundsData(
        data.filter(
          (re) =>
            re.operability.minimum_initial_application_amount <=
            Amount[parseInt(amount)]
        )
      )
    );
  };

  return (
    <>
      <HeaderContainer />

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
            <FilterRendaFixa />
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
