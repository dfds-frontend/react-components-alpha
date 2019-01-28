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
    onChange={() => this.onChange(1)}
    checked={this.state.index === 1}
    name='my-checkbox'
    mod='horizontal'
  >
  click me
</RadioButton>
~~~
      `)(() => (
        <Component
          initialState={{
            index: 0,
          }}
        >
          {({ setState, state }) => (
            <div>
              <RadioButton
                onChange={() => setState({ index: 1 })}
                checked={state.index === 1}
                name='my-radio-button'
                mod='horizontal'
              >
                click me
            </RadioButton>
              <RadioButton
                onChange={() => setState({ index: 2 })}
                checked={state.index === 2}
                name='my-radio-button'
                mod='horizontal'
              >
                click me
            </RadioButton>
            </div>
          )}
        </Component>
      ))
    );
}
