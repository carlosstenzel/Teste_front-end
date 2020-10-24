import { Container } from './styles';
import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
  return (
    <Container>
      <div>
        <FaSpinner size={40} color="#36ff00" />
      </div>
    </Container>
  );
};

export default Loading;
