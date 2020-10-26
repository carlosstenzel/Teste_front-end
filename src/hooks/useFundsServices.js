import { useEffect, useState, useCallback } from 'react';
import _ from 'lodash';

import useFecthFunds from './useFetchFunds';

import { Amount, daysRetrievel } from '../components/Ranger/rangeData';

import { formatFundsData } from '../utils';

export default function useFundsServices() {
  const [isLoading, setiIsLoading] = useState(true);
  const [isSearch, setiIsSeach] = useState(false);

  const [funds, setFunds] = useState(null);
  const [filterRisk, setFilterRisk] = useState(null);
  const [filterDays, setFilterDays] = useState(null);
  const [filterMinimumAmount, setFilterMinimumAmount] = useState(null);

  const [dataFunds, setDataFunds] = useState();

  const delayedQuery = useCallback(
    _.debounce((fn, q) => fn(q), 300),
    []
  );

  const { data } = useFecthFunds();

  useEffect(() => {
    if (isSearch) {
      let filteredData = data;
      if (filterRisk) {
        filteredData = filterPerRisk(filteredData);
      }
      if (filterDays) {
        filteredData = filterPerDays(filteredData);
      }
      if (filterMinimumAmount) {
        filteredData = filterPerMinAmount(filteredData);
      }
      if (filteredData) {
        setDataFunds(filteredData);
        return delayedQuery(() => {
          setFunds(formatFundsData(filteredData));
        });
      }
    }
    setDataFunds(data);
    setFunds(formatFundsData(data));
    setiIsLoading(false);
  }, [filterRisk, filterDays, filterMinimumAmount, data]);

  const handleChangeRisk = (numberRisk) => {
    setFilterRisk(numberRisk);
    setiIsSeach(true);
  };

  const handleChangeDays = (days) => {
    setFilterDays(days);
    setiIsSeach(true);
  };

  const handleChangeMinAmount = (amount) => {
    setFilterMinimumAmount(amount);
    setiIsSeach(true);
  };

  const handleSearch = (name) => {
    delayedQuery((name) => {
      setFunds(
        formatFundsData(
          data.filter((re) =>
            re.simple_name.toLowerCase().includes(name.toLowerCase())
          )
        )
      );
    }, name);
  };

  const filterPerRisk = (filterData) =>
    filterData.filter(
      (re) =>
        re.specification.fund_risk_profile.score_range_order ===
        parseInt(filterRisk)
    );

  const filterPerDays = (filterData) =>
    filterData.filter(
      (re) =>
        re.operability.retrieval_quotation_days <=
        daysRetrievel[parseInt(filterDays)]
    );

  const filterPerMinAmount = (filterData) =>
    filterData.filter(
      (re) =>
        re.operability.minimum_initial_application_amount <=
        Amount[parseInt(filterMinimumAmount)]
    );

  const filterFundsPerMacro = (macro) => {
    delayedQuery((macro) => {
      if (macro.checkAll) {
        return setFunds(
          formatFundsData(dataFunds).filter(
            (fund) => fund.nameMacro === 'Renda Fixa'
          )
        );
      }

      const selectedMacros = macro.selectedFilters
        .filter((filter) => filter.isChecked)
        .map((filter) => filter.id);

      if (selectedMacros?.length > 0) {
        let filteredData = dataFunds;

        selectedMacros.map((submacro) => {
          filteredData = dataFunds.filter(
            (re) => (re.specification.fund_main_strategy.name = submacro)
          );
        });

        return setFunds(formatFundsData(filteredData));
      }

      setFunds(formatFundsData(dataFunds));
    }, macro);
  };

  return [
    handleSearch,
    handleChangeRisk,
    handleChangeDays,
    handleChangeMinAmount,
    filterFundsPerMacro,
    funds,
    isLoading,
    isSearch,
  ];
}
