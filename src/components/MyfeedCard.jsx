import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const MyfeedCard = ({ article, handleMyCardClick }) => {
  return (
    <StCardBox onClick={handleMyCardClick}>
      <img src={article.imgUrl} alt='내 게시물 이미지' />
    </StCardBox>
  );
};

export default MyfeedCard;

const StCardBox = styled.div`
  width: 100%;
  height: 270px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
