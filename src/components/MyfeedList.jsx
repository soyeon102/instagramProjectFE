import styled from 'styled-components';

import MyfeedCard from './MyfeedCard';

const MyfeedList = () => {
  return (
    <div>
      <StFeedList>
        <Hr />
        <StCategory>
          <StCategoryPost>
            <p>게시물</p>
          </StCategoryPost>
          <StCategoryLike>
            <p>좋아요</p>
          </StCategoryLike>
        </StCategory>
        <MyfeedCard />
      </StFeedList>
    </div>
  );
};

export default MyfeedList;

const StFeedList = styled.div`
  background-color: #fafafa;
  width: 880px;
  margin: 0 auto;
`;
const Hr = styled.hr`
  width: 880px;
  margin: 0 auto;
`;
const StCategory = styled.div`
  margin-top: 20px;
  font-size: 12px;
  display: flex;
  justify-content: center;
`;
const StCategoryPost = styled.div`
  margin-right: 100px;
`;
const StCategoryLike = styled.div``;
