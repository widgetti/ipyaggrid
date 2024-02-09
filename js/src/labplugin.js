import * as base from '@jupyter-widgets/base';

import * as myWidget from './widget';
import { version } from './index';

const id = 'ipyaggrid:plugin';
const requires = [base.IJupyterWidgetRegistry];
const autoStart = true;

const baseUrl = JSON.parse(document.getElementById("jupyter-config-data").textContent).baseUrl;
__webpack_public_path__ = `${baseUrl}lab/extensions/ipyaggrid/static/`;

const activate = (app, widgets) => {
    console.log('JupyterLab extension ipyaggrid is activated!');

    widgets.registerWidget({
        name: 'ipyaggrid',
        version,
        exports: myWidget,
    });
};

export default {
    id,
    requires,
    activate,
    autoStart,
};
