import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%
    }

    body {
        font: 14px 'Robot', sans-serif;
        background: #ecf1f8;
        color: #FFF;
        -webkit-font-smootinng: antialiased !important;
    }

    ul {
        display: none
    }
`;