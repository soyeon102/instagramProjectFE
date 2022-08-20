import MyfeedProfile from '../components/MyfeedProfile';
import MyfeedList from '../components/MyfeedList';
import RecommendMember from '../components/RecommendMember';
import NewPost from '../components/NewPost';

const MyfeedPage = () => {
  return (
    <>
      <MyfeedProfile />;
      <MyfeedList />;
      <RecommendMember />
      <NewPost />
    </>
  );
};

export default MyfeedPage;
