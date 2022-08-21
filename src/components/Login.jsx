import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import loginImg from '../assets/img/img-login.png';
import { ReactComponent as IconLogo } from '../assets/icon/icon-logo.svg';
import { colors } from '../theme/theme';
import { __loginUser } from '../redux/modules/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [disabledBtn, setDisabledBtn] = useState(true);
  const [loginVal, setLoginVal] = useState({
    email: '',
    password: '',
  });
  const { email, password } = loginVal;

  const handleChange = (e) => {
    setLoginVal({ ...loginVal, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    dispatch(__loginUser(loginVal))
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log('error!!!');
      });
  };

  useEffect(() => {
    if (email !== '' && password.length > 5) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [loginVal]);

  return (
    <LoginContainer>
      <Wrap>
        <LoginImg src={loginImg} alt='로그인이미지' />
        <div>
          <LoginBox>
            <LogoBox>
              <IconLogo />
            </LogoBox>
            <Input
              placeholder='사용자 이메일'
              type='text'
              name='email'
              value={email}
              onChange={handleChange}
            />
            <Input
              placeholder='비밀번호'
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
            />
            <LoginButton disabled={disabledBtn} onClick={handleLogin}>
              로그인
            </LoginButton>
          </LoginBox>

          <SignupBox>
            <p>계정이 없으신가요?</p>
            <SignupButton onClick={() => navigate('/signup')}>
              가입하기
            </SignupButton>
          </SignupBox>
        </div>
      </Wrap>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginImg = styled.img`
  width: 350px;
  height: 536px;
  margin-right: 30px;
  img {
    width: 100%;
  }
`;

const Wrap = styled.div`
  display: flex;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  border: none;
  outline: 1px solid ${colors.border};
  width: 250px;
  height: 40px;
  margin-bottom: 7px;
  padding: 10px;
  font-size: 12px;
  border-radius: 4px;
  background: #fafafa;

  &:focus {
    outline: 1px solid #adadad;
  }
`;

const LoginButton = styled.button`
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  width: 250px;
  height: 30px;
  margin-top: 10px;

  &:disabled {
    background-color: #b2dffc;
  }
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

const LogoBox = styled.div`
  width: 175px;
  height: 51px;
  margin-bottom: 36px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const SignupButton = styled.button`
  border: none;
  background: none;
  font-weight: bold;
  color: ${colors.primary};
`;
