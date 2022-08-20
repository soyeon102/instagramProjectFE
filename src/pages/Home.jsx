import FeedLayout from '../Layout/FeedLayout';
import Nav from '../components/Nav';
import MainFeed from '../components/MainFeed';
import styled from 'styled-components';
import Modal from '../components/Modal';
import CardDetail from '../components/CardDetail';

const Home = () => {
  return (
    <>
      <Nav />
      <FeedLayout>
        <MainFeed />
      </FeedLayout>

      {/* 상세 모달 */}
      {/* <Modal>
        <CardDetail />
      </Modal> */}
    </>
  );
};

export default Home;
