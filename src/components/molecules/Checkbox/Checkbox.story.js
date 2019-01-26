import React from 'react';
import Checkbox from './Checkbox';
import { storiesOf } from '@storybook/react';
import { withNotes, withMarkdownNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { backgrounds } from 'root/stories/addon-backgrounds';
import Component from '@reach/component-component';

export default function CheckboxStory() {
  const props = {
    name: 'checkbox',
  };

  storiesOf('Checkboxes', module)
    .addDecorator(backgrounds)

    .add(
      'default',
      withMarkdownNotes(`
# Checkbox default

usage description here

## React

~~~jsx
<Checkbox onClick={onClick}>
  Click me
</Checkbox>
~~~
      `)(() => (
        <Checkbox {...props} onClick={action('clicked')}>
          Click me
        </Checkbox>
      ))
    );
}
