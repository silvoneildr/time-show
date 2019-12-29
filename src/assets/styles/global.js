import { themeColors } from '../styles/_variables';
import OpenSansRegular from '../fonts/OpenSansRegular.ttf';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansRegular});
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root {
    height: 100%;
    color: ${themeColors.text};
    background-color: ${themeColors.background};
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: Open Sans;
  }

  ::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #c0c0c0;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a9a9a9;
  border-radius: 5px;
}
`;
