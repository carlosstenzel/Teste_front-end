import React, { useState, useEffect } from 'react';
import Accordion from '../Accordion';

const FilterRendaFixa = ({ handlerFilter }) => {
  const [filters, setFilters] = useState({
    checkAll: false,
    selectedFilters: [
      { id: 'Renda Fixa Global', value: 'Renda Fixa Global', isChecked: false },
      {
        id: 'Cotas de FIDCs Próprios',
        value: 'Cotas de FIDCs Próprios',
        isChecked: false,
      },
      { id: 'Crédito Privado', value: 'Crédito Privado', isChecked: false },
      {
        id: 'Tesouro Inflação + Juros',
        value: 'Tesouro Inflação + Juros',
        isChecked: false,
      },
      { id: 'Renda Fixa', value: 'Direitos Creditórios', isChecked: false },
      {
        id: 'Direitos Creditórios',
        value: 'Direitos Creditórios',
        isChecked: false,
      },
      {
        id: 'Cotas de FIDCs Multigestor',
        value: 'Cotas de FIDCs Multigestor',
        isChecked: false,
      },
      {
        id: 'Renda Fixa Prefixado',
        value: 'Renda Fixa Prefixado',
        isChecked: false,
      },
      {
        id: 'Debêntures Isentas',
        value: 'Debêntures Isentas',
        isChecked: false,
      },
      {
        id: 'Crédito Privado High Grade',
        value: 'Crédito Privado High Grade',
        isChecked: false,
      },
      { id: 'Tesouro Selic', value: 'Tesouro Selic', isChecked: false },
    ],
  });

  function onHandleAllCheckbox(e) {
    let checked = e.target.checked;
    let checkedFilters = filters.selectedFilters.slice();
    checkedFilters.forEach((checkFilter) => {
      checkFilter.isChecked = checked;
    });
    setFilters({
      ...filters,
      checkAll: !filters.checkAll,
      selectedFilters: checkedFilters,
    });
  }

  function onHandleCheckbox(e) {
    let { value, checked } = e.target;
    let checkedFilters = filters.selectedFilters.slice();

    checkedFilters.forEach((checkFilter) => {
      if (value === checkFilter.value) {
        checkFilter.isChecked = checked;
      }
    });

    let allCheck = checkedFilters.every((checkFilter) => checkFilter.isChecked);

    setFilters({
      checkAll: allCheck,
      selectedFilters: checkedFilters,
    });
  }

  useEffect(() => {
    handlerFilter(filters);
  }, [filters]);

  return (
    <Accordion
      title={
        <>
          <input
            type="checkbox"
            onChange={onHandleAllCheckbox}
            value="checkall"
            id="checkall"
            checked={filters.checkAll}
          />
          <label htmlFor="checkall">RENDA FIXA</label>
        </>
      }
    >
      <ul>
        {filters.selectedFilters.map((filter) => {
          return (
            <li key={filter.id}>
              <input
                type="checkbox"
                onChange={onHandleCheckbox}
                value={filter.value}
                id={filter.id}
                checked={filter.isChecked}
              />
              <label htmlFor={filter.id}>{filter.value}</label>
            </li>
          );
        })}
      </ul>
    </Accordion>
  );
};
export default FilterRendaFixa;
