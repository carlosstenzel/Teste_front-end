import React, { useRef, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Section, Button, Title, Icon, Content } from './styles';

function Accordion({ before = null, title, children }) {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );
  }

  return (
    <Section>
      <Button className={`${setActive}`}>
        <Title>{title}</Title>
        <Icon>
          {setActive === 'active' ? (
            <FaMinus width={10} fill={'#444'} onClick={toggleAccordion} />
          ) : (
            <FaPlus width={10} fill={'#444'} onClick={toggleAccordion} />
          )}
        </Icon>
      </Button>
      <Content ref={content} style={{ maxHeight: `${setHeight}` }}>
        <div>{children}</div>
      </Content>
    </Section>
  );
}

export default Accordion;
