import styled from 'styled-components';
import defaultImg from '../assets/img/img-profile.jpg';
import { colors } from '../theme/theme';

const Member = ({ memberName }) => {
  return (
    <>
      <StRecommendBox>
        <StRecommend>
          <ProfileContainer>
            <img src={defaultImg} alt='프로필 사진' />
          </ProfileContainer>
          <StText black>{memberName}</StText>
        </StRecommend>
        <StText>팔로우</StText>
      </StRecommendBox>
    </>
  );
};

export default Member;

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
