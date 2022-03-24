import styled from 'styled-components';
import Data from '../data/data.json';

const Grid = () => {
  return (
    <Section>
      <Ul>
        {Data.map((item) => {
          return (
            <Li key={item.id}>
              <Img src={item.src} alt='사진' />
            </Li>
          );
        })}
      </Ul>
    </Section>
  );
};
export default Grid;

const Section = styled.section`
  width: 500px;
  height: 100vw;
  background-color: #fff; ;
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
`;

const Li = styled.li`
  width: calc(166px);
  height: calc(166px);
`;

const Img = styled.img`
  width: calc(166px);
  height: calc(166px);
`;
