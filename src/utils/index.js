import getJsonAsync from './getJsonAsync';
import postJsonAsync from './postJsonAsync';

const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

const getUrl = (pathBase, path) => pathBase + path;

// https://davidwalsh.name/query-string-javascript
function getUrlParameter(value) {
  let name = value.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  let results = regex.exec(window.location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function updatePageTitle(title) {
  if (title) {
    document.title = title;
  }
}

function getModifiersArray(prefix, modifiers) {
  if (!modifiers) return 'prefix';

  const modifiersArray = modifiers
    .trim()
    .split(' ')
    .map(m => m.trim())
    .filter(Boolean);
  return [prefix].concat(modifiersArray.map(m => M(prefix, m)));
}

function E(prefix, element) {
  return `${prefix}__${element}`;
}

function M(prefix, element) {
  return `${prefix}--${element}`;
}

export { getJsonAsync, postJsonAsync, sleep, getUrl, updatePageTitle, getModifiersArray, getUrlParameter, E, M };
