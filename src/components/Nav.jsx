import { ReactComponent as Logo } from '../assets/icon/icon-logo.svg';
import { ReactComponent as IconHome } from '../assets/icon/icon-home.svg';
import { ReactComponent as IconAdd } from '../assets/icon/icon-add.svg';
import { Row, Col } from 'react-bootstrap';
import DefaultProfile from '../assets/img/img-profile.jpg';
import Layout from '../Layout/Layout';
import styled from 'styled-components';
import SearchBox from './SearchBox';

const Nav = () => {
  return (
    <NavContainer>
      <Layout>
        <Row>
          <Col>
            <Logo />
          </Col>
          <Col>
            <SearchBox />
          </Col>
          <Col>
            <IconHome />
            <IconAdd />
            <span
              style={{ width: '24px', height: '24px', display: 'inline-block' }}
            >
              <img src={DefaultProfile} style={{ width: '100%' }} />
            </span>
          </Col>
        </Row>
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
  border: 1px solid red;
`;

const NavLayout = styled(Layout)``;

const LogoContainer = styled.div``;
