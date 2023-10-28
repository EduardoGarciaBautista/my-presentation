import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    :root {
        --background: #dee5ed;
        --font-color: #000000;
        --font-secondary-color: #999b9c;
        --primary-color: #41cba9;
        --neumorphic-top: #f4f6f7;
        --neumorphic-bottom: #c2cadd;
        --circle-color-1: #c2cadd;
        --circle-color-2: #f4f6f7;
        --circle-color-3: #f4f6f7;
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --background: #303234;
            --font-color: #0396d6;
            --font-secondary-color: #de7703;
            --primary-color: #e85906;
            --neumorphic-top: #3c3d3e;
            --neumorphic-bottom: #232426;
            --circle-color-1: rgba(39, 39, 39, 1);
            --circle-color-2: rgba(64, 64, 64, 1);
            --circle-color-3: rgba(75, 75, 75, 1);
        }
    }

    html {
        scroll-behavior: smooth;
        display: flex;
        justify-content: center;
    }
    
    body {
        font-family: 'Tilt Neon', sans-serif;
        background-color: var(--background);
        color: var(--font-color);
    }

    ::-webkit-scrollbar {
        display: none;
    }
`;

export default GlobalStyles;
