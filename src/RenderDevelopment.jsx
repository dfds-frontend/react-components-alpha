import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/App';
import './Bootstrapper';
import 'src/icon-system/icons.svg'; // make it available as resource at url: /icons.svg

// import testES8 from 'src/test-es8';
// testES8();

const testLoadingSpinner = false;
const rootDom = document.getElementById('react-app');

!testLoadingSpinner &&
  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    rootDom
  );

testLoadingSpinner &&
  setTimeout(
    () =>
      ReactDOM.render(
        <StrictMode>
          <App />
        </StrictMode>,
        rootDom
      ),
    4000
  );
