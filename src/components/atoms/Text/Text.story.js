import React from 'react';
import Text from './Text';
import { storiesOf } from '@storybook/react';
import { withNotes, withMarkdownNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { backgrounds } from 'root/stories/addon-backgrounds';

export default function TextStory() {
  const props = {
    name: 'text',
  };

  storiesOf('Texts', module)
    .addDecorator(backgrounds)

    .add(
      'uppercase',
      withMarkdownNotes(`
# Text uppercase

usage description here

## React

~~~jsx
<Text mod="uppercase">
  Hello
</Text>
~~~
      `)(() => (
        <Text {...props} mod="uppercase">
          Hello
        </Text>
      ))
    );
}
