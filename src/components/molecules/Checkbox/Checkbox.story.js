import React from 'react';
import Checkbox from './Checkbox';
import { storiesOf } from '@storybook/react';
import { withNotes, withMarkdownNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { backgrounds } from 'root/stories/addon-backgrounds';
import Component from '@reach/component-component';

export default function CheckboxStory() {
  storiesOf('Checkboxes', module)
    .addDecorator(backgrounds)
    .add(
      'default',
      withMarkdownNotes(`
# Checkbox default

usage description here

## React

~~~jsx
<Checkbox
    onChange={this.onChange}
    required
    checked={this.state.isChecked}
    name={'checkbox-1'}
  >
  click me
</Checkbox>
~~~
      `)(() => (
        <Component
          initialState={{
            isChecked: false,
          }}
        >
          {({ setState, state }) => (
            <Checkbox
              onChange={() =>
                setState(s => ({
                  isChecked: !s.isChecked,
                }))
              }
              required
              checked={state.isChecked}
              name={'checkbox-1'}
            >
              click me
            </Checkbox>
          )}
        </Component>
      ))
    )


    .add(
      'with error',
      withMarkdownNotes(`
      # Checkbox error

      usage description here
      
      ## React
      
      ~~~jsx
      <Checkbox
          onChange={this.onChange}
          required
          checked={this.state.isChecked}
          name={'my-checkbox'}
          hasError={true}
          errorMessage="You must check it!"
        >
        click me
      </Checkbox>
      ~~~
      `)(() => (
        <Component
          initialState={{
            isChecked: false,
          }}
        >
          {({ setState, state }) => (
            <Checkbox
              onChange={() =>
                setState(s => ({
                  isChecked: !s.isChecked,
                }))
              }
              required
              checked={state.isChecked}
              name={'checkbox-2'}
              hasError={!state.isChecked}
              errorMessage="You must check it!"
            >
              click me
          </Checkbox>
          )}
        </Component>
      ))
    );
}
