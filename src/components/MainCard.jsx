import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Modal from '../components/Modal';
import CardDetail from '../components/CardDetail';
import { ReactComponent as IconMore } from '../assets/icon/icon-more.svg';
import { ReactComponent as IconEmptyHeart } from '../assets/icon/icon-empty-heart.svg';
import { ReactComponent as IconHeart } from '../assets/icon/icon-heart.svg';
import { ReactComponent as IconComment } from '../assets/icon/icon-comment.svg';
import { ReactComponent as IconShare } from '../assets/icon/icon-share.svg';
import defaultImg from '../assets/img/img-profile.jpg';
import styled from 'styled-components';
import icons from '../assets/img/icons.png';
import { colors } from '../theme/theme';

const MainCard = () => {
  const [isLike, setIsLike] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  const handleAddPost = () => {
    setIsCreate(true);
    document.body.style.overflow = 'hidden';
  };

  const handleModalClose = () => {
    setIsCreate(false);
    document.body.style.overflow = 'unset';
  };

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
    <CardContainer>
      <CardHeader>
        <UserProfile>
          <ProfileImg>
            <img src={defaultImg} alt='프로필사진' />
          </ProfileImg>
          <ProfileName>username</ProfileName>
        </UserProfile>
        <IconContainer>
          <IconMore />
        </IconContainer>
      </CardHeader>

      <CardBody>
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
      </CardBody>

      <CardFooter>
        <Icons>
          <IconContainer onClick={() => setIsLike(!isLike)}>
            {isLike ? <IconHeart /> : <IconEmptyHeart />}
          </IconContainer>
          <IconContainer>
            <IconComment />
          </IconContainer>
          <IconContainer>
            <IconShare />
          </IconContainer>
        </Icons>
        <Contents>
          <LikeNum>좋아요 100개</LikeNum>
          <Content>
            <span>username</span> 끝내줬던 여름휴가🌊
          </Content>
          <Comment onClick={handleAddPost}>댓글 4개 모두보기</Comment>
          <UploadTime>1일 전</UploadTime>
        </Contents>
      </CardFooter>

      {/* 상세 모달 */}
      {isCreate && (
        <Modal modalClose={handleModalClose}>
          <CardDetail />
        </Modal>
      )}
    </CardContainer>
  );
};

export default MainCard;

const CardContainer = styled.div`
  width: 470px;
  padding-bottom: 20px;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  margin-bottom: 20px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  height: 56px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
  }
`;
const ProfileName = styled.div`
  margin-left: 10px;
  color: ${colors.textBlack};
  font-weight: bold;
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  padding: 8px;
  margin-top: 6px;
  cursor: pointer;
`;

const CardBody = styled.div`
  width: 100%;
  height: 100%;
`;
const CardFooter = styled.div``;
const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #dedede;
  height: 588px;

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

const Icons = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  margin-bottom: 6px;
`;

const Contents = styled.div`
  padding: 0 16px;

  div + div {
    margin-top: 8px;
  }
`;

const LikeNum = styled.div`
  color: ${colors.textBlack};
  font-weight: bold;
`;

const Content = styled.div`
  min-height: 18px;

  span {
    font-weight: bold;
  }
`;

const Comment = styled.div`
  color: ${colors.textTime};
  margin-bottom: 20px;
  cursor: pointer;
`;

const UploadTime = styled.div`
  font-size: 10px;
  color: ${colors.textTime};
`;

const UploadImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
