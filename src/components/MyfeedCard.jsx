import styled from 'styled-components';

const MyfeedCard = () => {
  return (
    <StCardBox>
      <StCard />
      <StCard />
      <StCard />
    </StCardBox>
  );
};

export default MyfeedCard;

const StCardBox = styled.div`
  width: 880px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
const StCard = styled.div`
  border: 1px dashed black;
  width: 270px;
  height: 270px;
`;
