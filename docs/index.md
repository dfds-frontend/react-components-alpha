---
title: Guide
sidebar: auto
---

## Installation

### Using a CDN

Include the following to your document

```html
<head>
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/@dfds-frontend/react-components/dist/dfds.css">
</head>
<body>
  <script src="https://unpkg.com/@dfds-frontend/react-components/dist/dfds.js"></script>
</body>
```

Either copy the content on `https://unpkg.com/@dfds-frontend/react-components/dist/icons.min.svg` into the top of your body element in your html file or apply this script at the bottom of your `<body>` element.

```html
<script>
  window.Dfds.loadIcons(
    {
      path: 'https://unpkg.com/@dfds-frontend/react-components/dist/icons.min.svg',
      callback: undefined /* optional: add a callback */
    })
</script>
```

The React components are available from the window object.

```js
const { Icon, Button } = window.Dfds;
```

### Using NPM

Install @dfds-frontend/react-components from NPM:

```bash
npm i @dfds-frontend/react-components -S
```

Them import components from the package and use them

```js
import { Icon, Button } from '@dfds-frontend/react-components';

<Button modifiers="call-to-action" icon="chevron" onClick={event => log(event.target)}>
  click
</Button>;
```

Add the css and svg icons to the page.

```html
<head>
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/@dfds-frontend/react-components/dist/dfds.css">
  <!-- or use the file from node_modules/@dfds-frontend/react-components folder -->
</head>
```

```js
import { loadIcons } from '@dfds-frontend/react-components';

loadIcons({
  path: yourPath + 'node_modules/@dfds-frontend/react-components/dist/icons.min.svg',
  callback: undefined /* optional: add a callback */
});
/* or use the path from CDN */
```
