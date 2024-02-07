// Entry point for the notebook bundle containing custom model definitions.
// Export widget models and views, and the npm package version number.
const baseUrl = document.querySelector('body').getAttribute('data-base-url');
__webpack_public_path__ = `${baseUrl}nbextensions/ipyaggrid/`;

export * from './widget';
export { version } from '../package.json';
