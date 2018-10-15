import './home-page.scss';
import React from 'react';
import { Icon, Button } from 'components';
import { loadData, loadData2 } from 'src/actions';
import { withAppState } from 'src/contexts';

let onClick = event => {
  console.log('clicked button ' + event.currentTarget);
};

class HomePage extends React.Component {
  onLoadClick = () => this.props.dispatch(loadData2('https://jsonplaceholder.typicode.com/todos/1'));

  render() {
    return (
      <div title="yarn storybook">
        <pre>{JSON.stringify(this.props.appState, null, 2)}</pre>

        <div>
          <Icon name="triangle" />
        </div>
        <Button modifiers="light-border" icon={<Icon name="facebook" fill="#3B5998" />} onClick={this.onLoadClick}>
          Click me
        </Button>
        <Button modifiers="call-to-action full-width" icon={<Icon name="facebook" fill="#3B5998" />} onClick={onClick}>
          Click me
        </Button>
        <Button
          modifiers="dark-border full-width"
          icon={<span style={{ pointerEvents: 'none' }}> ⚽ </span>}
          onClick={onClick}
        >
          Click me
        </Button>
        <Button modifiers="light-border full-width" onClick={onClick}>
          Click me
        </Button>
        <Button disabled modifiers="full-width" onClick={onClick}>
          disabled
        </Button>
      </div>
    );
  }
}

export default withAppState(HomePage);
