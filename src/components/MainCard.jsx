import { useState } from 'react';
import { ReactComponent as IconMore } from '../assets/icon/icon-more.svg';
import { ReactComponent as IconEmptyHeart } from '../assets/icon/icon-empty-heart.svg';
import { ReactComponent as IconHeart } from '../assets/icon/icon-heart.svg';
import { ReactComponent as IconComment } from '../assets/icon/icon-comment.svg';
import { ReactComponent as IconShare } from '../assets/icon/icon-share.svg';
import DefaultImg from '../assets/img/img-profile.jpg';
import styled from 'styled-components';
import { colors } from '../theme/theme';

const MainCard = () => {
  const [isLike, setIsLike] = useState(false);

  return (
    <CardContainer>
      <CardHeader>
        <UserProfile>
          <ProfileImg>
            <img src={DefaultImg} alt='프로필사진' style={{ width: '100%' }} />
          </ProfileImg>
          <ProfileName>username</ProfileName>
        </UserProfile>
        <IconContainer>
          <IconMore />
        </IconContainer>
      </CardHeader>

      <CardBody>
        <ImgContainer></ImgContainer>
      </CardBody>

      <CardFooter>
        <Icons>
          <IconContainer onClick={() => setIsLike(!isLike)}>
            {isLike ? <IconHeart /> : <IconEmptyHeart />}
          </IconContainer>
          <IconContainer>
            <IconComment />
          </IconContainer>
          <IconContainer>
            <IconShare />
          </IconContainer>
        </Icons>
        <Contents>
          <LikeNum>좋아요 100개</LikeNum>
          <Content>
            <span>username</span> 끝내줬던 여름휴가🌊
          </Content>
          <Comment>댓글 4개 모두보기</Comment>
          <UploadTime>1일 전</UploadTime>
        </Contents>
      </CardFooter>
    </CardContainer>
  );
};

export default MainCard;

const CardContainer = styled.div`
  min-width: 470px;
  padding-bottom: 20px;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  margin-bottom: 20px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  height: 56px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.div`
  width: 32px;
  height: 32px;
`;
const ProfileName = styled.div`
  margin-left: 10px;
  color: ${colors.textBlack};
  font-weight: bold;
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  padding: 8px;
  margin-top: 6px;
  cursor: pointer;
`;

const CardBody = styled.div``;
const CardFooter = styled.div``;
const ImgContainer = styled.div`
  width: 100%;
  background-color: #dedede;
  height: 588px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  margin-bottom: 6px;
`;

const Contents = styled.div`
  padding: 0 16px;

  div + div {
    margin-top: 8px;
  }
`;

const LikeNum = styled.div`
  color: ${colors.textBlack};
  font-weight: bold;
`;

const Content = styled.div`
  min-height: 18px;

  span {
    font-weight: bold;
  }
`;

const Comment = styled.div`
  color: ${colors.textTime};
  margin-bottom: 20px;
  cursor: pointer;
`;

const UploadTime = styled.div`
  font-size: 10px;
  color: ${colors.textTime};
`;
