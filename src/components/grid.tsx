import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Data from '../data/data.json';
// import { detialReview } from '../redux/action';
import { RootState } from '../redux/reducers';
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

const Grid = () => {
  const dispatch = useDispatch();
  const reviewList: any = useSelector(
    (state: RootState) => state.review.review
  );
  console.log(reviewList);

  return (
    <Section>
      <Ul>
        {reviewList?.map((item: reviewListDataModel) => {
          return (
            <Link to={`/detail/${item.id}`} key={item.id}>
              <Li>
                <Img src={item.images[0].src} alt='사진' />
              </Li>
            </Link>
          );
        })}
        {Data.map((item) => {
          return (
            <Link to={`/detail/${item.id}`} key={item.id}>
              <Li>
                <Img src={item.src} alt='사진' />
              </Li>
            </Link>
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
