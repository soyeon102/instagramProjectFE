import styled from 'styled-components';

const MyfeedProfile = () => {
  return (
    <StMyfeedProfile>
      <StProfilePicture>
        <StCircle />
      </StProfilePicture>

      <StProfileBox>
        <StName>
          <h1>baeji</h1>
        </StName>
        <StProfile>
          <StProfileText>
            <p>게시물 10</p>
          </StProfileText>

          <StProfileText>
            <p>팔로워 100</p>
          </StProfileText>

          <StProfileText>
            <p>팔로우 100</p>
          </StProfileText>
        </StProfile>
      </StProfileBox>
    </StMyfeedProfile>
  );
};

export default MyfeedProfile;

const StMyfeedProfile = styled.div`
  background-color: #fafafa;
  width: 880px;
  margin: 0 auto;
  padding: 30px;
  display: flex;
`;
const StProfilePicture = styled.div`
  margin-left: 50px;
`;
const StCircle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px dashed black;
`;
const StProfileBox = styled.div`
  margin-left: 50px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StName = styled.div`
  font-size: 25px;
`;
const StProfile = styled.div`
  margin-top: 20px;
  display: flex;
`;
const StProfileText = styled.div`
  margin-right: 30px;
`;
