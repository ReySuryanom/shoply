import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

function GlobalStyles() {
  return (
    <Fragment>
      <BaseStyles />
      <CustomStyles />
    </Fragment>
  );
}

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
  }
`;

export default GlobalStyles;
