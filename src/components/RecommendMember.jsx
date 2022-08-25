import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import defaultImg from '../assets/img/img-profile.jpg';
import { getUser } from '../redux/modules/userSlice';
import { getCookie } from '../shared/Cookie';
import { colors } from '../theme/theme';
import Member from './Member';

const RecommendMember = () => {
  const navigate = useNavigate();
  const [nick, setNick] = useState('');

  useEffect(() => {
    setNick(getCookie('nickname'));
  }, []);

  let data = [
    {
      id: 0,
      name: 'soyeon',
    },
    {
      id: 1,
      name: 'junsu',
    },
    {
      id: 2,
      name: 'baeji',
    },
  ];

  return (
    <StRecommendMember>
      <StMyNameBox>
        <StMyName>
          <MyProfileContainer>
            <img src={defaultImg} alt='프로필 사진' />
          </MyProfileContainer>
          <StText black fwNormal onClick={() => navigate('/myfeed')}>
            {nick}
          </StText>
        </StMyName>
        <StText>전환</StText>
      </StMyNameBox>

      <StRecommendText>회원님을 위한 추천</StRecommendText>

      {data.map((member) => (
        <Member key={member.id} memberName={member.name} />
      ))}
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

const StRecommendText = styled.div`
  color: ${colors.text};
  font-size: 14px;
  font-weight: bold;
`;
