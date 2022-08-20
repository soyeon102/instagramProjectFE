import styled from 'styled-components';
import ImgSlide from './ImgSlide';
import CardContents from './CardContents';

const CardDetail = () => {
  return (
    <DetailContainer>
      <ImgSlide />
      <CardContents />
    </DetailContainer>
  );
};

export default CardDetail;

const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: inherit;
  max-width: inherit;
`;
