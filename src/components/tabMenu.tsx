import { useState } from 'react';
import styled from 'styled-components';
import Grid from './grid';
import Peeds from './Peeds';

const TabMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0); // active를 담아줄 상태값
  const tabClickHandler = (index: number) => {
    setActiveIndex(index);
  }; // 저장된 인덱스 정보로 active 핸들링을 하기 위한 이벤트
  return (
    <Section>
      <TapMenu>
        <Li
          className={activeIndex === 0 ? 'is-active isToggle' : 'Nottoggle'}
          onClick={() => tabClickHandler(0)}
        >
          1
        </Li>
        <Li
          className={activeIndex === 1 ? 'is-active isToggle' : 'Nottoggle'}
          onClick={() => tabClickHandler(1)}
        >
          2
        </Li>
      </TapMenu>
      {activeIndex ? <Peeds /> : <Grid />}
    </Section>
  );
};
export default TabMenu;

const Section = styled.section`
  width: 100%;
  height: 50px;
`;

const TapMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .isToggle {
    color: red;
    font-weight: bold;
    transition: opacity 0.3s ease;
    border-bottom: 5px solid black;
  }
  .Nottoggle {
    opacity: 0.5;
  }
`;

const Li = styled.li`
  width: 250px;
  height: 50px;
  cursor: pointer;
`;
