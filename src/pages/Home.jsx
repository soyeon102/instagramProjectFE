import Layout from '../Layout/Layout';
import Nav from '../components/Nav';
import MainFeed from '../components/MainFeed';

const Home = () => {
  return (
    <>
      <Nav />
      <Layout>
        <MainFeed />
      </Layout>
    </>
  );
};

export default Home;
