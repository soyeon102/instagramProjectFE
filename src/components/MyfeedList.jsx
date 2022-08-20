import styled, { css } from 'styled-components';
import { colors } from '../theme/theme';
import MyfeedCard from './MyfeedCard';
import { ReactComponent as IconPost } from '../assets/icon/icon-post.svg';
import { ReactComponent as IconHeart } from '../assets/icon/icon-small-heart.svg';
import { useState } from 'react';

const MyfeedList = () => {
  const feedImg = [
    {
      id: 1,
      img: 'img1',
    },
    {
      id: 2,
      img: 'img2',
    },
    {
      id: 3,
      img: 'img3',
    },
    {
      id: 4,
      img: 'img4',
    },
    {
      id: 5,
      img: 'img5',
    },
  ];

  return (
    <StMyFeed>
      <StCategories>
        <StCategory isSelect>
          <IconPost />
          <p>게시물</p>
        </StCategory>
        <StCategory>
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
