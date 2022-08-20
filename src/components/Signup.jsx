import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as IconLogo } from '../assets/icon/icon-logo.svg';
import { colors } from '../theme/theme';

const Signup = () => {
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

  useEffect(() => {
    if (email !== '' && nickname !== '' && password.length > 5) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [signupVal]);

  return (
    <SignupContainer>
      <SignupBox>
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
          <SignupButton disabled={disabledBtn} onClick={() => {}}>
            가입
          </SignupButton>
        </InputBox>
      </SignupBox>
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
`;

const SignupBox = styled.div`
  background-color: white;
  width: 350px;
  border: 1px solid ${colors.border};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  margin-bottom: 36px;

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