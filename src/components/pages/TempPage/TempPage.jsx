import './temp-page.scss';
import React from 'react';
import { Checkbox, RadioButton } from 'components';

export default class TempPage extends React.Component {
  state = {
    index: 0,
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
        <RadioButton
          onChange={() => this.setState({ index: 1 })}
          checked={this.state.index === 1}
          name="my-radio-button"
          mod="horizontal"
        >
          click me
        </RadioButton>
        <RadioButton
          onChange={() => this.setState({ index: 2 })}
          checked={this.state.index === 2}
          name="my-radio-button"
          mod="horizontal"
        >
          click me
        </RadioButton>

        <Checkbox onChange={this.onChange} required checked={this.state.isChecked} name={'my-checkbox'}>
          click me
        </Checkbox>
        <Checkbox onChange={this.onChange} required checked={this.state.isChecked} name={'my-checkbox-2'}>
          click me
        </Checkbox>
        <Checkbox
          hasError
          errorMessage="You must check it"
          onChange={() => {}}
          required
          checked={false}
          name={'my-checkbox-3'}
        >
          click me
        </Checkbox>
      </div>
    );
  }
}
