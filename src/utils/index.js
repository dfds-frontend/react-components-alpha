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
  if (!modifiers) return '';

  const modifiersArray = modifiers
    .trim()
    .split(' ')
    .map(m => m.trim())
    .filter(Boolean);
  return modifiersArray.map(m => `${prefix}--${m}`);
}

export { getJsonAsync, postJsonAsync, sleep, getUrl, updatePageTitle, getModifiersArray, getUrlParameter };
