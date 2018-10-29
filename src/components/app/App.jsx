import 'components/quarks/styles';
import './app.scss';

import React, {Component} from 'react';
import { AppContext } from 'src/contexts';
import { appReducer } from 'src/reducers';
import { HomePage } from 'components';

const isDevelopmentEnvironment = process.env.NODE_ENV === 'development';
const isProductionEnvironment = process.env.NODE_ENV === 'production';


/**
 * Similar to Redux Thunk
 */
function appDispatchResolver(app, action) {
  if (typeof action === 'function') {
    action(app.dispatch, app.getState);
  } else {
    app.setState(prevState => ({
      values: appReducer(prevState.values, action)
    }));
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        test: 'test'
      },
      dispatch: this.dispatch
    };
  }

  getState = () => this.state.values;

  dispatch = action => appDispatchResolver(this, action);

  render() {
    return (
      <div className="app">
        <AppContext.Provider value={this.state}>
          <HomePage />
        </AppContext.Provider>
      </div>
    );
  }
}
