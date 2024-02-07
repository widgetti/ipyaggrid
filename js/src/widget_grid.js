import * as widgets from '@jupyter-widgets/base';
import { extend } from 'lodash';

// styles
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-fresh.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import 'ag-grid-community/dist/styles/ag-theme-dark.css';
import 'ag-grid-community/dist/styles/ag-theme-blue.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import 'ag-grid-community/dist/styles/ag-theme-bootstrap.css';

import * as builder from './widget_builder';
import * as Utils from './widget_utils';
import { version } from '../package.json';

// styles
import './styles/style.css';
import './styles/ag-theme-excel.css';
import './styles/switch_edit.css';
import './styles/switch_delete.css';
import './styles/menu_div.css';

const semver_range = `~${version}`;

class AgGridModel extends widgets.DOMWidgetModel {
    defaults() {
        return {
            ...super.defaults(),
            ...{                _model_name: 'AgGridModel',
                _view_name: 'AgGridView',
                _model_module: 'ipyaggrid',
                _view_module: 'ipyaggrid',
                _model_module_version: semver_range,
                _view_module_version: semver_range,

                _id: 0,

                width: '',
                height: '',

                theme: '',
                css_rules_down: [],
                license: '', // enterprise licence if paying features used

                quick_filter: true,
                export_csv: true,
                export_excel: true,
                index: false,
                keep_multiindex: true,
                hide_grid: false,
                compress_data: false,
                columns_fit: '',
                _grid_data_down: [],
                _grid_data_up: {},
                show_toggle_delete: false,
                show_toggle_edit: false,
                sync_on_edit: false,
                sync_grid: true,
                menu: {},
                user_params: {},
                center: false,
                unsync: false,

                _js_helpers_builtin: '',
                js_helpers_custom: '',
                js_helpers: '',
                js_pre_helpers: [],
                js_pre_grid: [],
                js_post_grid: [],

                _is_grid_options_multi: false,
                _grid_options_mono_down: '',
                _grid_options_multi_down: [],

                _counter_update_data: 0,
                _export_mode: '',
                _cell_updates: [],
            },
        };
    }
}

AgGridModel.serializers = {
    ...widgets.DOMWidgetModel.serializers,
    _grid_data_down: { deserialize: Utils.deserialize_data },
    _grid_data_up: { serialize: Utils.serialize_data },
    _grid_options_mono_down: { deserialize: Utils.deserialize_options },
    _grid_options_multi_down: { deserialize: Utils.deserialize_multi_options },
    _js_helpers_builtin: { deserialize: Utils.deserialize_options },
    js_helpers_custom: { deserialize: Utils.deserialize_options },
};

class AgGridView extends widgets.DOMWidgetView {
    render() {
        (async () => {
            this._id = this.model.get('_id');
            if (this.model.get('license') !== 'community') {
                const module = await import("ag-grid-enterprise");
                module.LicenseManager.setLicenseKey(this.model.get('license'))
            }
            const div_widget = this.el;
            const div_new = document.createElement('div');
            div_widget.appendChild(div_new);

            div_new.id = `widget-grid-${this._id}`;

            // CSS
            const style = document.createElement('style');
            document.head.appendChild(style);
            const {sheet} = style;

            // Add custom CSS
            this.model.get('css_rules_down').forEach(rule => {
                sheet.insertRule(`#widget-grid-${this._id} ${rule}`, 0);
            }); // Empty if Python css_rules not set

            // Get data
            const gridData = this.model.get('_grid_data_down');

            // Two exclusive cases: _grid_options_mono_down or _grid_options_multi_down
            if (this.model.get('_is_grid_options_multi')) {
                builder.buildAgGridMultiOptions(
                    this,
                    gridData,
                    this.model.get('_grid_options_multi_down'),
                    div_new,
                    sheet
                );
            } else {
                builder.buildAgGrid(
                    this,
                    gridData,
                    this.model.get('_grid_options_mono_down'),
                    div_new,
                    sheet
                );
            }
            console.log('end ipyaggrid render');
        })();
    }
}

export { AgGridModel, AgGridView };
