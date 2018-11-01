import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/App';
import './Bootstrapper';
import 'src/icon-system/icons.svg'; // make it available as resource at url: /icons.svg

ReactDOM.render(<App production googleTagManager />, document.getElementById('react-app'));
