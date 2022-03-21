import { Grid } from 'ag-grid-community';
import { LicenseManager } from 'ag-grid-enterprise';
import * as moduled3 from 'd3';

import * as Utils from './widget_utils';
import { exportFunc } from './widget_export';
import { JSONfunc } from './widget_json';

// make available to helpers and js eval-ed
const d3 = moduled3;

/**
 * Builds the grid according to the options and data,
 * in the given div, and setups the style.
 * @param {WidgetView} view
 * @param {Array} data
 * @param {HTMLDivElement} div
 * @param {Object} gridOptions
 * @param {StyleSheet} sheet
 */
const buildAgGrid = (view, gridData, gridOptions_str, div, sheet, dropdownMulti = null) => {
    // center and width
    if (view.model.get('center')) {
        div.style.margin = 'auto';
    }
    div.style.width = view.model.get('width');

    // License
    if (view.model.get('license') !== '') {
        LicenseManager.setLicenseKey(view.model.get('license'));
    }

    // Add menu div, regrouping all the buttons and inputs
    const menuDiv = document.createElement('div');
    menuDiv.id = `menu-${view._id}`;
    menuDiv.style.width = '100%';
    div.appendChild(menuDiv);

    // Add grid div
    const gridDiv = document.createElement('div');
    gridDiv.id = `grid-${view._id}`;
    gridDiv.style.width = '100%';
    gridDiv.style.height = view.model.get('height');
    view.gridDiv = gridDiv;
    div.appendChild(gridDiv);

    // Grid style
    gridDiv.className = view.model.get('theme');

    // parse menu param - my contain js
    const menu = JSON.parse(JSON.stringify(view.model.get('menu')));

    // add menu variables
    menu.inputDivs = [];
    menu.buttonDivs = [];
    menu.menuDiv = menuDiv;

    // MAIN SEQUENCE

    // pre helpers js
    view.model.get('js_pre_helpers').forEach(jscode => {
        try {
            eval(jscode);
        } catch (e) {
            console.log('eval failed for code: ');
            console.log(jscode);
            console.log(e);
        }
    });

    // helpers js
    let helpersBuiltin = {};
    let helpersCustom = {};
    eval(view.model.get('_js_helpers_builtin')); // defines helpersBuiltin
    eval(view.model.get('js_helpers_custom')); // defines helpersCustom
    const helpers = Object.assign({}, helpersBuiltin, helpersCustom);
    window.helpers = helpers;
    window.JSONfunc = JSONfunc;
    view.model.set({ js_helpers: JSONfunc.stringify(helpers) });
    view.touch();

    // parse gridOptions
    const gridOptions = JSONfunc.parse(gridOptions_str, helpers);
    // Attach gridOptions to view
    view.gridOptions = gridOptions;

    // set listener for column_fit
    if (view.model.get('columns_fit') === 'size_to_fit') {
        gridOptions.onGridReady = () => {
            gridOptions.api.sizeColumnsToFit();
        };
    } else if (view.model.get('columns_fit') === 'auto') {
        gridOptions.onGridReady = () => {
            const allColumnIds = [];
            gridOptions.columnApi.getAllColumns().forEach(column => {
                allColumnIds.push(column.colId);
            });
            gridOptions.columnApi.autoSizeColumns(allColumnIds);
        };
    }

    // pre grid js
    view.model.get('js_pre_grid').forEach(jscode => {
        try {
            eval(jscode);
        } catch (e) {
            console.log('eval failed for code: ');
            console.log(jscode);
            console.log(e);
        }
    });

    // instantiate grid
    const grid = new Grid(gridDiv, gridOptions);
    window.grid = grid;

    // inject gridData
    gridOptions.api.setRowData(gridData);

    // post grid js
    view.model.get('js_post_grid').forEach(jscode => {
        try {
            eval(jscode);
        } catch (e) {
            console.log('eval failed for code: ');
            console.log(jscode);
            console.log(e);
        }
    });

    // default behavior
    gridOptions.api.setQuickFilter('');
    gridOptions.api.doLayout();

    // END MAIN SEQUENCE

    // listen to _counter_update_data
    view.model.on('change:_counter_update_data', () => {
        if (view.model.get('_export_mode') === 'delete') {
            const rows = gridOptions.api.getSelectedRows();
            gridOptions.api.updateRowData({ remove: rows });
            if (view.model.get('sync_grid')) {
                exportFunc.exportGrid(gridOptions, view);
            }
        }
        if (view.model.get('_export_mode') === 'rows') {
            if (gridOptions.enableRangeSelection) exportFunc.exportRowsOfRange(gridOptions, view);
            if ('rowSelection' in gridOptions) exportFunc.exportRows(gridOptions, view);
        }
        if (view.model.get('_export_mode') === 'grid') {
            exportFunc.exportGrid(gridOptions, view);
        }
        if (view.model.get('_export_mode') === 'columns') {
            if (gridOptions.enableRangeSelection) exportFunc.exportColumns(gridOptions, view);
        }
    });

    // listen to edit changes
    if (view.model.get('sync_on_edit')) {
        window.gridOptions = gridOptions;
        gridOptions.api.addEventListener('cellValueChanged', params => {
            // console.log(params);
            exportFunc.exportGrid(gridOptions, view);
        });
    }

    // listen to _grid_data_down
    view.model.on('change:_grid_data_down', () => {
        gridOptions.api.setRowData(view.model.get('_grid_data_down'));
        if (view.model.get('sync_grid')) {
            exportFunc.exportGrid(gridOptions, view);
        }
    });

    // Add grid listener to auto export
    if (view.model.get('export_mode') === 'auto') {
        if (gridOptions.enableRangeSelection) {
            gridOptions.api.addEventListener('rangeSelectionChanged', event => {
                // if (event.finished) {
                    exportFunc.exportRangeData(gridOptions, view);
                    exportFunc.exportColumns(gridOptions, view);
                    exportFunc.exportRowsOfRange(gridOptions, view);
                // }
            });
        }
        if ('rowSelection' in gridOptions) {
            gridOptions.api.addEventListener('rowSelected', () => {
                exportFunc.exportRows(gridOptions, view);
            });
        }
    }

    // Display menu
    Utils.setupInputs(view, menu, sheet, gridOptions, dropdownMulti);
    Utils.setupButtons(view, menu, sheet, gridOptions, helpers);
    Utils.menuBuiler(view, menu, sheet);

    // Hide grid if necessary
    if (view.model.get('hide_grid')) {
        view.gridDiv.style = 'display: none';
    }

    // init export to _grid_data_up
    if (view.model.get('sync_grid')) {
        exportFunc.exportGrid(gridOptions, view);
    }
};

/**
 * Builds the grid in case of several gridOptions.
 * @param {WidgetView} view
 * @param {Array} data
 * @param {HTMLDivElement} div
 * @param {Array<gridOptions>} gridOptionsMulti
 * @param {HTMLInputElement} dropdownMulti
 * @param {StyleSheet} sheet
 */
const buildAgGridMultiOptions = (view, gridData, gridOptionsMulti, div, sheet) => {
    const dropdownMultiDiv = document.createElement('div');
    dropdownMultiDiv.className = 'dropdown-multi widget-dropdown';
    const dropdownMulti = document.createElement('select');
    dropdownMulti.id = `dropdown-multi-${view._id}`;
    dropdownMulti.style = 'width:100%';
    dropdownMultiDiv.appendChild(dropdownMulti);

    const gridOptionsMultiObj = {};
    console.log(gridOptionsMulti);

    gridOptionsMulti.forEach(([name, gridOptions]) => {
        const option = document.createElement('option');
        option.value = name;
        option.text = name;
        dropdownMulti.add(option);

        gridOptionsMultiObj[name] = gridOptions;
    });

    const displayGrid = name => {
        console.log(gridOptionsMultiObj);
        const gridOptions = gridOptionsMultiObj[name];
        buildAgGrid(view, gridData, gridOptions, div, sheet, dropdownMultiDiv);
    };

    dropdownMulti.onchange = function() {
        div.innerHTML = '';
        const name = dropdownMulti.value;
        console.log(name);
        displayGrid(name);
    };

    const nameFirst = gridOptionsMulti[0][0];
    console.log(`init gridOptions displayed: ${nameFirst}`);

    displayGrid(nameFirst);
};

export { buildAgGrid, buildAgGridMultiOptions };
