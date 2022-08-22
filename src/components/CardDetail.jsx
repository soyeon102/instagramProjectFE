import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import styled from 'styled-components';
import icons from '../assets/img/icons.png';
import CardContents from './CardContents';
import { useDispatch, useSelector } from 'react-redux';
import { __readOneArticle } from '../redux/modules/articleSlice';
import { useEffect } from 'react';

const CardDetail = ({ articleId }) => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.article.detail);

  // console.log(article);

  // useEffect(() => {
  //   dispatch(__readOneArticle(articleID));
  // }, [dispatch]);

  const datas = [
    {
      id: 1,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3l92E93XkhMDBXWDzuDLimxu4EcOpihu_GQ&usqp=CAU',
    },
    {
      id: 2,
      imgUrl:
        'https://i1.sndcdn.com/artworks-Z5SLEGyINrvdjrkz-CQbgFA-t500x500.jpg',
    },
    {
      id: 3,
      imgUrl:
        'https://i1.sndcdn.com/artworks-gVzXNjKiMNdDcdml-QsFSgA-t500x500.jpg',
    },
    {
      id: 4,
      imgUrl:
        'https://www.newsquest.co.kr/news/photo/202205/96478_80014_5020.jpeg',
    },
  ];

  return (
    <DetailContainer>
      <ImgContainer>
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Pagination, Navigation]}
          style={{ width: '100%' }}
        >
          {datas.map((data) => (
            <SwiperSlide key={data.id}>
              <UploadImage src={data.imgUrl} alt='업로드 이미지' />
            </SwiperSlide>
          ))}
        </Swiper>
      </ImgContainer>
      <CardContents articles={articles} />
    </DetailContainer>
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
