import FeedLayout from '../Layout/FeedLayout';
import Nav from '../components/Nav';
import MainFeed from '../components/MainFeed';
import Modal from '../components/Modal';
import NewPost from '../components/NewPost';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from '../shared/Cookie';

const Home = () => {
  const dispatch = useDispatch();
  const [isCreate, setIsCreate] = useState(false);

  const handleAddPost = () => {
    setIsCreate(true);
    document.body.style.overflow = 'hidden';
  };

  const handleModalClose = () => {
    setIsCreate(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    getCookie('ACCESS_TOKEN');
  }, []);

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

      {/* 업로드 모달 */}
      {isCreate && (
        <Modal modalClose={handleModalClose}>
          <NewPost modalClose={handleModalClose} />
        </Modal>
      )}
    </>
  );
};

export default Home;
