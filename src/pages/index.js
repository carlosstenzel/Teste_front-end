import { Ranger, RangerRisk, TableContainer } from '../components';

import { HeaderContainer, Legend, FilterRendaFixa, Loading } from '../_layout';

import useFundsServices from '../hooks/useFundsServices';

export default function Home() {
  const [
    handleSearch,
    handleChangeRisk,
    handleChangeDays,
    handleChangeMinAmount,
    funds,
    isLoading,
    isSearch,
  ] = useFundsServices();

  if (isLoading) {
    return <Loading />;
  }

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
            <TableContainer data={funds} search={isSearch} />
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
