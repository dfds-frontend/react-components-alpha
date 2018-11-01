import 'whatwg-fetch';
import Promise from 'promise';

if (typeof window !== 'undefined' && !window.Promise) {
  window.Promise = Promise;
}
