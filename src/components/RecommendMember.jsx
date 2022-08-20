import styled from 'styled-components';

const RecommendMember = () => {
  return (
    <StRecommendMember>
      <StMyNameBox>
        <StMyName>
          <StCircle />
          <h3 style={{ fontWeight: '550' }}>baeji</h3>
        </StMyName>
        <p style={{ color: '#0095f6', fontWeight: 'bold' }}>전환</p>
      </StMyNameBox>

      <p style={{ color: '#8e8e8e', fontWeight: 'bold' }}>회원님을 위한 추천</p>

      <StRecommendBox>
        <StRecommend>
          <StRecommendCircle />
          <p style={{ fontWeight: 'bold' }}>soyeon</p>
        </StRecommend>
        <p style={{ color: '#0095f6', fontWeight: 'bold' }}>팔로우</p>
      </StRecommendBox>

      <StRecommendBox>
        <StRecommend>
          <StRecommendCircle />
          <p style={{ fontWeight: 'bold' }}>junsu</p>
        </StRecommend>
        <p style={{ color: '#0095f6', fontWeight: 'bold' }}>팔로우</p>
      </StRecommendBox>

      <StRecommendBox>
        <StRecommend>
          <StRecommendCircle />
          <p style={{ fontWeight: 'bold' }}>yeongwoo</p>
        </StRecommend>
        <p style={{ color: '#0095f6', fontWeight: 'bold' }}>팔로우</p>
      </StRecommendBox>
    </StRecommendMember>
  );
};

export default RecommendMember;

const StRecommendMember = styled.div`
  background-color: #fafafa;
  width: 400px;
  margin: 0 auto;
  padding: 20px;
`;
const StMyNameBox = styled.div`
  margin-bottom: 20px;
  display: flex;
  line-height: 60px;
  text-align: center;
  justify-content: space-between;
`;
const StMyName = styled.div`
  display: flex;
`;
const StCircle = styled.div`
  width: 60px;
  height: 60px;
  border: 1px dashed black;
  border-radius: 50%;
  margin-right: 10px;
`;
const StRecommendBox = styled.div`
  margin-top: 20px;
  display: flex;
  line-height: 30px;
  text-align: center;
  justify-content: space-between;
`;
const StRecommend = styled.div`
  display: flex;
  line-height: 30px;
  text-align: center;
`;
const StRecommendCircle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px dashed black;
  margin-right: 10px;
`;
