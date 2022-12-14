/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import { ReactComponent as IconBack } from '../assets/icon/icon-back.svg';
import { ReactComponent as IconMedia } from '../assets/icon/icon-media.svg';
import defaultImg from '../assets/img/img-profile.jpg';
import { colors } from '../theme/theme';
import icons from '../assets/img/icons.png';
import { useDispatch } from 'react-redux';
import { __createArticles } from '../redux/modules/articleSlice';
import { getCookie } from '../shared/Cookie';

const NewPost = ({ modalClose }) => {
  const nick = getCookie('nickname');
  const dispatch = useDispatch();
  const [formVal, setFormVal] = useState({
    nickname: nick,
    content: '',
  });
  const [files, setFiles] = useState([]);
  const { nickname, content } = formVal;

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 6,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg'],
      'image/jpg': ['.jpg'],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const handleAddPost = () => {
    const formData = new FormData();
    const newFormVal = {
      nickname: nick,
      content: content,
    };

    files.map((file, i) => {
      formData.append('multipartFile', files[i]);
    });

    formData.append(
      'dto',
      new Blob([JSON.stringify(newFormVal)], { type: 'application/json' })
    );

    dispatch(__createArticles(formData));
    modalClose();
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  useEffect(() => {
    getCookie('ACCESS_TOKEN');
  }, []);

  return (
    <StNewPost>
      <StNewPostHeader>
        <IconBack />
        <StText>??? ????????? ?????????</StText>
        <StText
          primary
          fz='14px'
          style={{ cursor: 'pointer' }}
          onClick={handleAddPost}
        >
          ????????????
        </StText>
      </StNewPostHeader>

      <StNewPostBody>
        <StNewPostBodyLeft>
          {files.length === 0 && (
            <StImageTab {...getRootProps({ className: 'dropzone' })}>
              <IconMedia />
              <p>????????? ???????????? ????????? ????????? ????????????</p>
              <StButton>
                {/* <input {...getInputProps()} /> */}
                ??????????????? ??????
              </StButton>
            </StImageTab>
          )}

          {files.length !== 0 && (
            <StImageTab>
              <Swiper
                navigation={true}
                pagination={true}
                modules={[Pagination, Navigation]}
              >
                {files.map((file) => (
                  <SwiperSlide key={file.path}>
                    <UploadImage src={file.preview} alt='????????? ?????????' />
                  </SwiperSlide>
                ))}
              </Swiper>
            </StImageTab>
          )}
        </StNewPostBodyLeft>

        <StNewPostBodyRight>
          <StNewPostName>
            <UserProfile>
              <img src={defaultImg} alt='?????? ?????????'></img>
            </UserProfile>
            <StText>{nick}</StText>
          </StNewPostName>
          <StTextarea
            placeholder='?????? ??????...'
            value={content}
            onChange={(e) => {
              setFormVal({ content: e.target.value });
            }}
          ></StTextarea>
        </StNewPostBodyRight>
      </StNewPostBody>
    </StNewPost>
  );
};

export default NewPost;

const StNewPost = styled.div`
  width: 938px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;

const StNewPostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.border};
  padding: 8px 16px;
`;

const StNewPostBody = styled.div`
  height: 598px;
  display: flex;
`;

const StNewPostBodyLeft = styled.div`
  width: 598px;
  height: 100%;
  border-right: 1px solid ${colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StImageTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  p {
    font-size: 22px;
    color: ${colors.textBlack};
    font-weight: lighter;
  }

  * + * {
    margin-top: 20px;
  }

  // ????????????
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

const StButton = styled.button`
  color: white;
  background-color: ${colors.primary};
  border: none;
  outline: none;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  width: 120px;
  margin: 20px auto;
  padding: 5px;
  line-height: 20px;
  text-align: center;
`;

const StNewPostBodyRight = styled.div`
  width: 340px;
  height: 100%;
  padding: 15px;
`;

const StNewPostName = styled.div`
  display: flex;
  align-items: center;
`;

const StTextarea = styled.textarea`
  width: 100%;
  height: 90%;
  display: inline-block;
  border: none;
  outline: none;
  padding-top: 20px;
  resize: none;
`;

const UserProfile = styled.div`
  width: 28px;
  height: 28px;
  margin-right: 8px;

  img {
    width: 100%;
  }
`;

const StText = styled.p`
  color: ${(props) => (props.primary ? colors.primary : colors.black)};
  font-size: ${(props) => props.fz};
  font-weight: bold;
`;

const UploadImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
