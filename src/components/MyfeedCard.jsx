import styled from 'styled-components';

const MyfeedCard = ({ feed }) => {
  return (
    <StCardBox>
      <img src={feed.imgUrl} alt='내 게시물 이미지' />
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
