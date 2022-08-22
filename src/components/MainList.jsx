import MainCard from './MainCard';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  __readArticles,
  __readOneArticle,
} from '../redux/modules/articleSlice';
import { useNavigate } from 'react-router-dom';

const MainList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const articles = useSelector((state) => state.article.articles);

  const { isLoading } = useSelector((state) => state.article);

  // console.log(articles);

  useEffect(() => {
    dispatch(__readArticles());
  }, [dispatch]);

  // if (isLoading) {
  //   return <div>로딩 중...</div>;
  // }

  return (
    <ListContainer>
      {articles.map((article) => (
        <MainCard key={article.id} article={article} />
      ))}
    </ListContainer>
  );
};

export default MainList;

const ListContainer = styled.div`
  margin-right: 32px;
`;
