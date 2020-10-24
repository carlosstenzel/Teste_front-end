import _ from 'lodash';

export default function formatFundsData(data) {
  const groupFilter = _.groupBy(data, 'specification.fund_macro_strategy.name');

  return Object.keys(groupFilter).map((nameMacro) => {
    const filterFundClass = _.groupBy(
      groupFilter[nameMacro],
      'specification.fund_main_strategy.name'
    );

    return {
      nameMacro,
      filterFundClass,
    };
  });
}
