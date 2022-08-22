import styled, { css } from 'styled-components';
import { colors } from '../theme/theme';
import MyfeedCard from './MyfeedCard';
import { ReactComponent as IconPost } from '../assets/icon/icon-post.svg';
import { ReactComponent as IconHeart } from '../assets/icon/icon-small-heart.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  __readMyArticles,
  __readMyLikerticles,
} from '../redux/modules/myArticleSlice';
import { __readOneArticle } from '../redux/modules/articleSlice';

const MyfeedList = () => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState('myarticle');
  const [isSelect, setIsSelect] = useState(true);

  const myArticles = useSelector((state) => state.myArticle.myArticles);
  const myLikeArticles = useSelector((state) => state.myArticle.myLikeArticles);

  const detail = useSelector((state) => state.article.detail);

  const { isLoading } = useSelector((state) => state.myArticle);

  const handleGetMyfeed = () => {
    setCategory('myarticle');
    dispatch(__readMyArticles());
    console.log(myArticles);
  };

  const handleGetMyLikefeed = () => {
    setCategory('myLikeArticle');
    dispatch(__readMyLikerticles());
    console.log(myLikeArticles);
  };

  const handleMyCardClick = (id) => {
    // dispatch(__readOneArticle(id));
    // console.log('상세정보!!!', detail);
  };

  useEffect(() => {
    dispatch(__readMyArticles());
    dispatch(__readMyLikerticles());
  }, [dispatch]);

  return (
    <StMyFeed>
      <StCategories>
        <StCategory
          isSelect={category === 'myarticle'}
          onClick={handleGetMyfeed}
        >
          <IconPost />
          <p>게시물</p>
        </StCategory>
        <StCategory
          isSelect={category === 'myLikeArticle'}
          onClick={handleGetMyLikefeed}
        >
          <IconHeart />
          <p>좋아요</p>
        </StCategory>
      </StCategories>
      <StFeedList>
        {category === 'myarticle' &&
          myArticles.map((article) => (
            <MyfeedCard
              key={article.id}
              article={article.imgList[0]}
              handleMyCardClick={handleMyCardClick(article.id)}
            />
          ))}

        {category === 'myLikeArticle' &&
          myLikeArticles.map((article) => (
            <MyfeedCard
              key={article.id}
              article={article.imgList[0]}
              handleMyCardClick={() => handleMyCardClick(article.id)}
            />
          ))}
      </StFeedList>
    </StMyFeed>
  );
};

export default MyfeedList;

const StMyFeed = styled.div`
  border-top: 1px solid ${colors.border};
  width: 100%;
  margin: 0 auto;
`;

const StCategories = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: center;
`;
const StCategory = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
  margin-top: -1px;
  cursor: pointer;

  ${(props) =>
    props.isSelect &&
    css`
      font-weight: bold;
      border-top: 1px solid ${colors.textBlack};
    `}

  svg {
    margin-right: 10px;
  }

  & + & {
    margin-left: 100px;
  }
`;

const StFeedList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 30px;
`;
