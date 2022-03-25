import styled from 'styled-components';
import Data from '../data/data.json';
import { FiThumbsUp, FiShare2, FiHeart } from 'react-icons/fi';
import Stars from './Star';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface imgesDataModel {
  id: number;
  src: string;
}
interface reviewListDataModel {
  comments: [];
  createdAt: string;
  description: string;
  hashTags: [];
  id: string;
  images: imgesDataModel[];
  likes: string;
  review: string;
  stars: number;
  username: string;
}

const Peeds = () => {
  const [Toggle, setToggle] = useState(false);
  const [itemLists, setItemLists] = useState(Data);
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollEnd = useRef<any>();
  const tabClickHandler = (e: any) => {
    setToggle((prev) => !prev);
  };
  const navigata = useNavigate();

  return (
    <Section>
      {itemLists.map((peed) => {
        return (
          <Link to={`/datail/${peed.id}`}>
            <PeedBox>
              <Top>
                <NickName>{peed.username}</NickName>
                <Day>{peed.createdAt}</Day>
              </Top>
              <Img src={peed.src} />
              <IconBox>
                <FiThumbsUp className='icon Like' />
                <FiShare2 className='icon Share' />
                <FiHeart
                  className={
                    Toggle ? 'is-active icon Heart black' : 'icon Heart'
                  }
                  onClick={tabClickHandler}
                />
              </IconBox>
              <P>{peed.likes}</P>
              <Stars stars={peed.stars} />
              <Desc>구매옵션{peed.description}</Desc>
              <Review>{peed.review}</Review>
              <CommentBox>
                <InputBox>
                  <input className='input' placeholder='댓글달기' />
                  <button className='Btn'>게시</button>
                </InputBox>
              </CommentBox>
            </PeedBox>
          </Link>
        );
      })}

      <div ref={scrollEnd}></div>
    </Section>
  );
};
export default Peeds;

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
