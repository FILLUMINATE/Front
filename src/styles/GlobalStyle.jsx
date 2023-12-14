import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'SOYOMapleRegular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/SOYOMapleRegularTTF.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }

    body {
        font-family: 'SOYOMapleRegular';
    }
`;

export default GlobalStyle;
