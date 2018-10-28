import 'components/quarks/_main.scss';
import '@dfds-frontend/fonts/main/font.css';
import '@dfds-frontend/icons/main/icons.svg'; // make it available as resource at url: /icons.svg
import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import 'whatwg-fetch';
import Promise from 'promise';

import testES8 from './test-es8';

if (typeof window !== 'undefined' && !window.Promise) {
  window.Promise = Promise;
}

testES8();

ReactDOM.render(
  <StrictMode><App/></StrictMode>, document.getElementById('root'));
