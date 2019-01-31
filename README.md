# DFDS ReactJS components

Unofficial library for DFDS

## methodology and strategy

- Semantic HTML
- Atomic design, bottom up.
- BEM naming for styling.
- Eliminate dead CSS. Only needed styling are compiled. The React components import the needed styling.
- Component based architecture. Each component owns the style-guide definition, styling and unit testing.
- A css bundle is generated which can be shared to other projects than ReactJS. (markup pattern)

## tech used

- Babel 7, ECMAScript 8
- Webpack, Webpack-dev-server
- React, Storybook
- Context Api using the (Redux + Redux thunk) pattern

## quick start

### view component library

[view storybook](https://dfds-frontend.github.io/react-components)

- git clone/download
- yarn install
- yarn storybook
- open localhost:6006 in a browser

## demo of prototype

- [codesandbox](https://codesandbox.io/s/405yrp7k0) npm modules
- [codepen](https://codepen.io/kunukn/pen/414587619833622115ad229241a63b1a?editors=0010) cdn resource

## library usage example with npm

```jsx
import { Button, Icon } from '@dfds-frontend/react-components';

let IconAndButtonExample = () => (
  <div>
    <Icon name="triangle" fill="red" />

    <Button modifiers="call-to-action full-width" onClick={this.onCallToActionClick}>
      Click me <Icon name="chevron" fill="#ed8b00" />
    </Button>
  </div>
);
```

## cdn

https://unpkg.com/@dfds-frontend/react-components/

use

- https://unpkg.com/@dfds-frontend/react-components/dist/dfds.js
- https://unpkg.com/@dfds-frontend/react-components/dist/dfds.css
- https://unpkg.com/@dfds-frontend/react-components/dist/icons.min.svg
- https://unpkg.com/@dfds-frontend/react-components/dist/fonts/font.css (fonts only)

## npm

Install @dfds-frontend/react-components from NPM:

```bash
npm i -S @dfds-frontend/react-components
```

Them import components from the package and use them

```js
import { Button } from '@dfds-frontend/react-components';

<Button onClick={event => console.log(event.target)}>click</Button>;
```

## supported browsers

modern browsers + IE 11

## run tests

- yarn test

## design principles

- simplicity - BEM and composable components
- overview - component library using storybook with code snippets and responsive web design test using view ports
- portability - css bundle with icons and font. It's just markup and css classnames
- availability - CDN: umd bundle, css bundle, svg icons
- testable - unit tests for all components
- playability - online demo website
- off the shelf and conventions - using BEM, component architecture and standard tools (Webpack, React, Storybook)

## documentation

[documentation](/docs/index.md)

## development

- git clone/download
- yarn install
- yarn storybook
- open localhost:6006 in a browser
