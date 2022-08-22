import styled from 'styled-components';
import defaultImg from '../assets/img/img-profile.jpg';
import { colors } from '../theme/theme';

const Comment = ({ comments }) => {
  const { id, nickname, content, timeMsg } = comments;

  return (
    <CommentContainer>
      <User>
        <UserProfile>
          <img src={defaultImg} alt='프로필사진' style={{ width: '100%' }} />
        </UserProfile>
        <Contents>
          <UserComment>
            <span>{nickname}</span>
            {content}
          </UserComment>
          <CommentDate>{timeMsg}</CommentDate>
        </Contents>
      </User>
    </CommentContainer>
  );
};

export default Comment;

const CommentContainer = styled.div`
  width: 100%;
  padding-top: 12px;
`;

const User = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  overflow: hidden;
`;
const UserProfile = styled.div`
  width: 32px;
  height: 32px;
`;

const Contents = styled.div`
  flex: 1;
  margin-left: 12px;
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
`;

const UserComment = styled.div`
  span {
    font-weight: bold;
    margin-right: 8px;
  }

  word-break: break-all;
`;

const CommentDate = styled.div`
  margin-top: 8px;
  font-size: 10px;
  color: ${colors.textTime};
`;
