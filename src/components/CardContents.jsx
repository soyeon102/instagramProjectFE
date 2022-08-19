import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as IconMore } from '../assets/icon/icon-more.svg';
import { ReactComponent as IconComment } from '../assets/icon/icon-comment.svg';
import { ReactComponent as IconShare } from '../assets/icon/icon-share.svg';
import { ReactComponent as IconHeart } from '../assets/icon/icon-heart.svg';
import { ReactComponent as IconEmptyHeart } from '../assets/icon/icon-empty-heart.svg';
import { ReactComponent as IconEmoji } from '../assets/icon/icon-emoji.svg';
import { colors } from '../theme/theme';
import DefaultImg from '../assets/img/img-profile.jpg';
import CommentList from './CommentList';

const CardContents = () => {
  const [isLike, setIsLike] = useState(false);

  return (
    <BoardContainer>
      <BoardHeader>
        <UserProfile>
          <UserImg>
            <img src={DefaultImg} alt='프로필사진' style={{ width: '100%' }} />
          </UserImg>
          <UserName>username</UserName>
        </UserProfile>
        <IconContainer>
          <IconMore />
        </IconContainer>
      </BoardHeader>

      <BoardBody>
        <Contents>
          <UserProfile>
            <UserImg>
              <img
                src={DefaultImg}
                alt='프로필사진'
                style={{ width: '100%' }}
              />
            </UserImg>
            <Content>
              <span>username</span> 끝내줬던 여름휴가🌊
            </Content>
          </UserProfile>
        </Contents>
        <CommentList />
      </BoardBody>

      <BoardFooter>
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
        <ContentsInfo>
          <LikeNum>좋아요 100개</LikeNum>
          <UploadTime>1일 전</UploadTime>
        </ContentsInfo>
        <UploadComment>
          <input type='text' />
          <Emoji />
        </UploadComment>
      </BoardFooter>
    </BoardContainer>
  );
};

export default CardContents;

const BoardContainer = styled.div`
  align-items: stretch;
  border: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 2;
  font-size: 100%;
  margin: 0;
  max-width: 500px;
  min-width: 405px;
  padding: 0;
  position: relative;
  vertical-align: baseline;
  background-color: white;
`;

const BoardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  height: 56px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px;
`;

const UserImg = styled.div`
  width: 32px;
  height: 32px;
`;

const UserName = styled.div`
  margin-left: 10px;
  color: ${colors.textBlack};
  font-weight: bold;
`;

const BoardBody = styled.div``;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  padding: 8px;
  margin-top: 6px;
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  margin-bottom: 6px;
`;

const BoardFooter = styled.div``;

const Contents = styled.div``;

const Content = styled.div`
  margin-left: 12px;
`;

const ContentsInfo = styled.div`
  padding: 0 16px;

  div + div {
    margin-top: 8px;
  }
`;

const LikeNum = styled.div`
  color: ${colors.textBlack};
  font-weight: bold;
`;

const ContentText = styled.div`
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

const UploadComment = styled.div`
  position: relative;
  height: 53px;
  margin-top: 12px;

  input {
    border: none;
    border-top: 1px solid ${colors.border};
    width: 100%;
    height: 100%;
    padding: 6px 26px 6px 32px;
    outline: none;
  }
`;

const Emoji = styled(IconEmoji)`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(60%);
`;
