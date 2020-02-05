import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router';

import GlobalStyle from './globalStyles';

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <AppRouter />
  </Fragment>
, document.getElementById('root'));
