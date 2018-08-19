# ag-Grid

This page is a brief introduction to [ag-Grid](https://www.ag-grid.com/).  
See the [official documentation](https://www.ag-grid.com/documentation-main/documentation.php)
for exhaustive information.

## Introduction

[ag-Grid](https://www.ag-grid.com/) is a powerful JavaScript library built
around performance, elaborate features, and a well designed user-friendly
yet powerful API. It can handle up to hundreds of thousands of lines
without significant performance degradation.

Checkout their [demo page](https://www.ag-grid.com/example.php) and experiment.

## Basics

The grid only has one constructor `Grid` with two parameters:

+ the `options` containing user data and grid configuration
+ the `DOM element` in which the grid is to be located

After the grid is built, the API is accessible as a property of `options`.
It enables reshaping the grid, accessing data, etc.

### Simple grid

Here is the example of a very simple grid.

Code:

```javascript
// Define the rows of the data to display
var rowDat = [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxter", price: 72000 }
];

// Set up the columns names
var columnDef = [
  { headerName: "Make", field: "make" },
  { headerName: "Model", field: "model" },
  { headerName: "Price", field: "price" }
];

// Add custom parameters
var gridOptions = {
  columnDefs: columnDef,
  // A bunch of different options.
  enableFilter: true,
  defaultColDef: {
    editable: true
  },
  rowSelection: "multiple",
  enableSorting: true
};

// Use an existing DOM element
var gridDiv = document.querySelector("#myGrid");
new agGrid.Grid(gridDiv, gridOptions);

// API is available
gridOptions.api.setRowData(rowDat);
```

<demo1/>

Note that you can select multiple line (`Ctrl+Click` or `Cmd+Click`), sort, filter, move the
columns, etc. A lot of defaults are intuitive, but nearly everything is **customizable**.

## Advanced

There are many, many features. Check out the
[documentation features page](https://www.ag-grid.com/features-overview/).  
Below a selection of those we find interesting are demonstrated.

### Grouping and Pivoting

You can update groups in the `Columns` panel. For more info see the
[grid pivoting doc page](https://www.ag-grid.com/javascript-grid-pivoting/).

<demo2/>

### Rendering

Cells can be heavily customized. For more info see the [cell rendering](https://www.ag-grid.com/javascript-grid-cell-rendering/) and
[full width row groups rendering](https://www.ag-grid.com/javascript-grid-grouping/#full-width-groups-rendering) doc pages.

<demo3/>

To see how to build it in **ipyaggrid**:  
[![Binder](https://mybinder.org/badge.svg)](https://mybinder.org/v2/gl/DGothrek%2Fipyaggrid/binder-demo?filepath=doc-builder.ipynb)

### Status Bar

To see the status bar in action, select a part of the grid (via `Ctrl+Click`, `Cmd+Click` or `Drag & Drop`) and read the result at the bottom right.
For more info see the [status bar doc page](https://www.ag-grid.com/javascript-grid-status-bar/).

<demo4/>