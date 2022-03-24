import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { addReview } from '../redux/action';
import moment from 'moment';
import { customAlphabet } from 'nanoid';
import { FiXCircle } from 'react-icons/fi';
import React from 'react';

const RegisterPage = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [photoAddList, setPhotoAddList] = useState<any>([]);
  const [starCount, setStarCount] = useState<number>(0);
  const navigate = useNavigate();
  const photoInput = React.useRef() as React.MutableRefObject<HTMLInputElement>;

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
  const nanoid = customAlphabet('0123456789', 6);

  const handleUploadClick = () => {
    photoInput.current.click();
  };
  // redux
  const dispatch = useDispatch();
  // id: shortid.generate(),

  const onSubmit = (e: any) => {
    e.preventDefault();

    dispatch(
      addReview({
        id: String(nanoid()),
        images: photoAddList,
        username: String(nanoid()),
        review: title,
        description: content,
        likes: '0',
        stars: starCount,
        comments: [],
        hashTags: [],
        createdAt: moment().format('YYYY-MM-DD'),
      })
    );
    navigate('/');
  };

  const handlePhoto = (e: any) => {
    const photoAdd = e.target.files;
    const temp = [];

    for (let i = 0; i < photoAdd.length; i += 1) {
      temp.push({
        id: i,
        // file: photoAdd[i],
        src: URL.createObjectURL(photoAdd[i]),
      });
    }
    setPhotoAddList(temp.concat(photoAddList));
  };
  const RemoveAdd = (deleteUrl: any) => {
    setPhotoAddList(
      photoAddList.filter((photo: any) => photo.url !== deleteUrl)
    );
  };

  console.log();
  return (
    <>
      <RegisterBox>
        <Container onSubmit={onSubmit}>
          <Top>
            <Btn onClick={onClickHome}>
              <IoIosArrowBack className='icon' />
            </Btn>
            <H2>리뷰 등록하기</H2>
          </Top>
          <InputBox>
            <Title>제목</Title>
            <Nameinput
              placeholder='리뷰 제목을 입력해주세요.'
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
            <Title>내용</Title>
            <Textinput
              placeholder='내용을 작성해주세요.'
              onChange={(e) => {
                setContent(e.target.value);
              }}
              value={content}
            />
          </InputBox>
          <ImgBox>
            <Title>이미지 업로드</Title>
            <ImgAdd
              type='file'
              accept='image/jpg,image/jpeg, image/png'
              multiple
              onChange={(e) => handlePhoto(e)}
              ref={photoInput}
              style={{ display: 'none' }}
            />
            <ImageAdd>
              <UploadButton onClick={handleUploadClick}>+</UploadButton>
              <ImageBox>
                {photoAddList.map((photo: any) => (
                  <PhotoBox key={photo.id}>
                    <PhotoPreview src={photo.src} />
                    <FiXCircle onClick={() => RemoveAdd(photo.src)} />
                  </PhotoBox>
                ))}
              </ImageBox>
            </ImageAdd>
          </ImgBox>
          <div>
            <Title>상품은 어떠셨나요?</Title>
          </div>
          <SubmitBtn type='submit'>등록하기</SubmitBtn>
        </Container>
      </RegisterBox>
    </>
  );
};

export default RegisterPage;

const RegisterBox = styled.section`
  position: absolute;
  margin: 0 auto;
  top: 0;
  max-width: 500px;
  width: 100%;
  height: 70vw;
  background-color: #fff;
`;

const Container = styled.form``;

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
  /* border: 1px solid black; */
  /* width: 150px;
  height: 150px; */
  cursor: pointer;
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

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PhotoBox = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin-right: 5px;
`;

const PhotoPreview = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageAdd = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UploadButton = styled.span`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  font-size: 3em;
  background: black;
  color: #fff;
  cursor: pointer;
`;
