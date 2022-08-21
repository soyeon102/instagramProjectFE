import MainCard from './MainCard';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { __readArticles } from '../redux/modules/articleSlice';

const MainList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.article.articles);

  console.log(articles);

  useEffect(() => {
    dispatch(__readArticles());
  }, [dispatch]);

  return (
    <ListContainer>
      {articles?.map((article) => (
        <MainCard key={article.id} article={article} />
      ))}
    </ListContainer>
  );
};

export default MainList;

const ListContainer = styled.div`
  margin-right: 32px;
`;
