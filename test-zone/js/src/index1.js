import { Grid, simpleHttpRequest } from 'ag-grid-community';
import { LicenseManager } from 'ag-grid-enterprise';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-fresh.css';

import './style.css';

LicenseManager.setLicenseKey(
    'SHI_International_France_on_behalf_of_Societe_Generale_SingleApp_5Devs25_April_2018__MTUyNDYxMDgwMDAwMA==c87ffd4d47cffff4b0f821f9e75c4b3b'
);

console.log(1);

// Defining renderers.

// cell renderer class
// function to act as a class
function MyCellRenderer() {}

// gets called once before the renderer is used
MyCellRenderer.prototype.init = function(params) {
    // create the cell
    this.eGui = document.createElement('div');
    this.eGui.innerHTML = `<span class="my-value"></span></span>  <span class="my-css-class"><button class="btn-simple" id="${
        params.column.colDef.field
    } ${params.node.id}">Export Cell</button>`;
    // get references to the elements we want
    this.eButton = this.eGui.querySelector('.btn-simple');
    this.eValue = this.eGui.querySelector('.my-value');

    // set value into cell
    this.eValue.innerHTML = params.valueFormatted ? params.valueFormatted : params.value;

    // add event listener to button
    this.eventListener = id =>
        // Careful the addEventListener requires a function() to work with.
        () => {
            const tab = id.split(' ');
            const col = tab[0];
            const num = tab[1];
            // Getting the data.
            console.log(`Button Export Cell was clicked at row ${num} and column ${col}`);
            console.log(`value ${gridOpts.api.getRowNode(num).data[col]}`);
        };

    this.eButton.addEventListener('click', this.eventListener(this.eButton.id));
};

// gets called once when grid ready to insert the element
MyCellRenderer.prototype.getGui = function() {
    return this.eGui;
};

// gets called whenever the user gets the cell to refresh
MyCellRenderer.prototype.refresh = function(params) {
    // set value into cell again
    this.eValue.innerHTML = params.valueFormatted ? params.valueFormatted : params.value;
    // return true to tell the grid we refreshed successfully
    return true;
};

// gets called when the cell is removed from the grid
MyCellRenderer.prototype.destroy = function() {
    // do cleanup, remove event listener from button
    this.eButton.removeEventListener('click', this.eventListener);
};

// End of renderers definitions.

// const createColumnDefs = () => [
//     { headerName: 'Make', field: 'make' },
//     { headerName: 'Model', field: 'model' },
//     { headerName: 'Price', field: 'price' },
// ];

const createColumnDefs = () => [
    { field: 'athlete', checkboxSelection: true },
    { field: 'country' },
    { field: 'year', width: 100 },
    { field: 'gold', width: 100, cellRenderer: 'myCellRenderer' },
    { field: 'silver', width: 100, cellRenderer: 'myCellRenderer' },
    { field: 'bronze', width: 100, cellRenderer: 'myCellRenderer' },
    { field: 'total', width: 100 },
];

const createRowData = () =>
    simpleHttpRequest({
        url:
            'https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json',
    });

const width = '80%';
const height = '400px';

// const gridOpts = {
//     columnDefs: createColumnDefs(),
//     rowData: createRowData(),
// };

let gridOpts = {
    columnDefs: createColumnDefs(),
    enableSorting: true,
    rowSelection: 'multiple',
    suppressRowClickSelection: true,
    defaultColDef: {
        editable: true,
    },
    components: {
        myCellRenderer: MyCellRenderer,
    },
};

const exportRows = () => {
    const rows = gridOpts.api.getSelectedRows();
    console.log(rows);
};

// Setting up the grid

document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#grid');
    gridDiv.className = 'ag-theme-fresh';
    gridDiv.style.width = width;
    gridDiv.style.height = height;

    const grid = new Grid(gridDiv, gridOpts);
    window.grid = grid;

    gridOpts.api.doLayout();

    // Adding export of rows

    const exportRowDataButton = document.createElement('button');
    exportRowDataButton.appendChild(document.createTextNode('Export Selected Data'));
    exportRowDataButton.addEventListener('click', () => exportRows());
    gridDiv.parentNode.insertBefore(exportRowDataButton, gridDiv);

    // Selection Mode : Range / Rows

    // IMPOSSIBLE TO IMPLEMENT EASILY WITH THE GIVEN AGGRID API

    // do http request to get our sample data - not using any framework to keep the example self contained.
    // you will probably use a framework like JQuery, Angular or something else to do your HTTP calls.
    const dataRequest = createRowData();
    dataRequest.then(data => {
        data.forEach(dat => {
            dat['line-export'] = ' ';
        });
        gridOpts.api.setRowData(data);
    });

    console.log('done');
    const msgDiv = document.querySelector('#msg');
    msgDiv.innerHTML = 'My not first aggrid';
});
