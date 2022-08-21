import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { ReactComponent as IconLogo } from '../assets/icon/icon-logo.svg';
import { colors } from '../theme/theme';
import { BASE_URL } from '../shared/api';

const Signup = () => {
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState('');

  const [disabledBtn, setDisabledBtn] = useState(true);
  const [signupVal, setSignupVal] = useState({
    email: '',
    nickname: '',
    password: '',
  });
  const { email, nickname, password } = signupVal;

  const handleChange = (e) => {
    setSignupVal({ ...signupVal, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${BASE_URL}/api/member/signup`,
        signupVal
      );
      navigate('/login');
    } catch (error) {
      setErrorMsg(error.response.data.errorMessage);
    }
  };

  useEffect(() => {
    if (email !== '' && nickname !== '' && password.length > 3) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [signupVal]);

  return (
    <SignupContainer>
      <SignupBox onSubmit={handleSignup}>
        <LogoBox>
          <IconLogo />
        </LogoBox>
        <SignupText>친구들의 사진과 동영상을 보려면 가입하세요</SignupText>
        <InputBox>
          <Input
            placeholder='이메일 주소'
            name='email'
            value={email}
            onChange={handleChange}
          />
          <Input
            placeholder='사용자 이름'
            name='nickname'
            value={nickname}
            onChange={handleChange}
          />
          <Input
            placeholder='비밀번호'
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
          <ErrorMsg>{errorMsg}</ErrorMsg>
          {/* {errorMsg !== '' ? (
            <ErrorMsg>{errorMsg}</ErrorMsg>
          ) : null} */}
          <SignupButton type='submit' disabled={disabledBtn}>
            가입
          </SignupButton>
        </InputBox>
      </SignupBox>
      <LoginBox>
        이미 계정이 있으신가요?{' '}
        <span onClick={() => navigate('/login')}>로그인</span>
      </LoginBox>
    </SignupContainer>
  );
};

export default Signup;

const SignupContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SignupBox = styled.form`
  background-color: white;
  width: 350px;
  border: 1px solid ${colors.border};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 36px;
`;

const InputBox = styled.div`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
  border: none;
  outline: 1px solid ${colors.border};
  width: 250px;
  height: 40px;
  margin-bottom: 8px;
  padding: 10px;
  font-size: 12px;
  border-radius: 4px;
  background: #fafafa;

  &:focus {
    outline: 1px solid #adadad;
  }
`;

const SignupButton = styled.button`
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  width: 250px;
  height: 30px;
  margin-top: 40px;

  &:disabled {
    background-color: #b2dffc;
  }
`;

const LogoBox = styled.div`
  width: 175px;
  height: 51px;
  margin-top: 36px;
  margin-bottom: 12px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const SignupText = styled.div`
  width: 200px;
  text-align: center;
  font-size: 17px;
  line-height: 20px;
  font-weight: bold;
  color: ${colors.text};
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
`;

const LoginBox = styled.div`
  background-color: white;
  width: 350px;
  padding: 20px;
  border: 1px solid ${colors.border};
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: ${colors.primary};
    margin-left: 4px;
    font-weight: bold;
    cursor: pointer;
  }
`;
