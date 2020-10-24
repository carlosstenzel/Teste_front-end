import { FaSpinner } from 'react-icons/fa';
import { Container } from './styles';

const SpinnerTable = () => (
  <tr className="strategy-funds nonefunds">
    <th colSpan="8">
      <Container>
        <FaSpinner size={38} color="#444" />
      </Container>
    </th>
  </tr>
);

export default SpinnerTable;
