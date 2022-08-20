import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as IconSearch } from '../assets/icon/icon-search.svg';
import icons from '../assets/img/icons.png';
import { colors } from '../theme/theme';

const SearchBox = () => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <SearchContainer
      onClick={() => {
        setIsFocus(true);
      }}
    >
      <SearchInput
        onBlur={(e) => {
          setIsFocus(false);
        }}
        placeholder={isFocus ? '검색' : ''}
      />
      {isFocus ? (
        <IconClose />
      ) : (
        <SearchWrap>
          <IconContainer>
            <IconSearch />
          </IconContainer>
          <SearchText>검색</SearchText>
        </SearchWrap>
      )}
    </SearchContainer>
  );
};

export default SearchBox;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  height: 36px;
`;

const SearchWrap = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 16px;
  transform: translateY(50%);
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  margin-right: 12px;
`;

const SearchText = styled.div`
  color: ${colors.text};
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 8px;
  background: #efefef;
  display: inline-block;
  padding: 0 16px;
  /* height: 100%; */
  border: none;
  outline: none;

  &::placeholder {
    color: ${colors.text};
  }
`;

const CloseButton = styled.button``;

const IconClose = styled.div`
  position: absolute;
  top: 0;
  right: 16px;
  transform: translate(50%, 50%);
  width: 20px;
  height: 20px;
  background-image: url(${icons});
  background-repeat: no-repeat;
  background-size: 440px 411px;
  background-position: -381px -97px;
  cursor: pointer;
`;
