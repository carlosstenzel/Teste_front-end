import { MdHelpOutline } from 'react-icons/md';
import Tooltip from '../../Tooltip';

import { Container } from './styles';

const DetailsFund = ({ fund }) => (
  <Container>
    <ul>
      <li>
        <strong>Cotização da aplicação:</strong>
        {fund.operability.application_quotation_days_str}
        <Tooltip
          title="Total de dias para que o valor aplicado
                            seja convertido em cotas do fundo."
        >
          <MdHelpOutline color="#9c9d9e" size={16} />
        </Tooltip>
      </li>
      <li>
        <strong>Cotização do resgate:</strong>
        {fund.operability.retrieval_quotation_days_str}
        <Tooltip
          title="Total de dias para que as cotas do fundo
                      sejam transformadas em valor monetário."
        >
          <MdHelpOutline color="#9c9d9e" size={16} />
        </Tooltip>
      </li>
      <li>
        <strong>Liquidação do resgate:</strong>
        {fund.operability.retrieval_liquidation_days_str}
        <Tooltip
          title="Total de dias após a conversão para que o
                      valor do resgate esteja disponível em sua
                      Subconta Órama."
        >
          <MdHelpOutline color="#9c9d9e" size={16} />
        </Tooltip>
      </li>
      <li>
        <strong>Taxa de administração:</strong> {fund.fees.administration_fee}
      </li>
    </ul>
    <p className="fund-link">
      <a
        href={`https://www.orama.com.br/investimentos/fundos-de-investimento/${fund.slug}`}
        target="_bank"
      >
        Conheça mais informações sobre este fundo
      </a>
    </p>
    <p className="fund-cnpj">
      <strong>CNPJ do fundo:</strong> {fund.cnpj}
    </p>
  </Container>
);

export default DetailsFund;
