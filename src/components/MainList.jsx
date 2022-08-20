import MainCard from './MainCard';
import styled from 'styled-components';

const MainList = () => {
  return (
    <ListContainer>
      <MainCard />
      <MainCard />
      <MainCard />
    </ListContainer>
  );
};

export default MainList;

const ListContainer = styled.div`
  margin-right: 32px;
`;
