import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: #e9ecef;
    }
    h1, h3{
        font-family: "Roboto", sans-serif;
    }
    button, p, span{
        font-family: "Open Sans", sans-serif;
    }
`;

// Colors:
// White light > #fafafa
// white (background) > #e9ecef
// Gray (font) > #343a40
// blue (details) > #219ebc

// Fonts:
// Titulos: font-family: "Roboto", sans-serif;
// Paragrafos: font-family: "Open Sans", sans-serif;

