import React from 'react';
import Link from './Link';
import { storiesOf } from '@storybook/react';
import { withNotes, withMarkdownNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { backgrounds } from 'root/stories/addon-backgrounds';

export default function LinkStory() {
  const props = {
    name: 'link',
  };

  storiesOf('Links', module)
    .addDecorator(backgrounds)

    .add(
      'default',
      withMarkdownNotes(`
# Link default

usage description here

## React

~~~jsx
<Link href="https://google.com" target="_blank">
  Hello
</Link>
~~~
      `)(() => (
        <Link {...props} href="https://google.com" target="_blank">
          Hello
        </Link>
      ))
    );
}
