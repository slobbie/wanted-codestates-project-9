import styled from 'styled-components';
const Tag = () => {
  return (
    <>
      <Box>
        <Btn>최신순</Btn>
        <Btn>전체</Btn>
      </Box>
    </>
  );
};
export default Tag;

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: rgb(249, 249, 249);
`;

const Btn = styled.button`
  border-radius: 15px;
  height: 30px;
  border: none;
  background-color: #e7e8f9;
  color: #4348a2;
  margin: 0 5px 0 5px;
`;
