import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';

const RegisterPage = () => {
  const [photoAddList, setPhotoAddList] = useState([]);
  const navigate = useNavigate();
  const photoInput = useRef(null);
  const onClickHome = () => {
    navigate('/');
  };
  // 스크린의 스크롤을 막기위한 이벤트
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  return (
    <>
      <RegisterBox>
        <Top>
          <Btn onClick={onClickHome}>
            <IoIosArrowBack className='icon' />
          </Btn>
          <H2>리뷰 등록하기</H2>
        </Top>
        <InputBox>
          <Title>제목</Title>
          <Nameinput placeholder='리뷰 제목을 입력해주세요.' />
          <Title>내용</Title>
          <Textinput placeholder='내용을 작성해주세요.' />
        </InputBox>
        <ImgBox>
          <Title>이미지 업로드</Title>
          <ImgAdd
            type='file'
            accept='image/jpg,image/jpeg, image/png'
            multiple
            ref={photoInput}
          />
        </ImgBox>
        <div>
          <Title>상품은 어떠셨나요?</Title>
        </div>
        <SubmitBtn>등록하기</SubmitBtn>
      </RegisterBox>
    </>
  );
};

export default RegisterPage;

const RegisterBox = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 0;
  max-width: 500px;
  width: 100%;
  height: 70vw;
  background-color: #fff;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H2 = styled.h2`
  margin: 0 auto;
  font-size: 20px;
  font-weight: bold;
`;

const Btn = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  .icon {
    width: 30px;
    height: 30px;
  }
`;

const InputBox = styled.div`
  width: 100%;
  margin: 20px;
`;

const Nameinput = styled.input`
  width: 90%;
  height: 60px;
  margin-bottom: 40px;
  border: 1px solid rgb(157, 166, 169);
`;

const Textinput = styled.input`
  width: 90%;
  height: 100px;
  border: 1px solid rgb(157, 166, 169);
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

const ImgBox = styled.div`
  margin: 20px;
`;

const ImgAdd = styled.input`
  border: 1px solid black;
  width: 150px;
  height: 150px;
`;

const SubmitBtn = styled.button`
  margin: 20px;
  width: 90%;
  height: 80px;
  border: none;
  background-color: black;
  color: #fff;
  font-size: 20px;
  border-radius: 8px;
  cursor: pointer;
`;
