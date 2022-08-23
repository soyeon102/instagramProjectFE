import axios from 'axios';
import MainCard from './MainCard';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import { __readArticles } from '../redux/modules/articleSlice';
import { useNavigate } from 'react-router-dom';

import Loading from './Loading';
import useIntersectObserver from '../hooks/useIntersectObserver';

const MainList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [page, setPage] = useState(0);

  const { isLoading, error, articles } = useSelector((state) => state.article);

  const [dataList, setDataList] = useState(articles);

  const intersectRef = useRef(null);
  const { isIntersect } = useIntersectObserver(intersectRef, {
    rootMargin: '0px',
    threshold: 0.6,
  });

  const [isLastPage, setIsLastPage] = useState(false);

  const loadMoreData = async () => {
    if (isIntersect) {
      if (articles.length === 0) {
        setIsLastPage(true);
      } else {
        setDataList([...dataList, ...articles]);
        setPage((prev) => prev + 1);
      }
    }
    dispatch(__readArticles(page));
  };

  useEffect(() => {
    loadMoreData();
  }, [isIntersect, isLastPage]);

  // if (isLoading) {
  //   return <Loading />;
  // }

  console.log('page', page, 'articles!!!', articles);

  return (
    <ListContainer>
      {dataList?.map((card, i) => (
        <MainCard key={i} article={card} />
      ))}

      <div ref={intersectRef}>{!isLastPage && <Loading />}</div>
      {/* {!isLastPage && <div ref={intersectRef}>{isLoading && <Loading />}</div>} */}
    </ListContainer>
  );
};

export default MainList;

const ListContainer = styled.div`
  margin-right: 32px;
  min-width: 468px;
`;
