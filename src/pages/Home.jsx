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
      <Modal>
        <CardDetail />
      </Modal>
    </>
  );
};

export default Home;
