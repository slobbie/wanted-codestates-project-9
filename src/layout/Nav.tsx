import styled from 'styled-components';

const Nav = () => {
  return (
    <NavBar>
      <Logo src='https://i.balaan.io/mobile/img/icon/ico_logo.png'></Logo>
      <Box>
        <span className='box_span'>리뷰</span>
        <button className='box_btn'>리뷰등록</button>
      </Box>
    </NavBar>
  );
};
export default Nav;

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
  /* border: 1px solid black; */
  box-shadow: rgb(0 0 0 / 20%) 0px 4px 4px -4px;
`;

const Logo = styled.img`
  max-width: 200px;
  margin-top: 20px;
`;

const Box = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  .box_span {
    margin-bottom: 10px;
    margin-left: 20px;
    margin-right: auto;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  .box_btn {
    margin-right: 20px;
    margin-bottom: 10px;
    width: 70px;
    height: 30px;
    border-radius: 15px;
    border: none;
    background-color: black;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
  }
`;
