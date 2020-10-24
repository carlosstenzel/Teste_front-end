import Accordion from '../../components/Accordion';

const FilterRendaFixa = () => (
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
);

export default FilterRendaFixa;
