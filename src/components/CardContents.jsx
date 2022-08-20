import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as IconMore } from '../assets/icon/icon-more.svg';
import { ReactComponent as IconComment } from '../assets/icon/icon-comment.svg';
import { ReactComponent as IconShare } from '../assets/icon/icon-share.svg';
import { ReactComponent as IconHeart } from '../assets/icon/icon-heart.svg';
import { ReactComponent as IconEmptyHeart } from '../assets/icon/icon-empty-heart.svg';
import { ReactComponent as IconEmoji } from '../assets/icon/icon-emoji.svg';
import { colors } from '../theme/theme';
import defaultImg from '../assets/img/img-profile.jpg';
import CommentList from './CommentList';

const CardContents = () => {
  const [isLike, setIsLike] = useState(false);

  return (
    <BoardContainer>
      <BoardHeader>
        <UserProfile>
          <UserImg>
            <img src={defaultImg} alt='프로필사진' style={{ width: '100%' }} />
          </UserImg>
          <UserName>username</UserName>
        </UserProfile>
        <IconContainer>
          <IconMore />
        </IconContainer>
      </BoardHeader>

      <BoardBody>
        <Contents>
          <UserImg>
            <img src={defaultImg} alt='프로필사진' style={{ width: '100%' }} />
          </UserImg>
          <UserPost>
            <Content>
              <span>username</span> 끝내줬던 여름휴가🌊여름휴가🌊끝내줬던
              여름휴가🌊끝내줬던여름휴가🌊끝내줬던여름휴가🌊끝내줬던 여름휴가🌊
              끝내줬던 여름휴가🌊
            </Content>
            <UploadTime>2주</UploadTime>
          </UserPost>
        </Contents>

        {/* 댓글리스트 */}
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
          <UploadTime>8월 5</UploadTime>
        </ContentsInfo>
        <UploadComment>
          <Emoji />
          <input type='tex' placeholder='댓글 달기'></input>
          <button>게시</button>
        </UploadComment>
      </BoardFooter>
    </BoardContainer>
  );
};

export default CardContents;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 2;
  flex: 1 1 auto;
  min-height: 571px;
  min-width: 0;

  align-self: stretch;

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
  padding: 8px 16px;
  height: 56px;
  border-bottom: 1px solid ${colors.border};
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
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

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  padding: 8px;
  margin-top: 6px;
  cursor: pointer;
`;

const BoardBody = styled.div`
  max-height: 541px;
  overflow-y: scroll;
  padding: 16px;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Contents = styled.div`
  display: flex;
  align-items: flex-start;
`;

const UserPost = styled.div`
  margin-left: 12px;
  flex: 1;
`;

const Content = styled.div`
  margin-bottom: 6px;

  span {
    font-weight: bold;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  margin-bottom: 6px;
`;

const ContentsInfo = styled.div`
  padding: 0 16px;

  div + div {
    margin-top: 8px;
  }
`;

const BoardFooter = styled.div``;

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
  display: flex;
  align-items: center;
  min-height: 53px;
  margin-top: 12px;
  padding: 6px 16px;
  border-top: 1px solid ${colors.border};

  input {
    width: 100%;
    display: block;
    border: none;
    outline: none;
    min-height: 20px;
  }

  button {
    width: 50px;
    color: ${colors.primary};
    font-weight: bold;
    border: none;
    background: none;
    outline: none;
  }
`;

const Emoji = styled(IconEmoji)`
  margin-right: 16px;
`;
