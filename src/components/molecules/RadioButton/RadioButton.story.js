import React from 'react';
import RadioButton from './RadioButton';
import { storiesOf } from '@storybook/react';
import { withNotes, withMarkdownNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { backgrounds } from 'root/stories/addon-backgrounds';
import Component from '@reach/component-component';

export default function CheckboxStory() {
  const props = {
    name: 'radio-button',
  };

  storiesOf('Radio buttons', module)
    .addDecorator(backgrounds)
    .add(
      'default',
      withMarkdownNotes(`
# RadioButton default

usage description here

## React

~~~jsx
<RadioButton
    onChange={this.onChange}
    required
    checked={this.state.isChecked}
    name={'my-checkbox'}
    hasError={false || true}
  >
  click me
</RadioButton>
~~~
      `)(() => (
        <Component
          initialState={{
            isChecked: false,
          }}
        >
          {({ setState, state }) => (
            <RadioButton
              onChange={() =>
                setState(s => ({
                  isChecked: !s.isChecked,
                }))
              }
              required
              checked={state.isChecked}
              name={'my-checkbox'}
            >
              click me
            </RadioButton>
          )}
        </Component>
      ))
    );
}
