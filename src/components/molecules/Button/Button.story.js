import React from 'react';
import Button from './Button';
import { Icon } from 'components';
import { storiesOf } from '@storybook/react';
import { withNotes, withMarkdownNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { backgrounds } from 'root/stories/addon-backgrounds';

export default function ButtonStory() {
  const props = {
    name: 'button',
  };

  storiesOf('Buttons', module)
    .addDecorator(backgrounds)

    .add(
      'default',
      withMarkdownNotes(`
# Button default

usage description here

## React

~~~jsx
<Button onClick={this.state.onClick}>
  Click me
</Button>
~~~
      `)(() => (
        <Button {...props} onClick={action('clicked')}>
          Click me
        </Button>
      ))
    )
    .add(
      'default with icon',
      withMarkdownNotes(`
# Button call to action

usage description here

## React

~~~jsx
<Button onClick={action('clicked')} mod="center-center">
  Click me <Icon name="chevron" mod="move-right " />
</Button>
~~~
      `)(() => (
        <Button {...props} onClick={action('clicked')} mod="center-center">
          Click me <Icon name="chevron" mod="move-right " />
        </Button>
      ))
    )
    .add(
      'call to action',
      withMarkdownNotes(`
# Button call to action

usage description here

## React

~~~jsx
<Button
  mod='cta'
  onClick={this.onClick}
>
  Click me
</Button>
~~~
      `)(() => (
        <Button {...props} mod="cta" onClick={action('clicked')}>
          Click me
        </Button>
      ))
    )
    .add(
      'call to action with icon',
      withMarkdownNotes(`
# Button call to action

usage description here

## React

~~~jsx
<Button mod="cta center-center" onClick={action('clicked')}>
  Click me <Icon name="chevron" mod="move-right" />
</Button>
~~~
      `)(() => (
        <Button {...props} mod="cta center-center" onClick={action('clicked')}>
          Click me <Icon name="chevron" mod="move-right" />
        </Button>
      ))
    )
    .add(
      'disabled with icon',
      withMarkdownNotes(`
# Button call to action

usage description here

## React

~~~jsx
<Button
  disabled
  onClick={this.onClick}
>
  Click me
</Button>
~~~
      `)(() => (
        <Button {...props} disabled onClick={action('clicked')}>
          Click me
        </Button>
      ))
    )

    .add(
      'disabled call to action',
      withMarkdownNotes(`
# Button call to action

usage description here

## React

~~~jsx
<Button
  disabled
  mod='cta'
  onClick={this.onClick}
>
  Click me
</Button>
~~~
      `)(() => (
        <Button {...props} disabled mod="cta" onClick={action('clicked')}>
          Click me
        </Button>
      ))
    )

    .add(
      'full-width light-border',
      withMarkdownNotes(`
# Button call to action

usage description here

## React

~~~jsx
<Button
  modifiers='full-width light-border'
  onClick={this.onClick}
>
  Click me
</Button>
~~~
      `)(() => (
        <Button {...props} modifiers="light-border full-width" onClick={action('clicked')}>
          Click me
        </Button>
      ))
    );
}
