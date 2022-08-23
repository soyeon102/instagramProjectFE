import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import styled from 'styled-components';
import icons from '../assets/img/icons.png';
import CardContents from './CardContents';
import { useDispatch, useSelector } from 'react-redux';
import { __readOneArticle } from '../redux/modules/articleSlice';
import { useEffect } from 'react';
import Loading from './Loading';

const CardDetail = ({ articleId }) => {
  const dispatch = useDispatch();

  const article = useSelector((state) => state.article.detail);

  const { isLoading } = useSelector((state) => state.article);

  useEffect(() => {
    dispatch(__readOneArticle(articleId));
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    Object.keys(article).length !== 0 && (
      <DetailContainer>
        <ImgContainer>
          <Swiper
            navigation={true}
            pagination={true}
            modules={[Pagination, Navigation]}
            style={{ width: '100%' }}
          >
            {article?.imgList.map((img) => (
              <SwiperSlide key={img.id}>
                <UploadImage src={img.imgUrl} alt='업로드 이미지' />
              </SwiperSlide>
            ))}
          </Swiper>
        </ImgContainer>
        <CardContents oneArticle={article} />
      </DetailContainer>
    )
  );
};

export default CardDetail;

const ImgContainer = styled.div`
  max-height: 769px;
  width: 572px;
  min-width: 500px;
  aspect-ratio: 571.2 / 769;
  justify-content: center;
  overflow: hidden;
  background-color: white;

  // 스와이퍼
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    margin-top: 0;
    width: 30px;
    height: 30px;
    transform: translateY(-50%);
    background-image: url(${icons});
    background-repeat: no-repeat;
    background-size: 440px 411px;

    ::after {
      content: '';
    }
  }

  .swiper-button-prev {
    background-position: -129px -97px;
  }

  .swiper-button-next {
    background-position: -160px -97px;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: inherit;
  max-width: inherit;
`;

const UploadImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
