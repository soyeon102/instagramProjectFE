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
  const article = useSelector((state) => state.article.detail);

  if (articles.code === '1005' || articles.code === '1003') {
    alert('다시 로그인해주세요.');
    navigate('/login');
  }

  useEffect(() => {
    dispatch(__readArticles());
    dispatch(__readOneArticle(2));
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
