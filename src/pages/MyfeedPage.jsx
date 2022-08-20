import MyfeedProfile from '../components/MyfeedProfile';
import MyfeedList from '../components/MyfeedList';
import Layout from '../Layout/Layout';
import Nav from '../components/Nav';

const MyfeedPage = () => {
  return (
    <>
      <Nav />
      <Layout>
        <MyfeedProfile />
        <MyfeedList />;{/* <NewPost /> */}
      </Layout>
    </>
  );
};

export default MyfeedPage;
