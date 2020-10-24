import { useEffect, useState, useCallback } from 'react';
import _ from 'lodash';

import useFecthFunds from './useFetchFunds';

import { Amount, daysRetrievel } from '../components/Ranger/rangeData';

import { formatFundsData } from '../utils';

export default function useFundsServices() {
  const [isLoading, setiIsLoading] = useState(true);

  const [funds, setFunds] = useState(null);

  const delayedQuery = useCallback(
    _.debounce((fn, q) => fn(q), 300),
    []
  );

  const { data } = useFecthFunds();

  useEffect(() => {
    function fetchData() {
      setFunds(formatFundsData(data));
      _.delay(() => {
        setiIsLoading(false);
      }, 400);
    }
    fetchData();
  }, [data]);

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

  const handleChangeRisk = (numberRisk) => {
    delayedQuery((numberRisk) => {
      setFunds(
        formatFundsData(
          data.filter(
            (re) =>
              re.specification.fund_risk_profile.score_range_order ===
              parseInt(numberRisk)
          )
        )
      );
    }, numberRisk);
  };

  const handleChangeDays = (days) => {
    delayedQuery((days) => {
      setFunds(
        formatFundsData(
          data.filter(
            (re) =>
              re.operability.retrieval_quotation_days <=
              daysRetrievel[parseInt(days)]
          )
        )
      );
    }, days);
  };

  const handleChangeMinAmount = (amount) => {
    delayedQuery((amount) => {
      setFunds(
        formatFundsData(
          data.filter(
            (re) =>
              re.operability.minimum_initial_application_amount <=
              Amount[parseInt(amount)]
          )
        )
      );
    }, amount);
  };

  return [
    handleSearch,
    handleChangeRisk,
    handleChangeDays,
    handleChangeMinAmount,
    funds,
    isLoading,
  ];
}
