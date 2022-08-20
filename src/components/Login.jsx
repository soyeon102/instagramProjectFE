import styled from 'styled-components';
import LoginImg from '../assets/img/img-login.png';

const Login = () => {
  return (
    <LoginContainer>
      <img
        src={LoginImg}
        alt='로그인이미지'
        style={{ width: '350px', height: '536px', marginRight: '30px' }}
      />
      <div>
        <LoginBox>
          <div>
            <Input placeholder='사용자 이메일'></Input>
            <Input placeholder='비밀번호'></Input>
            <Button style={{ fontWeight: 'bold' }}>로그인</Button>
          </div>
        </LoginBox>

        <SignupBox>
          <p>계정이 없으신가요?</p>
          <p style={{ color: '#0095f6', fontWeight: 'bold' }}>가입하기</p>
        </SignupBox>
      </div>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  background-color: #fafafa;
  margin: 0 auto;
  display: flex;
`;

const LoginBox = styled.div`
  background-color: white;
  width: 350px;
  height: 350px;
  border: 1px solid #eee;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-color: #b2dffc;
  color: white;
  border: none;
  border-radius: 5px;
  width: 250px;
  height: 30px;
  margin-top: 10px;
`;

const SignupBox = styled.div`
  background-color: white;
  width: 350px;
  height: 80px;
  border: 1px solid #eee;
  margin-top: 20px;
  /* margin: 0 auto; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
