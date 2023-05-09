declare module '*.vue';

import { Plugin } from 'vite';
// Define type for svg() function
declare module 'vite-svg-plugin' {
  function svg(): Plugin;
  export default svg;
}
