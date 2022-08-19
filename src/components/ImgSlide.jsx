import styled from 'styled-components';

const ImgSlide = () => {
  return <Container></Container>;
};

export default ImgSlide;

const Container = styled.div`
  max-height: 769px;
  max-width: 571.2px;
  aspect-ratio: 571.2 / 769;
  flex-basis: 571.2px;

  background: #aaaaaa;

  flex-grow: 1;
  justify-content: center;
  min-height: 450px;
  overflow: hidden;
  flex-shrink: 1;
`;
