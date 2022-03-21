import * as base from '@jupyter-widgets/base';

import * as myWidget from './widget';
import { version } from './index';

const id = 'ipyaggrid:plugin';
const requires = [base.IJupyterWidgetRegistry];
const autoStart = true;

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
