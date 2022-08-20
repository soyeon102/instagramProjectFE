import styled from 'styled-components';
import { ReactComponent as IconBack } from '../assets/icon/icon-back.svg';
import { ReactComponent as IconMedia } from '../assets/icon/icon-media.svg';
import defaultImg from '../assets/img/img-profile.jpg';
import { colors } from '../theme/theme';

const NewPost = () => {
  return (
    <StNewPost>
      <StNewPostHeader>
        <IconBack />
        <StText>새 게시물 만들기</StText>
        <StText primary fz='14px'>
          공유하기
        </StText>
      </StNewPostHeader>

      <StNewPostBody>
        <StNewPostBodyLeft>
          <StImageTab>
            <IconMedia />
            <p>사진과 동영상을 여기에 끌어다 놓으세요</p>
            <StButton>컴퓨터에서 선택</StButton>
          </StImageTab>
        </StNewPostBodyLeft>

        <StNewPostBodyRight>
          <StNewPostName>
            <UserProfile>
              <img src={defaultImg} alt='유저 프로필'></img>
            </UserProfile>
            <StText>baeji</StText>
          </StNewPostName>
          <StTextarea placeholder='문구 입력...'></StTextarea>
        </StNewPostBodyRight>
      </StNewPostBody>
    </StNewPost>
  );
};

export default NewPost;

const StNewPost = styled.div`
  width: 938px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;

const StNewPostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.border};
  padding: 8px 16px;
`;

const StNewPostBody = styled.div`
  height: 598px;
  display: flex;
`;

const StNewPostBodyLeft = styled.div`
  width: 598px;
  height: 100%;
  border-right: 1px solid ${colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StImageTab = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 22px;
    color: ${colors.textBlack};
    font-weight: lighter;
  }

  * + * {
    margin-top: 20px;
  }
`;

const StButton = styled.button`
  color: white;
  background-color: ${colors.primary};
  border: none;
  outline: none;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  width: 120px;
  margin: 20px auto;
  padding: 5px;
  line-height: 20px;
  text-align: center;
`;

const StNewPostBodyRight = styled.div`
  width: 340px;
  height: 100%;
  padding: 15px;
`;

const StNewPostName = styled.div`
  display: flex;
  align-items: center;
`;

const StTextarea = styled.textarea`
  width: 100%;
  height: 90%;
  display: inline-block;
  border: none;
  outline: none;
  padding-top: 20px;
  resize: none;
`;

const UserProfile = styled.div`
  width: 28px;
  height: 28px;
  margin-right: 8px;

  img {
    width: 100%;
  }
`;

const StText = styled.p`
  color: ${(props) => (props.primary ? colors.primary : colors.black)};
  font-size: ${(props) => props.fz};
  font-weight: bold;
`;
