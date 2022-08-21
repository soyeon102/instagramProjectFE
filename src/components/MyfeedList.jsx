import styled, { css } from 'styled-components';
import { colors } from '../theme/theme';
import MyfeedCard from './MyfeedCard';
import { ReactComponent as IconPost } from '../assets/icon/icon-post.svg';
import { ReactComponent as IconHeart } from '../assets/icon/icon-small-heart.svg';
import { useState } from 'react';

const MyfeedList = () => {
  const [selectCategory, setSelectCategory] = useState(true);

  const feedImg = [
    {
      id: 1,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3l92E93XkhMDBXWDzuDLimxu4EcOpihu_GQ&usqp=CAU',
    },
    {
      id: 2,
      imgUrl:
        'https://i1.sndcdn.com/artworks-Z5SLEGyINrvdjrkz-CQbgFA-t500x500.jpg',
    },
    {
      id: 3,
      imgUrl:
        'https://i1.sndcdn.com/artworks-gVzXNjKiMNdDcdml-QsFSgA-t500x500.jpg',
    },
    {
      id: 4,
      imgUrl:
        'https://www.newsquest.co.kr/news/photo/202205/96478_80014_5020.jpeg',
    },
  ];

  return (
    <StMyFeed>
      <StCategories>
        <StCategory
          isSelect={selectCategory}
          onClick={() => {
            setSelectCategory(!selectCategory);
          }}
        >
          <IconPost />
          <p>게시물</p>
        </StCategory>
        <StCategory
          isSelect={selectCategory}
          onClick={() => {
            setSelectCategory(!selectCategory);
          }}
        >
          <IconHeart />
          <p>좋아요</p>
        </StCategory>
      </StCategories>
      <StFeedList>
        {feedImg.map((feed) => (
          <MyfeedCard key={feed.id} feed={feed} />
        ))}
      </StFeedList>
    </StMyFeed>
  );
};

export default MyfeedList;

const StMyFeed = styled.div`
  border-top: 1px solid ${colors.border};
  width: 100%;
  margin: 0 auto;
`;

const StCategories = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: center;
`;
const StCategory = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
  margin-top: -1px;
  cursor: pointer;

  ${(props) =>
    props.isSelect &&
    css`
      font-weight: bold;
      border-top: 1px solid ${colors.textBlack};
    `}

  svg {
    margin-right: 10px;
  }

  & + & {
    margin-left: 100px;
  }
`;

const StFeedList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 30px;
`;
