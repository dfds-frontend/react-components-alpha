import './temp-page.scss';
import React from 'react';
import { Checkbox } from 'components';
import Component from '@reach/component-component';

export default class TempPage extends React.Component {
  state = {
    isChecked: false,
  };

  onChange = () => {
    this.setState(state => ({
      isChecked: !state.isChecked,
    }));
  };

  render() {
    return (
      <div>
        <Checkbox onChange={this.onChange} required checked={this.state.isChecked} name={'my-checkbox'}>
          click me
        </Checkbox>
        <Checkbox onChange={this.onChange} required checked={this.state.isChecked} name={'my-checkbox-2'}>
          click me
        </Checkbox>
        <Checkbox hasError onChange={() => {}} required checked={false} name={'my-checkbox-3'}>
          click me
        </Checkbox>
      </div>
    );
  }
}
