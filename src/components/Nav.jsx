import { ReactComponent as Logo } from '../assets/icon/icon-logo.svg';
import { ReactComponent as IconHome } from '../assets/icon/icon-home.svg';
import { ReactComponent as IconAdd } from '../assets/icon/icon-add.svg';
import { Row, Col } from 'react-bootstrap';
import defaultImg from '../assets/img/img-profile.jpg';
import Layout from '../Layout/Layout';
import styled from 'styled-components';
import SearchBox from './SearchBox';
import { colors } from '../theme/theme';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <Layout>
        <LayoutRow>
          <Col>
            <Logo onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
          </Col>
          <Col>
            <SearchBox />
          </Col>
          <NavCol>
            <IconContainer onClick={() => navigate('/')}>
              <IconHome />
            </IconContainer>
            <IconContainer>
              <IconAdd />
            </IconContainer>
            <IconContainer onClick={() => navigate('/myfeed')}>
              <img src={defaultImg} alt='프로필사진' />
            </IconContainer>
          </NavCol>
        </LayoutRow>
      </Layout>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  border: 1px solid ${colors.border};
  background-color: white;
`;

const LayoutRow = styled(Row)`
  margin-top: 16px;
  height: 100%;
`;

const LogoContainer = styled.div``;

const NavCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  cursor: pointer;

  img {
    width: 100%;
  }

  & + & {
    margin-left: 22px;
  }
`;
