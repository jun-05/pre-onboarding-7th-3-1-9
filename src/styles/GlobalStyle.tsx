import React from 'react';
import { Global, css } from '@emotion/react';

export function GlobalStyle() {
  return <Global styles={style} />;
}

const style = css`
  body {
    padding: 0;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input {
    appearance: none;
    border: 0;
  }

  button {
    border: 0;
    background-color: transparent;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    appearance: none;
  }

  :root {
    font-size: 10px;
  }

  body {
    background-color: #cae9ff;
  }
`;
