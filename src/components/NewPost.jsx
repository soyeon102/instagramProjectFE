import styled from 'styled-components';

const NewPost = () => {
  return (
    <StNewPost>
      <StNewPostHeader>
        <p>!!!</p>
        <p style={{ fontWeight: 'bold' }}>새 게시물 만들기</p>
        <p style={{ color: '#0095f6', fontWeight: 'bold' }}>공유하기</p>
      </StNewPostHeader>

      <StNewPostBody>
        <StNewPostBodyLeft>
          <StImageTab>
            <p>사진과 동영상을 여기에 끌어다 놓으세요</p>
            <StButton>컴퓨터에서 선택</StButton>
          </StImageTab>
        </StNewPostBodyLeft>

        <StNewPostBodyRight>
          <StNewPostName>
            <StCircle />
            <p style={{ fontWeight: 'bold' }}>baeji</p>
          </StNewPostName>
          <StTextarea
            placeholder='문구 입력...'
            style={{ border: 'none' }}
          ></StTextarea>
        </StNewPostBodyRight>
      </StNewPostBody>
    </StNewPost>
  );
};

export default NewPost;

const StNewPost = styled.div`
  width: 1000px;
  height: 620px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 10px;
`;
const StNewPostHeader = styled.div`
  border-bottom: 1px solid #d1d1d1;
  height: 40px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  line-height: 30px;
  text-align: center;
`;
const StNewPostBody = styled.div`
  display: flex;
`;
const StNewPostBodyLeft = styled.div`
  width: 700px;
  height: 600px;
  border-right: 1px solid #cbcbcb;
  display: flex;
  align-items: center;
`;
const StImageTab = styled.div`
  margin: 0 auto;
  font-size: 25px;
  text-align: center;
`;
const StButton = styled.div`
  color: white;
  background-color: #0095f6;
  border-radius: 3px;
  font-size: 13px;
  width: 120px;
  margin: 20px auto;
  padding: 5px;
  line-height: 20px;
  text-align: center;
`;

const StNewPostBodyRight = styled.div`
  width: 300px;
`;

const StNewPostName = styled.div`
  padding: 15px;
  display: flex;
  line-height: 25px;
  text-align: center;
`;

const StCircle = styled.div`
  width: 25px;
  height: 25px;
  border: 1px dashed black;
  border-radius: 50%;
  margin-right: 10px;
`;

const StTextarea = styled.textarea`
  width: 270px;
  height: 210px;
  margin-right: 20px;
  margin-left: 12px;
`;
