import styled from 'styled-components';

const Filter = () => {
  return (
    <>
      <Box>
        <Btn>정렬</Btn>
      </Box>
    </>
  );
};
export default Filter;

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
`;

const Btn = styled.button`
  border-radius: 15px;
  width: 50px;
  height: 30px;
  border: none;
  background-color: #fff;
  color: #4348a2;
  margin: 0 5px 0 5px;
`;
