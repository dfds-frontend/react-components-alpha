import 'components/quarks/_main.scss';
import 'src/icon-system/icons.svg';
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
