import React, { ReactElement } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const GlobalStyledComponent = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans', 'sans-serif';
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export function GlobalStyle(): ReactElement {
  return (
    <>
      <Normalize />
      <GlobalStyledComponent />
    </>
  );
}
