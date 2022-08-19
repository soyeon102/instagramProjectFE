import styled from 'styled-components';
import { ReactComponent as Icon } from '../assets/icon/icon-modal-close.svg';

const Modal = ({ children }) => {
  return (
    <ModalContainer>
      <ModalContent>{children}</ModalContent>
      <IconClose />
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.65);
  width: 100vw;
  height: 100vh;
`;

const ModalContent = styled.div`
  z-index: 10;
`;

const IconClose = styled(Icon)`
  position: absolute;
  top: 20px;
  right: 40px;
  cursor: pointer;
`;
