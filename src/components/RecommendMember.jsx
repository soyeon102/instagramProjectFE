import styled from 'styled-components';
import defaultImg from '../assets/img/img-profile.jpg';
import { colors } from '../theme/theme';

const RecommendMember = () => {
  return (
    <StRecommendMember>
      <StMyNameBox>
        <StMyName>
          <MyProfileContainer>
            <img src={defaultImg} alt='프로필 사진' />
          </MyProfileContainer>
          <StText black fwNormal>
            baeji
          </StText>
        </StMyName>
        <StText>전환</StText>
      </StMyNameBox>

      <StRecommendText>회원님을 위한 추천</StRecommendText>

      <StRecommendBox>
        <StRecommend>
          <ProfileContainer>
            <img src={defaultImg} alt='프로필 사진' />
          </ProfileContainer>
          <StText black>soyeon</StText>
        </StRecommend>
        <StText>팔로우</StText>
      </StRecommendBox>

      <StRecommendBox>
        <StRecommend>
          <ProfileContainer>
            <img src={defaultImg} alt='프로필 사진' />
          </ProfileContainer>
          <StText black>junsu</StText>
        </StRecommend>
        <StText>팔로우</StText>
      </StRecommendBox>

      <StRecommendBox>
        <StRecommend>
          <ProfileContainer>
            <img src={defaultImg} alt='프로필 사진' />
          </ProfileContainer>
          <StText black>yeongwoo</StText>
        </StRecommend>
        <StText>팔로우</StText>
      </StRecommendBox>
    </StRecommendMember>
  );
};

export default RecommendMember;

const StRecommendMember = styled.div`
  flex: 1;
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

const StText = styled.div`
  color: ${(props) => (props.black ? colors.textBlack : colors.primary)};
  font-weight: ${(props) => (props.fwNormal ? 'normal' : 'bold')};
  font-size: ${(props) => (props.black ? '14px' : '12px')};
  cursor: pointer;
`;

const MyProfileContainer = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  img {
    width: 100%;
  }
`;

const ProfileContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  img {
    width: 100%;
  }
`;

const StRecommendText = styled.div`
  color: ${colors.text};
  font-size: 14px;
  font-weight: bold;
`;
