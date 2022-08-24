import axios from 'axios';
import MainCard from './MainCard';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
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

  const { isLoading, error, articles } = useSelector((state) => state.article);

  const [items, setItems] = useState([]);
  const [target, setTarget] = useState(null);
  const [page, setPage] = useState(0);

  // useEffect(() => {
  //   dispatch(getUser());
  //   dispatch(__readArticles(page));
  // }, [dispatch]);

  // useEffect(() => {
  //   if (articles.code === '1003' || articles.code === '1005') {
  //     alert('다시 로그인해주세요');
  //     removeCookie('ACCESS_TOKEN');
  //     removeCookie('nickname');
  //     navigate('/login');
  //   }
  // }, []);

  // useEffect(() => {
  //   let observer;
  //   if (target) {
  //     observer = new IntersectionObserver();
  //     observer.observe(target);
  //   }
  // }, [target]);

  // const onIntersect = async ([entry], observer) => {
  //   if (entry.isIntersecting) {
  //     observer.unobserve(entry.target);
  //     await dispatch(__readArticles())
  //     observer.observe(entry.target);
  //   }
  // };

  return (
    <ListContainer>
      {articles?.map((card, i) => (
        <MainCard key={i} article={card} />
      ))}

      {/* <div ref={target}>{!isLastPage && <Loading />}</div> */}
      {/* {!isLastPage && <div ref={intersectRef}>{isLoading && <Loading />}</div>} */}

      {/* <InfinityScroll
        callNext={() => {          
          dispatch(__readArticles(page));
        }}
        is_next={paging.page ? true : false}
        loading={is_loading}
      >
        {postlist.map((p, idx) => {
          return <Post key={idx} {...p} />;
        })}
      </InfinityScroll> */}
    </ListContainer>
  );
};

export default MainList;

const ListContainer = styled.div`
  margin-right: 32px;
  min-width: 468px;
`;
