import styled from 'styled-components';

const MyfeedCard = ({ feed }) => {
  return (
    <StCardBox>
      <StCard>{feed.img}</StCard>
    </StCardBox>
  );
};

export default MyfeedCard;

const StCardBox = styled.div``;
const StCard = styled.div`
  background-color: #efefef;
  width: 100%;
  height: 270px;
`;
