helpersBuiltin = {
    dateFormatter: function(node) {
        // make sure date is not undefined
        if (node && node.value && node.value !== "NaT") {
            let d = new Date(node.value);
            let h = d.getHours();
            let m = d.getMinutes();
            let s = d.getSeconds();
            const offset = d.getTimezoneOffset() * 60000;
            d = new Date(d.getTime() - offset);
            const ymd = d.toISOString().substring(0, 10);
            if (h === 0 && m === 0 && s === 0) {
                return ymd;
            }
            if (h === 0) h = '00';
            if (m === 0) m = '00';
            if (s === 0) s = '00';
            return `${ymd} ${h}:${m}:${s}`;
        }
        return null;
    },

    formatInt: d3.format(',.0f'),
    formatFloat: d3.format(',.2f'),

    intFormatter: function(node) {
        return formatInt(node.value);
    },

    floatFormatter: function(node) {
        return formatFloat(node.value);
    },

    compareDates: function(filterLocalDate, cellValue) {
        // Assume dates are stored as iso
        const cellDate = new Date(cellValue);

        if (cellDate < filterLocalDate) {
            return -1;
        } else if (cellDate > filterLocalDate) {
            return 1;
        }
        return 0;
    },

    sizeToFit: function(gridOptions) {
        gridOptions.api.sizeColumnsToFit();
    },

    autoSizeAll: function(gridOptions) {
        const allColumnIds = [];
        gridOptions.columnApi.getColumns().forEach(column => {
            allColumnIds.push(column.colId);
        });
        gridOptions.columnApi.autoSizeColumns(allColumnIds);
    },

    /**
     * Exporting data to CSV using ag-Grid api.
     * @param {Object} gridOptions
     */
    exportToCsv: function(gridOptions) {
        gridOptions.api.exportDataAsCsv();
    },

    /**
     * Exporting data to Excel using ag-Grid api.
     * @param {Object} gridOptions
     */
    exportToExcel: function(gridOptions) {
        gridOptions.api.exportDataAsExcel();
    },
};
