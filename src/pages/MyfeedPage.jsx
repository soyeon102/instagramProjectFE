import MyfeedProfile from '../components/MyfeedProfile';
import MyfeedList from '../components/MyfeedList';
import Layout from '../Layout/Layout';
import Nav from '../components/Nav';
import Modal from '../components/Modal';
import NewPost from '../components/NewPost';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MyfeedPage = () => {
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

  return (
    <>
      <Nav onClickAddPost={handleAddPost} />
      <Layout>
        <MyfeedProfile />
        <MyfeedList />
      </Layout>

      {isCreate && (
        <Modal modalClose={handleModalClose}>
          <NewPost modalClose={handleModalClose} />
        </Modal>
      )}
    </>
  );
};

export default MyfeedPage;
