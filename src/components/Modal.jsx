import { useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as Icon } from '../assets/icon/icon-modal-close.svg';

const Modal = ({ children, modalClose }) => {
  // 스크롤 이벤트 발생
  // useEffect(() => {
  //   document.body.style.cssText = `
  //     position: fixed;
  //     top: -${window.scrollY}px;
  //     overflow-y: scroll;
  //     width: 100%;`;
  //   return () => {
  //     const scrollY = document.body.style.top;
  //     document.body.style.cssText = '';
  //     window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
  //   };
  // }, []);

  return (
    <ModalContainer onClick={modalClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
      <IconClose onClick={modalClose} />
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
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
