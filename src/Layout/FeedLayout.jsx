import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const FeedLayout = ({ children }) => {
  return <MyContainer>{children}</MyContainer>;
};

export default FeedLayout;

const MyContainer = styled(Container)`
  max-width: 844px;
`;
