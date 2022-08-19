import FeedLayout from '../Layout/FeedLayout';
import Nav from '../components/Nav';
import MainFeed from '../components/MainFeed';

const Home = () => {
  return (
    <>
      <Nav />
      <FeedLayout>
        <MainFeed />
      </FeedLayout>
    </>
  );
};

export default Home;
