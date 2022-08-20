import FeedLayout from '../Layout/FeedLayout';
import Nav from '../components/Nav';
import MainFeed from '../components/MainFeed';
import styled from 'styled-components';
import Modal from '../components/Modal';
import CardDetail from '../components/CardDetail';
import NewPost from '../components/NewPost';
import { useState } from 'react';

const Home = () => {
  const [isCreate, setIsCreate] = useState(false);

  const handleAddPost = () => {
    setIsCreate(true);
    document.body.style.overflow = 'hidden';
  };

  const handleModalClose = () => {
    setIsCreate(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <Nav onClickAddPost={handleAddPost} />
      <FeedLayout>
        <MainFeed />
      </FeedLayout>

      {/* 상세 모달 */}
      {/* <Modal>
        <CardDetail />
      </Modal> */}

      {isCreate && (
        <Modal modalClose={handleModalClose}>
          <NewPost />
        </Modal>
      )}
    </>
  );
};

export default Home;
