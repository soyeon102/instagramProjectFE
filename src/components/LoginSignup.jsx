import styled from 'styled-components';
import LoginImg from '../assets/img/img-login.png';

const LoginSignup = () => {
  return (
    <SignupContainer>
      <SignupBox>
        <div>
          <p style={{ color: '#8e8e8e', fontWeight: 'bold' }}>
            친구들의 사진과 동영상을 보려면
          </p>
          <p style={{ color: '#8e8e8e', fontWeight: 'bold' }}>가입하세요.</p>
        </div>

        <InputBox>
          <Input placeholder='이메일 주소'></Input>
          <Input placeholder='사용자 이름'></Input>
          <Input placeholder='비밀번호'></Input>
          <Button style={{ fontWeight: 'bold' }}>가입</Button>
        </InputBox>
      </SignupBox>
    </SignupContainer>
  );
};

export default LoginSignup;

const SignupContainer = styled.div`
  background-color: #fafafa;
  /* display: flex; */
  margin: 0 auto;
`;

const SignupBox = styled.div`
  background-color: white;
  width: 350px;
  height: 350px;
  border: 1px solid #eee;
  margin: 0 auto;
  text-align: center;
  /* display: flex; */
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.div`
  margin-top: 40px;
`;
const Input = styled.input`
  background-color: #fafafa;
  border: 1px solid #dbdbdb;
  width: 250px;
  height: 40px;
  margin-bottom: 7px;
  padding: 10px;
  font-size: 12px;
`;

const Button = styled.button`
  background-color: #0095f6;
  color: white;
  border: none;
  border-radius: 5px;
  width: 250px;
  height: 30px;
  margin-top: 40px;
`;
