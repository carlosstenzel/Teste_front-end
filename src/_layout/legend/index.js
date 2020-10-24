import {
  MdCheckCircle,
  MdReply,
  MdStars,
  MdInfoOutline,
  MdBlock,
} from 'react-icons/md';

import { Container } from './styles';

export default function Legend() {
  return (
    <div className="grid-x hidden-small">
      <div className="medium-12 large-5 cell">
        <Container className="card">
          <h6>Legenda</h6>
          <ul>
            <li>
              <MdStars color="#639d31" size={25} />
              Fundo para investidor qualificado
            </li>
            <li>
              <MdCheckCircle color="#9c9d9e" size={25} />
              Você já investe neste fundo
            </li>
            <li>
              <MdInfoOutline color="#444" size={25} />
              Entenda o resgate deste fundo
            </li>
            <li>
              <MdBlock color="#9c9d9e" size={25} /> Fundo fechado para aplicação
            </li>
            <li>
              <button className="button small button-apply" type="button">
                <MdReply size={20} />
              </button>
              Aplicar neste fundo
            </li>
          </ul>
        </Container>
      </div>
    </div>
  );
}
