import { FiStar } from 'react-icons/fi';
import styled from 'styled-components';

const Stars = ({ stars }: any) => {
  const blackArr = Array.from({ length: stars }, (v, i) => i);
  const whiteArr = Array.from({ length: 5 - stars }, (v, i) => i);
  return (
    <Rating>
      {blackArr.map((index) => (
        <FiStar className='icon black' key={index} />
      ))}
      {whiteArr.map((idx) => {
        const index = idx + 1;
        return <FiStar className='icon white' key={index} />;
      })}
    </Rating>
  );
};

export default Stars;

const Rating = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  .icon {
    width: 38px;
    height: 38px;
  }
  .black {
    fill: rgb(1, 0, 0);
    color: transparent;
  }
  .white {
    fill: rgb(229, 229, 229);
    color: transparent;
  }
`;
