import styled from 'styled-components';
import Data from '../data/data.json';
import { FiThumbsUp, FiShare2, FiHeart } from 'react-icons/fi';
import Stars from './Star';
import { useState } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Peeds from './Peeds';

const Detail = () => {
  const [Toggle, setToggle] = useState(false); // active를 담아줄 상태값
  const tabClickHandler = (e: any) => {
    setToggle((prev) => !prev);
  }; // 저장된 인덱스 정보로 active 핸들링을 하기 위한 이벤트
  const matchId = useMatch('/detail/:id');
  const matchData =
    matchId?.params.id &&
    Data?.find((peed: any) => peed.id + '' === matchId?.params.id);
  console.log(matchData);
  return (
    <Section>
      {matchData && (
        <>
          <PeedBox>
            <Top>
              <NickName>{matchData.username}</NickName>
              <Day>{matchData.createdAt}</Day>
            </Top>
            <Img src={matchData.src} />
            <IconBox>
              <FiThumbsUp className='icon Like' />
              <FiShare2 className='icon Share' />
              <FiHeart
                className={Toggle ? 'is-active icon Heart black' : 'icon Heart'}
                onClick={tabClickHandler}
              />
            </IconBox>
            <P>{matchData.likes}</P>
            <Stars stars={matchData.stars} />
            <Desc>구매옵션{matchData.description}</Desc>
            <Review>{matchData.review}</Review>
            <CommentBox>
              <InputBox>
                <input className='input' placeholder='댓글달기' />
                <button className='Btn'>게시</button>
              </InputBox>
            </CommentBox>
          </PeedBox>
        </>
      )}
      <Peeds />
    </Section>
  );
};
export default Detail;

const Section = styled.section`
  width: 100%;
  background-color: #fff; ;
`;

const PeedBox = styled.div`
  max-width: 500px;
  width: 500px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
`;

const NickName = styled.h3`
  margin-left: 20px;
`;

const Day = styled.p`
  margin-right: 20px;
`;

const Img = styled.img`
  max-width: 500px;
  width: 500px;
  height: 100%;
`;

const IconBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    width: 25px;
    height: 25px;
    margin: 0 20px 0 20px;
  }
  .like {
    fill: rgb(229, 229, 229);
    color: transparent;
    margin-bottom: 10px;
  }
  .Heart {
    margin-left: auto;
    margin-right: 30px;
    fill: rgb(229, 229, 229);
    color: transparent;
  }
  .black {
    fill: black;
  }
`;

const P = styled.p`
  margin-left: 24px;
`;

const Desc = styled.p`
  margin-top: 30px;
  margin-left: 20px;
  color: rgb(153, 153, 153);
  font-size: 12px;
`;

const Review = styled.p`
  margin-top: 30px;
  margin-left: 20px;
  color: black;
  font-size: 14px;
  font-weight: 500;
`;

const CommentBox = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 70px;
  background: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputBox = styled.div`
  max-width: 400px;
  width: 100%;
  height: 40px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .input {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: none;
    outline: none;
    margin-left: 20px;
  }
  .Btn {
    width: 50px;
    height: 25px;
    border: none;
    background-color: black;
    color: #fff;
    border-radius: 10px;
    margin-right: 10px;
  }
`;
