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

const MainList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [page, setPage] = useState(0);

  const { isLoading, error, articles } = useSelector((state) => state.article);

  // const [dataList, setDataList] = useState(articles);

  useEffect(() => {
    dispatch(__readArticles(page));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <ListContainer>
      {articles?.map((card, i) => (
        <MainCard key={i} article={card} />
      ))}

      {/* <div ref={intersectRef}>{!isLastPage && <Loading />}</div> */}
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
