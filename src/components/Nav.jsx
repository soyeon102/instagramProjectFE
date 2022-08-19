import { ReactComponent as Logo } from '../assets/icon/icon-logo.svg';
import { ReactComponent as IconHome } from '../assets/icon/icon-home.svg';
import { ReactComponent as IconAdd } from '../assets/icon/icon-add.svg';
import { Row, Col } from 'react-bootstrap';
import DefaultImg from '../assets/img/img-profile.jpg';
import Layout from '../Layout/Layout';
import styled from 'styled-components';
import SearchBox from './SearchBox';
import { colors } from '../theme/theme';

const Nav = () => {
  return (
    <NavContainer>
      <Layout>
        <LayoutRow>
          <Col>
            <Logo />
          </Col>
          <Col>
            <SearchBox />
          </Col>
          <NavCol>
            <IconContainer>
              <IconHome />
            </IconContainer>
            <IconContainer>
              <IconAdd />
            </IconContainer>
            <IconContainer
              style={{ width: '24px', height: '24px', display: 'inline-block' }}
            >
              <img
                src={DefaultImg}
                alt='프로필사진'
                style={{ width: '100%' }}
              />
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
  height: 24px;
  cursor: pointer;

  & + & {
    margin-left: 22px;
  }
`;
