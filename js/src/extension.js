// This file contains the javascript that is run when the notebook is loaded.
// It contains some requirejs configuration and the `load_ipython_extension`
// which is required for any notebook extension.

// Configure requirejs
if (window.require) {
    window.require.config({
        map: {
            '*': {
                ipyaggrid: 'nbextensions/ipyaggrid/index',
            },
        },
    });
}

// Export the required load_ipython_extension
const load_ipython_extension = () => {};

export default load_ipython_extension;
