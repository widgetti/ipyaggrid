import * as moduled3 from 'd3';
import { gzip } from './widget_compress';
import * as exportFunctions from './widget_export';

// make available to js eval-ed
const { exportFunc } = exportFunctions;
const d3 = moduled3;

console.log('d3 loaded');
console.log(d3);
window.d3 = d3;
/**
 * Builds Attach the button names and their actions to real buttons.
 * View and gridOptions are necessary for evaluation of button actions.
 * @param {WidgetView} view
 * @param {Object} menu
 * @param {StyleSheet} sheet
 * @param {Object} gridOptions
 * @param {Object} helpers
 */
const setupButtons = (view, menu, sheet, gridOptions, helpers) => {
    // gridOptions and helpers are made available to js evale-ed

    // Now building each button
    menu.buttons.forEach(button => {
        const but = document.createElement('button');
        but.appendChild(document.createTextNode(button.name));
        const action = eval(`(() => {${button.action}})`);
        but.addEventListener('click', action);
        if (button.name === 'Export Grid') {
            // Add input aggregation level, needed for grid-export
            const max = exportFunc.getMaxAggregation(gridOptions);
            const inputAggregationLevel = document.createElement('input');
            inputAggregationLevel.id = `inputAggregationLevel-${view._id}`;
            inputAggregationLevel.type = 'int';
            inputAggregationLevel.value = 0;
            inputAggregationLevel.className = 'menu-input';
            inputAggregationLevel.type = 'number';
            inputAggregationLevel.style = 'width:18%; margin-left:1px';
            inputAggregationLevel.max = max;
            inputAggregationLevel.min = 0;
            inputAggregationLevel.addEventListener('click', () => {
                inputAggregationLevel.max = exportFunc.getMaxAggregation(gridOptions);
            });
            // then add inputAggregationlevel
            const butDiv = document.createElement('div');
            but.className = `jupyter-button flex-child-${button.name
                .toLowerCase()
                .replace(/\s/g, '-')}-${view._id}`;
            butDiv.className = `flex-child-container-${button.name
                .toLowerCase()
                .replace(/\s/g, '-')}-${view._id}`;
            butDiv.appendChild(but);
            butDiv.appendChild(inputAggregationLevel);
            but.style = 'width:77%';
            sheet.insertRule(button.css, 0);
            sheet.insertRule(button.container_css, 0);
            menu.buttonDivs.push(butDiv);
        } else {
            but.id = `jupyter-button flex-child-${button.name.toLowerCase().replace(/\s/g, '-')}-${
                view._id
            }`;
            but.className = but.id;
            sheet.insertRule(button.css, 0);
            menu.buttonDivs.push(but);
        }
    });
};

/**
 * Build Each input according to the params given and
 * attaches correct CSS to them.
 * @param {WidgetView} view
 * @param {Object} menu
 * @param {StyleSheet} sheet
 * @param {Object} gridOptions
 */
const setupInputs = (view, menu, sheet, gridOptions, dropdownMulti) => {
    // gridOptions and helpers are made available to js evale-ed

    // Now building each button
    menu.inputs.forEach(input => {
        // Setup Multioptions
        if (input.name === 'Dropdown Menu') {
            setupDropdownMenu(view, menu, sheet, dropdownMulti, input);
        }

        // Setup Quickfilter
        if (input.name === 'Quick Filter') {
            setupQuickFilter(view, menu, sheet, input);
        }

        // Setup Toggle Edit
        if (input.name === 'Toggle Edit') {
            setupShowToggleEdit(view, menu, sheet, input);
        }

        // Setup Toggle Delete
        if (input.name === 'Toggle Delete') {
            setupShowToggleDelete(view, menu, sheet, input);
        }
    });
};

/**
 * Function called on show_toggle_delete press. Deletes the data from the grid.
 * @param {Event} event
 * @param {WidgetView} view
 * @param {Object} options
 */
const onSuppr = (event, view, options) => {
    // this runs on the document element, so check that we're in the grid
    if ((event.code === 'Backspace' || event.code === 'Delete') && view.el.contains(event.target)) {
        if (options.enableRangeSelection) {
            const getRows = selects => {
                const rows = [];
                const ids = [];
                selects.forEach(rangeSelection => {
                    const i1 = rangeSelection.start.rowIndex;
                    const i2 = rangeSelection.end.rowIndex;
                    const is = Math.min(i1, i2);
                    const ie = Math.max(i1, i2);
                    for (let i = is; i <= ie; i += 1) {
                        if (!(i in ids)) {
                            ids[i] = true;
                            rows.push(options.api.getDisplayedRowAtIndex(i).data);
                        }
                    }
                });
                return rows;
            };
            const selections = options.api.getRangeSelections();
            const rows = getRows(selections);
            options.api.updateRowData({ remove: rows });
        } else {
            const rows = options.api.getSelectedRows();
            options.api.updateRowData({ remove: rows });
        }
    }
};

/**
 * Adds the show_toggle_delete checkbox and sets up the key press event.
 * @param {WidgetView} view
 * @param {Object} menu
 * @param {StyleSheet} sheet
 */
const setupShowToggleDelete = (view, menu, sheet, input) => {
    const divDelete = document.createElement('div');
    divDelete.innerHTML = '<div class="div-delete-2">Delete</div>';
    divDelete.style = 'display:inline-flex;';
    divDelete.className = `div-delete flex-child-${input.name.toLowerCase().replace(/\s/g, '-')}-${
        view._id
    }`;
    const labelDiv = document.createElement('div');
    labelDiv.style = 'width:30px;height:20px';
    const labelDelete = document.createElement('label');
    labelDelete.className = 'switch';
    divDelete.appendChild(labelDiv);
    labelDiv.appendChild(labelDelete);
    const inputDelete = document.createElement('input');
    inputDelete.type = 'checkbox';
    labelDelete.appendChild(inputDelete);
    const roundButton = document.createElement('span');
    roundButton.className = 'slider round';
    labelDelete.appendChild(roundButton);
    divDelete.id = `div-delete-${view._id}`;

    menu.inputDivs.push(divDelete);
    sheet.insertRule(input.css, sheet.cssRules.length);

    function remove(e) {
        onSuppr(e, view, view.gridOptions);
    }
    inputDelete.oninput = () => {
        if (inputDelete.checked) {
            document.documentElement.addEventListener('keydown', remove, true);
        } else {
            document.documentElement.removeEventListener('keydown', remove, true);
        }
    };
};

/**
 * Setups correct classname and CSS rule for dropdown menu
 * and insert in inputDivs
 * @param {WidgetView} view
 * @param {Object} menu
 * @param {StyleSheet} sheet
 * @param {*} dropdownMulti
 * @param {Object} input
 */
const setupDropdownMenu = (view, menu, sheet, dropdownMulti, input) => {
    dropdownMulti.className = `widget-dropdown dropdown-multi flex-child-${input.name
        .toLowerCase()
        .replace(/\s/g, '-')}-${view._id}`;
    menu.inputDivs.push(dropdownMulti);
    sheet.insertRule(input.css, sheet.cssRules.length);
};

/**
 * Creates the quickfilter input
 * and setups the action on the grid.
 * @param {WidgetView} view
 * @param {Object} menu
 * @param {StyleSheet} sheet
 * @param {Object} input
 */
const setupQuickFilter = (view, menu, sheet, input) => {
    const quickFilter = document.createElement('input');
    quickFilter.id = `quick-filter-${view._id}`;
    quickFilter.type = 'text';
    quickFilter.placeholder = 'Filter...';
    quickFilter.className = `widget-text flex-child-${input.name
        .toLowerCase()
        .replace(/\s/g, '-')}-${view._id}`;

    menu.inputDivs.push(quickFilter);

    const onQuickfilterTextBoxChanged = () => {
        const options = view.gridOptions;
        const text = document.getElementById(`quick-filter-${view._id}`).value;
        options.api.setQuickFilter(text);
    };
    quickFilter.oninput = onQuickfilterTextBoxChanged;
    sheet.insertRule(input.css, sheet.cssRules.length);
};

/**
 * Similar to setupShowToggleDelete : creates a checkbox
 * and modifies the gridOptions on click.
 * @param {WidgetView} view
 * @param {Object} menu
 * @param {StyleSheet} sheet
 */
const setupShowToggleEdit = (view, menu, sheet, input) => {
    const divEdit = document.createElement('div');
    divEdit.innerHTML = '<div class="div-edit-2">Edit</div>';
    divEdit.style = 'display:inline-flex';
    divEdit.className = `div-edit flex-child-${input.name.toLowerCase().replace(/\s/g, '-')}-${
        view._id
    }`;
    const labelDiv = document.createElement('div');
    labelDiv.style = 'width:30px;height:20px';
    const labelEdit = document.createElement('label');
    labelEdit.className = 'switch';
    divEdit.appendChild(labelDiv);
    labelDiv.appendChild(labelEdit);
    const inputEdit = document.createElement('input');
    inputEdit.type = 'checkbox';
    labelEdit.appendChild(inputEdit);
    const roundButton = document.createElement('span');
    roundButton.className = 'slider round';
    labelEdit.appendChild(roundButton);

    sheet.insertRule(input.css, sheet.cssRules.length);
    menu.inputDivs.push(divEdit);

    // inputEdit.oninput = () => {
    //     console.log('edit - oninput');
    //     if (inputEdit.checked) {
    //         editMode(view, view.gridOptions, true);
    //     } else {
    //         editMode(view, view.gridOptions, false);
    //     }
    // };

    const id = view.model.get('_id');
    if (typeof window.agGridOptions === 'undefined') {
        window.agGridOptions = {};
    }
    window.agGridOptions[id] = { editableCustom: false };

    inputEdit.onchange = () => {
        console.log('edit - onchange');
        if (inputEdit.checked) {
            editMode(view, view.gridOptions, true);
        } else {
            editMode(view, view.gridOptions, false);
        }
    };
};

function editMode(view, gridOptions, editable) {
    const id = view.model.get('_id');
    if (editable) {
        window.agGridOptions[id].editableCustom = true;
        // gridOptions.columnDefs.forEach(col => {
        //     col.editable = true;
        // });
    } else {
        window.agGridOptions[id].editableCustom = false;
        // gridOptions.columnDefs.forEach(col => {
        //     col.editable = false;
        // });
    }
    gridOptions.api.setColumnDefs(gridOptions.columnDefs);
    if (view.model.get('columns_fit') === 'size_to_fit') {
        gridOptions.api.sizeColumnsToFit();
    } else if (view.model.get('columns_fit') === 'auto') {
        const allColumnIds = [];
        gridOptions.columnApi.getAllColumns().forEach(column => {
            allColumnIds.push(column.colId);
        });
        gridOptions.columnApi.autoSizeColumns(allColumnIds);
    }
}

/**
 * Builds the menu according to the different passed in the menu.
 * Setups the order, CSS and organization.
 * @param {WidgetView} view
 * @param {Object} menu
 * @param {StyleSheet} sheet
 */
const menuBuiler = (view, menu, sheet) => {
    const inputDiv = document.createElement('div');
    inputDiv.className = `flex-input-div-${view._id}`;
    sheet.insertRule(menu.input_div_css, 0);
    const buttonDiv = document.createElement('div');
    buttonDiv.className = `flex-button-div-${view._id}`;
    sheet.insertRule(menu.button_div_css, 0);
    menu.menuDiv.appendChild(inputDiv);
    menu.menuDiv.appendChild(buttonDiv);
    menu.menuDiv.className = `menu-div flex-menu-div-${view._id}`;
    sheet.insertRule(menu.menu_div_css);
    menu.inputDivs.forEach(div => {
        inputDiv.appendChild(div);
    });
    menu.buttonDivs.forEach(div => {
        buttonDiv.appendChild(div);
    });
};

/**
 * uncompress then JSON.parse
 * @param {String} value
 */
function deserialize_data(value) {
    if (value.constructor === Array) {
        return value;
    }
    try {
        return JSON.parse(gzip.uncompressBase64ToStr(value, 9));
    } catch (e) {
        console.log('Cannot uncompress');
        console.log(e);
        return JSON.parse(value);
    }
}

function deserialize_options(value) {
    window.toto = value;
    try {
        return gzip.uncompressBase64ToStr(value, 9);
    } catch (e) {
        console.log('Cannot uncompress');
        console.log(e);
        return value;
    }
    // if (value.constructor === String) {
    //     return value;
    // }
    // return gzip.uncompressBase64ToStr(value, 9);
}

function deserialize_multi_options(value) {
    const res = [];
    value.forEach(([name, option]) => {
        try {
            res.push([name, gzip.uncompressBase64ToStr(option, 9)]);
        } catch (e) {
            console.log('Cannot uncompress');
            console.log(e);
            res.push([name, option]);
        }
        // res.push([name, gzip.uncompressBase64ToStr(option, 9)]);
    });
    return res;
}

/**
 * Serializes the data_up back to python
 * @param {JSON} value
 */
function serialize_data(value) {
    const compress = gzip.compress(JSON.stringify(value), 9);
    return compress;
}

export {
    menuBuiler,
    deserialize_data,
    deserialize_options,
    deserialize_multi_options,
    serialize_data,
    setupButtons,
    setupInputs,
};
