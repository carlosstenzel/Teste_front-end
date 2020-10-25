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

  const delayedQuery = useCallback(
    _.debounce((fn, q) => fn(q), 300),
    []
  );

  const { data } = useFecthFunds();

  useEffect(() => {
    setiIsSeach(true);
    if (data) {
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
        return delayedQuery(() => {
          setFunds(formatFundsData(filteredData));
        });
      }
    }

    setFunds(formatFundsData(data));
    setiIsLoading(false);
  }, [filterRisk, filterDays, filterMinimumAmount, data]);

  const handleChangeRisk = (numberRisk) => {
    setFilterRisk(numberRisk);
  };

  const handleChangeDays = (days) => {
    setFilterDays(days);
  };

  const handleChangeMinAmount = (amount) => {
    setFilterMinimumAmount(amount);
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

  return [
    handleSearch,
    handleChangeRisk,
    handleChangeDays,
    handleChangeMinAmount,
    funds,
    isLoading,
    isSearch,
  ];
}
