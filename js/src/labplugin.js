import * as base from '@jupyter-widgets/base';

import * as myWidget from './widget';
import { version } from './index';

const id = 'ipyaggrid:plugin';
const requires = [base.IJupyterWidgetRegistry];
const autoStart = true;

const conf = JSON.parse(document.getElementById("jupyter-config-data").textContent);
__webpack_public_path__ = (conf.fullLabextensionsUrl || `${conf.baseUrl}lab/extensions`) + "/ipyaggrid/static/";

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
