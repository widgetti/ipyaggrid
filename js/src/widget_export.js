const exportFunc = {};

// Export Range

/**
 * Exports range data from selection
 * @param {Object} options
 * @param {WidgetView} view
 */
exportFunc.exportRangeData = (options, view) => {
    let rangeSelection;
    try {
        console.log(options.api.getCellRanges())
        rangeSelection = options.api.getCellRanges();
    } catch (e) {
        console.log('No cells selected.');
        return;
    }

    console.log(rangeSelection)
    console.log(rangeSelection[0].startRow)
    console.log(rangeSelection[0].endRow)
    rangeSelection = rangeSelection[0];
    console.log(rangeSelection)
    const cols = findCorrectColumns(rangeSelection.columns, options);
    const rows = [];

    const id1 = rangeSelection.startRow.rowIndex;
    const id2 = rangeSelection.endRow.rowIndex;
    for (let id = Math.min(id1, id2); id <= Math.max(id1, id2); id += 1) {
        const row = options.api.getDisplayedRowAtIndex(id);
        rows.push(row);
    }
    const { data: nodes, values: columns } = getProcessedSelectedRows(options, rows, cols);
    const data = [];
    const values = [];
    nodes.forEach(node => {
        data.push(node.data);
        values.push([node.id]);
    });
    const names = ['Index'];
    const res = {
        names,
        values,
        data,
        columns,
    };
    const toUp = {
        range: {
            data: res.data,
            index_rows: { names: res.names, values: res.values },
            index_columns: res.columns,
        },
    };
    view.model.set('_grid_data_up', toUp);
    view.touch();
};

// Export Rows

exportFunc.exportRows = (options, view) => {
    const rows = options.api.getSelectedNodes();
    exportRowsFunc(options, view, rows);
};

const exportRowsFunc = (options, view, rows) => {
    const cols = findCorrectColumns(options.columnApi.getAllDisplayedColumns(), options);
    const { data: nodes, values: columns } = getProcessedSelectedRows(options, rows, cols);
    const data = [];
    const values = [];
    nodes.forEach(node => {
        data.push(node.data);
        values.push([node.id]);
    });
    const names = ['Index'];
    const res = {
        names,
        values,
        data,
        columns,
    };
    const toUp = {
        rows: {
            data: res.data,
            index_rows: { names: res.names, values: res.values },
            index_columns: res.columns,
        },
    };
    view.model.set('_grid_data_up', toUp);
    view.touch();
};

const getProcessedSelectedRows = (options, rows, columns) => {
    /**
     * Removes all the unwanted data (Apis, Extra Data...) from the required nodes.
     */
    const res = [];
    rows.forEach(node => {
        res.push(cleanRowNode(node, columns.columns_keys));
    });
    return { data: res, values: columns.columns_headers };
};

function cleanRowNode(node, names) {
    /**
     * Structures the new node, using correct column names and clean data architecture.
     */
    const new_dat = [];
    names.forEach(key => {
        new_dat.push(node.data[key]);
    });
    const res = {
        data: new_dat,
        id: parseInt(node.id, 10),
    };
    return res;
}

exportFunc.exportRowsOfRange = (options, view) => {
    const rangeSelections = options.api.getCellRanges();
    const rows = [];
    const ids = {};
    rangeSelections.forEach(rangeSelection => {
        const i1 = rangeSelection.startRow.rowIndex;
        const i2 = rangeSelection.endRow.rowIndex;
        const is = Math.min(i1, i2);
        const ie = Math.max(i1, i2);
        for (let i = is; i <= ie; i += 1) {
            if (!(i in ids)) {
                ids[i] = true;
                rows.push(options.api.getDisplayedRowAtIndex(i));
            }
        }
    });
    exportRowsFunc(options, view, rows);
};

// Exporting Columns

function getCol(col, options) {
    const data = [];
    options.api.forEachNodeAfterFilterAndSort(row => {
        data.push(row.data[col.colDef.field]);
    });
    return data;
}

exportFunc.exportColumns = (options, view) => {
    let rangeSelection;
    try {
        rangeSelection = options.api.getCellRanges()[0];
    } catch (e) {
        console.log('No cells selected.');
        return;
    }
    const cols = findCorrectColumns(rangeSelection.columns, options);
    const rows = [];

    options.api.forEachNodeAfterFilterAndSort(node => rows.push(node));

    const { data: nodes, values: columns } = getProcessedSelectedRows(options, rows, cols);
    const data = [];
    const values = [];
    nodes.forEach(node => {
        data.push(node.data);
        values.push([node.id]);
    });
    const names = ['Index'];
    const res = {
        names,
        values,
        data,
        columns,
    };
    const toUp = {
        cols: {
            data: res.data,
            index_rows: { names: res.names, values: res.values },
            index_columns: res.columns,
        },
    };
    view.model.set('_grid_data_up', toUp);
    view.touch();
};

// Display row nodes for test.

exportFunc.displayRowNodes = function(options) {
    const tab = getProcessedNodes(options);
    console.log(tab);
};

exportFunc.getMaxAggregation = function(options) {
    const processed = getProcessedNodes(options);
    const nodes = processed.data;
    let level = 0;
    if (nodes === []) {
        return level;
    }
    let node = nodes[0];
    while (node.children) {
        node = node.children[0];
        level += 1;
    }
    return level;
};

/**
 * Puts the grid in widget._grid_data_up to be exported
 * as a dataframe in python.
 * The result contains correct indexes and data
 * @param {Object} options
 * @param {WidgetView} view
 * @param {Int} level
 */
exportFunc.exportGrid = function(options, view, level = 0) {
    const processed = getProcessedNodes(options);
    const nodes = processed.data;
    const res = recExportGrid(level, [], [], nodes, processed.values);
    const toUp = {
        grid: {
            data: res.data,
            index_rows: { names: res.names, values: res.values },
            index_columns: res.columns,
        },
    };
    view.model.set('_grid_data_up', toUp);
    view.touch();
};

function getProcessedNodes(options) {
    /**
     * Removes all the unwanted data (Apis, Extra Data...) from the required nodes.
     */
    const columns = findCorrectColumns(options.columnApi.getAllDisplayedColumns(), options);
    const res = [];
    const nodes = [];
    options.api.forEachNodeAfterFilterAndSort(node => {
        nodes.push(node);
    });
    options.api.forEachNodeAfterFilterAndSort(node => {
        res.push(cleanNode(node, columns.columns_keys));
    });
    return { data: res, values: columns.columns_headers };
}

function findCorrectColumns(columns, options) {
    const columns_headers = [];
    const columns_keys = [];
    if (options.columnApi.isPivotMode()) {
        columns.forEach(column => {
            // Removes the index of the auto-generated Group
            if (column.colId !== 'ag-Grid-AutoColumn') {
                const res = (column.colDef.pivotKeys ? column.colDef.pivotKeys : []).slice();
                res.push(
                    options.columnApi.isPivotMode ? column.colDef.headerName : column.colDef.field
                );
                columns_headers.push(res);
                columns_keys.push(column.colId);
            }
        });
        return { columns_headers, columns_keys };
    }
    columns.forEach(column => {
        if (column.colId !== 'ag-Grid-AutoColumn') {
            columns_keys.push(column.colId);
            let col = column;
            const column_header = [col.colDef.field ? col.colDef.field : col.colDef.headerName];
            while (col.parent) {
                col = col.parent;
                let name;
                if (col.groupId) {
                    try {
                        if (col.originalColumnGroup.colGroupDef.headerName) {
                            name = col.originalColumnGroup.colGroupDef.headerName;
                        } else {
                            name = '';
                        }
                    } catch (exc) {
                        console.error(exc);
                        name = '';
                    }
                    column_header.push(name);
                }
            }
            columns_headers.push(column_header.reverse());
        }
    });
    return { columns_headers, columns_keys };
}

function cleanNode(node, names) {
    /**
     * Strunctures the new node, using correct column names and clean data architecture.
     */
    if (node.group) {
        const new_dat = [];
        names.forEach(key => {
            new_dat.push(node.aggData ? node.aggData[key] : undefined);
        });
        const res = {
            aggData: new_dat,
            field: node.field,
            key: node.key,
            group: true,
            children: buildChildren(node.childrenAfterFilter, names),
        };
        return res;
    }
    const new_dat = [];
    names.forEach(key => {
        new_dat.push(node.data[key]);
    });
    const res = {
        data: new_dat,
        group: false,
        id: parseInt(node.id, 10),
    };
    return res;
}

function buildChildren(children, names) {
    const res = [];
    children.forEach(node => res.push(cleanNode(node, names)));
    return res;
}

function AggregationLevelException() {
    this.message = 'This aggregation level is not allowed.';
    this.name = 'AggregationLevelException';
}

function recExportGrid(i, names, value, nodes, columns) {
    /**
     * Recursive working on nodes.
     */
    if (i === 0) {
        // Simply returns the data with the correct path name and index value to the data.
        const data = [];
        const values = [];
        let toPushName = '';
        nodes.forEach(node => {
            if (node.aggData) {
                data.push(node.aggData);
                toPushName = node.field;
                const value_copy = value.slice();
                value_copy.push(node.key);
                values.push(value_copy);
            } else {
                data.push(node.data);
                toPushName = 'Index';
                const value_copy = value.slice();
                value_copy.push(node.id);
                values.push(value_copy);
            }
        });
        names.push(toPushName);
        return {
            names,
            values,
            data,
            columns,
        };
    }

    const res = { names: [], values: [], data: [], columns };

    nodes.forEach(node => {
        if (!node.group) {
            // We are trying to process an aggregation level higher
            // than the amount of aggregations made in the ag-Grid.
            throw new AggregationLevelException();
        }

        // Copying the path for no overlapping info.
        const names_copy = names.slice();
        names_copy.push(node.field);
        const value_copy = value.slice();
        value_copy.push(node.key);

        const childRes = recExportGrid(i - 1, names_copy, value_copy, node.children, columns);
        res.names = childRes.names;
        childRes.values.forEach(key => res.values.push(key));
        childRes.data.forEach(dat => res.data.push(dat));
    });
    return res;
}

export { exportFunc };
