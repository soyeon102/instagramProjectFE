import MainList from './MainList';
import styled from 'styled-components';
import RecommendMember from './RecommendMember';

const MainFeed = () => {
  return (
    <MainFeedContainer>
      <MainList />
      <RecommendMember />
    </MainFeedContainer>
  );
};

export default MainFeed;

const MainFeedContainer = styled.div`
  display: flex;
  margin-top: 100px;
`;
