import styled from 'styled-components';
import defaultImg from '../assets/img/img-profile.jpg';
import { colors } from '../theme/theme';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __readMyArticles } from '../redux/modules/myArticleSlice';
import { getCookie } from '../shared/Cookie';

const MyfeedProfile = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.myArticle.myArticles);
  const { isLoading } = useSelector((state) => state.myArticle);

  const nickname = getCookie('nickname');

  useEffect(() => {
    dispatch(__readMyArticles());
  }, [dispatch]);

  return (
    <StMyfeedProfile>
      <ProfileContainer>
        <StProfilePicture>
          <img src={defaultImg} alt='프로필 이미지' />
        </StProfilePicture>
      </ProfileContainer>

      <StProfileBox>
        <StName>{nickname}</StName>
        <StProfile>
          <StProfileText>
            게시물<span>{userInfo.length}</span>
          </StProfileText>

          <StProfileText>
            팔로워<span>100</span>
          </StProfileText>

          <StProfileText>
            팔로우<span>100</span>
          </StProfileText>
        </StProfile>
      </StProfileBox>
    </StMyfeedProfile>
  );
};

export default MyfeedProfile;

const StMyfeedProfile = styled.div`
  margin-top: 94px;
  margin-bottom: 44px;
  display: flex;
`;

const ProfileContainer = styled.div`
  width: 295px;
  margin-right: 30px;
  display: flex;
  justify-content: center;
`;

const StProfilePicture = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const StProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StName = styled.div`
  font-size: 28px;
  font-weight: lighter;
  color: ${colors.textBlack};
  margin-bottom: 20px;
`;

const StProfile = styled.div`
  margin-top: 20px;
  display: flex;
`;
const StProfileText = styled.div`
  font-size: 16px;

  span {
    font-weight: bold;
    margin-left: 2px;
  }
  & + & {
    margin-left: 30px;
  }
`;
