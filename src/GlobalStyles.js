import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
  ${reset}
  body {
    font-size: 14px;
  }
`;

export default GlobalStyles;
