import axios from 'axios';
import MainCard from './MainCard';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import {
  __createArticles,
  __readArticles,
} from '../redux/modules/articleSlice';
import { useNavigate } from 'react-router-dom';

import Loading from './Loading';
import { getUser } from '../redux/modules/userSlice';
import { removeCookie } from '../shared/Cookie';

const MainList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, error, articles, hasMore } = useSelector(
    (state) => state.article
  );

  const [pageNum, setPageNum] = useState(0);
  const observerRef = useRef();

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
  //   if (articles.code === '1003' || articles.code === '1005') {
  //     alert('다시 로그인해주세요');
  //     removeCookie('ACCESS_TOKEN');
  //     removeCookie('nickname');
  //     navigate('/login');
  //   }
  // }, []);

  // console.log('articles@@@@@@', articles);

  useEffect(() => {
    dispatch(__readArticles(pageNum));
  }, [dispatch, pageNum]);

  return (
    <ListContainer>
      {articles?.map((card, i) => (
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
