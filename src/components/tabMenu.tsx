import { useState } from 'react';
import styled from 'styled-components';
import Grid from './grid';
import Peeds from './Peeds';
import { IoMdGrid } from 'react-icons/io';
import { BsViewList } from 'react-icons/bs';

const TabMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabClickHandler = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <Section>
      <TapMenu>
        <Li
          className={activeIndex === 0 ? 'is-active isToggle' : 'Nottoggle'}
          onClick={() => tabClickHandler(0)}
        >
          <IoMdGrid className='icon' />
        </Li>
        <Li
          className={activeIndex === 1 ? 'is-active isToggle' : 'Nottoggle'}
          onClick={() => tabClickHandler(1)}
        >
          <BsViewList className='icon' />
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
  width: 100%;
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    width: 30px;
    height: 30px;
    color: black;
  }
`;
