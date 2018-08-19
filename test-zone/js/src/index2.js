const columnDefs = [
    { headerName: 'Athlete', field: 'athlete', width: 150 },
    { headerName: 'Age', field: 'age', width: 90 },
    { headerName: 'Country', field: 'country', width: 120 },
    { headerName: 'Year', field: 'year', width: 90 },
    { headerName: 'Date', field: 'date', width: 110 },
    { headerName: 'Sport', field: 'sport', width: 110 },
    { headerName: 'Gold', field: 'gold', width: 100 },
    { headerName: 'Silver', field: 'silver', width: 100 },
    { headerName: 'Bronze', field: 'bronze', width: 100 },
    { headerName: 'Total', field: 'total', width: 100 },
];

const gridOptions = {
    columnDefs,
    enableRangeSelection: true,
    processDataFromClipboard: params => {
        const { data } = params;
        console.log(data);

        if (data.length <= 1) {
            return null;
        }

        const cols = data[0];
        const colDefs = [];
        cols.forEach(col => {
            const field = col.toLowerCase().replace(' ', '-');
            colDefs.push({ headerName: col, field });
        });
        const new_dat = [];

        for (let i = 1; i < data.length - 1; i += 1) {
            const row = data[i];
            const new_row = {};
            for (let j = 0; j < row.length; j += 1) {
                new_row[colDefs[j].field] = row[j];
            }
            new_dat.push(new_row);
        }
        console.log(new_dat);
        // for (let i = 0; i < data.length; i += 1) {
        //     const row = data[i];
        //     for (let j = 0; j < row.length; j += 1) {
        //         const value = row[j];
        //         if (value) {
        //             if (value.startsWith('Red')) {
        //                 containsRed = true;
        //             } else if (value.startsWith('Yellow')) {
        //                 containsYellow = true;
        //             }
        //         }
        //     }
        // }

        // if (containsRed) {
        //     // replace the paste request with another
        //     return [['Orange', 'Orange'], ['Grey', 'Grey']];
        // } else if (containsYellow) {
        //     // cancels the paste
        //     return null;
        // }
        gridOptions.api.setColumnDefs(colDefs);
        gridOptions.api.setRowData(new_dat);
        gridOptions.columnApi.sizeColumnsToFit();

        return null;
    },
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#myGrid');
    const grid = new agGrid.Grid(gridDiv, gridOptions);
    window.grid = grid;

    // do http request to get our sample data - not using any framework to keep the example self contained.
    // you will probably use a framework like JQuery, Angular or something else to do your HTTP calls.
    const httpRequest = new XMLHttpRequest();
    httpRequest.open(
        'GET',
        'https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinners.json'
    );
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            const httpResult = JSON.parse(httpRequest.responseText);
            gridOptions.api.setRowData(httpResult);
        }
    };
});
