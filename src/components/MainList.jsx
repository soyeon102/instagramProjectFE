import axios from 'axios';
import MainCard from './MainCard';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useRef, useState, useEffect } from 'react';
import {
  __readArticles,
  __readOneArticle,
} from '../redux/modules/articleSlice';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';

const MainList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const articles = useSelector((state) => state.article.articles);

  // const size = 40;
  const [pageNum, setPageNum] = useState(0);
  const { list, hasMore, isLoading } = useFetch(pageNum);
  const observerRef = useRef();

  // console.log(articles);
  // const { isLoading } = useSelector((state) => state.article);

  const observer = (node) => {
    if (isLoading) return;
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore) {
          setPageNum((page) => page + 1);
        }
      },
      { threshold: 0.5 }
    );

    node && observerRef.current.observe(node);
  };

  // useEffect(() => {
  //   dispatch(__readArticles());
  //   if (articles.code === '1005' || articles.code === '1003') {
  //     return navigate('/login');
  //   }
  // }, [dispatch]);

  console.log('list!!!', list);

  return (
    <ListContainer>
      {list?.map((card, i) => (
        <MainCard key={i} article={card} />
      ))}

      <div ref={observer} />
      <>{isLoading && <Loading />}</>
    </ListContainer>
  );
};

export default MainList;

const ListContainer = styled.div`
  margin-right: 32px;
  min-width: 468px;
`;
