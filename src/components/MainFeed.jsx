import MainList from './MainList';
import styled from 'styled-components';

const MainFeed = () => {
  return (
    <MainFeedContainer>
      <MainList />
      {/* Member 컴포넌트 */}
      <div
        style={{ border: '3px solid red', width: '100%', height: '40px' }}
      ></div>
    </MainFeedContainer>
  );
};

export default MainFeed;

const MainFeedContainer = styled.div`
  display: flex;
  margin-top: 100px;
`;
