---
sidebarDepth: 2
---

# Create

To create a grid with **ipyaggrid** you need:

- bring you data as (1) a list of dict or (2) a dataframe
- define ag-Grid `gridOptions` as a dict - see [ag-Grid doc](https://www.ag-grid.com/javascript-grid-properties/)
- pass them to the `Grid` constructor, along with specific options - see below
  - Use `ipyaggrid.Grid` for the enterprise version or `ipyaggrid.community.Grid` for the community version of ag-Grid.
    (Using `ipyaggrid.Grid` and setting the `license` argument to "community" will also use the community version)
- display the ipywidget thus created

::: tip
At any moment, if you want to know how to create an ipyaggrid like the doc examples,
search the example you need in this interactive notebook:

[![Binder](https://mybinder.org/badge.svg)](https://mybinder.org/v2/gl/DGothrek%2Fipyaggrid/binder-demo?filepath=doc-builder.ipynb)
:::

## Sample Setup

The params of the `Grid` constructor must have the following types:

```python
# Widget options
width : int or str,
height : int,
center : bool,
theme : str,

# Grid setup
grid_data : list or pandas dataframe,
grid_options : dict,
grid_options_multi : list of dict,
columns_fit : str,
index : bool,
keep_multiindex : bool,
compress_data : bool,

# Menu options
quick_filter : bool,
export_csv : bool,
export_excel : bool,
show_toggle_delete : bool,
show_toggle_edit : bool,
paste_from_excel : bool,
export_mode : str,
export_to_df : bool,
hide_grid : bool,

# Customization options
menu: dict,
css_rules : str,
js_helpers_custom : str,
js_pre_helpers : list of str,
js_pre_grid : list of str,
js_post_grid list of str,
user_params: dict,

license : str
```

The default parameters are the following:

```python
def __init__(self,
              width='100%',
              height=0,
              center=False,
              theme='ag-theme-fresh',

              grid_data=[],
              grid_options={},
              grid_options_multi=[],
              columns_fit='size_to_fit',
              index=False,
              keep_multiindex=False,
              compress_data=True,

              quick_filter=False,
              export_csv=False,
              export_excel=False,
              show_toggle_delete=False,
              show_toggle_edit=False,
              paste_from_excel=False,
              export_mode='disabled',
              export_to_df=True,
              hide_grid=False,

              js_helpers_custom='',
              js_pre_helpers=[],
              js_pre_grid=[],
              js_post_grid=[],
              css_rules='',
              menu=None,
              user_params={},

              license=''):
```

### User Data

`grid_data: list or pandas.DataFrame, default=[]`

The data can be input as (1) a list of dict, each a row, or (2) a dataframe.

::: warning
The dataframe **must** have all column names set.  
Columns without name are ignored.  
:::

If data is input as a dataframe it is translated to ag-Grid format.

In most of the examples below we use a simple dataframe `df`.

```python
df.info()
<class 'pandas.core.frame.DataFrame'>
MultiIndex: 64 entries, (A0, B0, C0, D0) to (A3, B1, C3, D1)
Data columns (total 9 columns):
(a, bar, zap)    64 non-null float64
(a, bar, zip)    64 non-null float64
(a, foo, zap)    64 non-null float64
(a, foo, zip)    64 non-null float64
(b, bah, zap)    64 non-null float64
(b, bah, zep)    64 non-null float64
(b, bah, zyp)    64 non-null float64
(b, foo, zap)    64 non-null float64
(b, foo, zep)    64 non-null float64
dtypes: float64(9)
memory usage: 5.1+ KB
```

You can also use a list of rows as follows. However it is probably a
lot more convenient to input a pandas dataframe, the _de facto_ standard
Python container for tabular data.

::: tip Note
The Python-JavaScript conversion of list/dict-array/object is handled by
the ipywidgets library.
:::

```python
cars = [
    {'carName': 'Chevelle', 'origin': 'US', 'make': 'Chevrolet', 'price': 30415},
    {'carName': 'Skylark 320', 'origin': 'US', 'make': 'Buick', 'price': 21042},
    ...
    {'carName': 'PL411', 'origin': 'Asia', 'make': 'Datsun', 'price': 27676}
]
```

### Grid Options

`grid_options: dict, default={}`

The grid options are exactly those of ag-Grid, in **full transparency**.
Basically, it should contain [column definitions](https://www.ag-grid.com/javascript-grid-column-properties/),
and some configuration for the grid. See the [official documentation](https://www.ag-grid.com/javascript-grid-properties/)
to see the possibilities.

The ag-Grid API is **_very rich and explicit and well documented_**, and their [website](https://www.ag-grid.com/)
has tons of examples that enable you to easily play with all the features. We
can only recommend to use the plunkers they provide to fine tune the right
configuration for your use case.

Here is a sample basic grid:

<<< @/content/code-snippets/simple-grid.python

And the output:

<example-simple-grid/>

The organisation of the Grid is simple:

- All convenience buttons and filters and menus are located in top part
- The grid produced by ag-Grid is below

## Parameters

This section describes the **ipyaggrid** basic configuration parameters - as opposed to the [advanced customization parameters](./customize.html#params) which often require JavaScript and CSS.

### Dimensions and placement

`width: int or string, default='100%'`  
`height: int, default=350`
`center: bool, default=False`

The size of the grid is determined by the `width` and `height` parameters.  
Width can either be a number of pixels or a string like `80%` or `550px`
Otherwise the width will automatically be set to `100%`, and height to `350px`.

The `center` param sets `margin` to `auto` for the `div` containing the grid and
the menu. It should be helpful if you wish to export the grid in other contexts
than the notebook.

<<< @/content/code-snippets/grid-size.python

<example-grid-size/>

### Columns Size

`columns_fit: str, default='size_to_fit'`

There are 3 possible values:

- `size_to_fit`: fills the grid space using all the columns. This is useful if you have few columns and you want the grid to look nice
- `auto`: uses the minimum space required by all the **visible** elements of a column. This may be useful if you have several columns and you don't want them to appear too big, but careful to the columns "out of the box" that may remain too big/small.
- `<empty string>`: allows you to set the size of each column in the `columnsDefs` yourself

::: tip Side Note

- you can _manually_ auto-size one column by double-clicking on the resizing icon a the top-right of a column
- wrong auto-sizing on hidden columns is due to [columns virtualisation](https://www.ag-grid.com/javascript-grid-resizing/#auto-size-columns). If you wish to auto-size all columns, you should perhaps use `'suppressColumnVirtualisation' = True` in the `gridOptions`.

:::

Below is an example of an "auto-sized" grid.

<<< @/content/code-snippets/columns-size.python

<example-columns-size/>

### Themes

`theme: str, default='ag-theme-fresh'`

ag-Grid comes with several themes that you can choose from. `ag-theme-fresh` is
the default theme, and `ag-theme-balham` is definitely one of the nicest
(enterprise feature).

The available themes are presented in [themes documentation page](https://www.ag-grid.com/javascript-grid-styling/)

In addition to the official themes **ipyaggrid** contains a custom theme
`ag-theme-excel` for an Excel like rendering.

<<< @/content/code-snippets/themes.python

<example-themes/>

### Save as File

`export_csv: bool, default=False`  
`export_excel: bool, default=False`

ag-Grid enables exporting as CSV or Excel (enterprise feature).  
**ipyaggrid** makes these options available through a button above the grid.

<<< @/content/code-snippets/excel-csv.python

<example-excel-csv/>

### Paste from Excel

`paste_from_excel: bool, default=False`

Exporting to Excel can be useful, but you might also want to paste data and create columns
directly from Excel, without creating a dataframe or parsing a json in python.

Note that the grid must have **at least one cell** you can click to be able to paste.
To do so, follow the syntax of the example.

::: tip
By inputing the data this way, you won't be able to define all `columnDefs` very
precisely. You can enable `rowGroup` by using the `defaultColDef` in the `gridOptions`.
However, it will not be possible to disable it on some columns.

In general if you want a very specific design, you should always input your data
**using a dataframe** as it is possible to [read an Excel file with pandas](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_excel.html).

It is not possible to paste from the context menu in a browser, unless the user
chooses to enable it (for more details see [ag-Grid documentation](https://www.ag-grid.com/javascript-grid-clipboard/#paste-from-clipboard)).
:::

<<< @/content/code-snippets/paste-from-excel.python

Try to input a selection of the grid you exported in the [example above](#save-as-file).

<example-paste-from-excel/>

### QuickFilter

`quick_filter: bool, default=False`

This ag-Grid feature is made available via a filter field above the grid.  
Filtering takes place after each keystroke which makes it a very convenient basic
search. For more advanced filtering use the filtering by column (available through
`columnDefs`).

<<< @/content/code-snippets/quick-filter.python

<example-quick-filter/>

### License

`license: str, default=''`

To use enterprise features you need an ag-Grid license.  
You can either:

- paste your license as a string, or
- use the `get_license` function which helps you get it from a file in you home directory

Example: `get_license(filename='.ag_grid_license')`.  
Then use it in `Grid(license=get_license())`.

### Index

`index: bool, default=False`

Automatically adds your dataframe index as the first column.  
Otherwise the dataframe index is dropped.

<<< @/content/code-snippets/index.python

<example-index/>

### Multi Index

`keep_multiindex: bool, default=True`

In case of multiindex dataframe:

- convert column multiindex into ag-Grid multi level headers
- convert row multiindex into grouped left most columns

This feature enables to display multiindex dataframes as grid without the user
having to reformat for ag-Grid, saving them a tedious exercise.

For this example we are going to work with a complex multi index dataframe, with
four levels on rows and 3 levels on columns. Here is the representation of the
dataframe, and the result in the **ipyaggrid**. `keep_multiindex` works on columns
and rows.

<multi-index/>

<<< @/content/code-snippets/multiindex.python

<example-multiindex/>

### Multi Options

`grid_options_multi: list, default=[]`

You can also pass several grid options to be applied to the same data.  
The benefit are:

- compact representation: A dropdown menu allows to switch between grid options
- compact output: Data - often the large part - is not duplicated

<<< @/content/code-snippets/multi-options.python

<example-multi-options/>

### Hide Grid

`hide_grid: bool, default=False`

You may want to hide completely the grid and make available only the export buttons.
In this very special case, this option is for you.

### Compress Data

`compress_data: bool, default=True`

In the communication between Python and JavaScript, you may use very large sets
of data with thousands of lines. ag-Grid can handle it easily, but the transfer
between Python and JavaScript can be slow, so we need be able to compress (i.e.
gunzip) the data in transit if the dataset is large.  
To disable this option set `compress_data` to `False`.

### Disable Sync

`unsync: bool, default=False`

Disables the changes in `grid_data_out` when set to `True`.
**This is not an input param**. The correct way to use it is to disable it after
grid creation with `grid.unsync = True`.

### Export to Python :star:

`export_mode: string, default='disabled'`  
`export_to_df: bool, default=True`

A key feature of ipywidgets is the ability to sync data back from the JavaScript
frontend, typically after user manipulation, to the Python kernel in the
variable `grid_data_out`.

The variable `grid_data_out` is dict with the following keys, if present:

- `grid`: all grid data
- `rows`: all selected rows data at export time
- `cols`: all selected cols data at export time
- `range`: all selected range data at export time

Not all keys are always present, only those which have been synced.

In **ipyaggrid** the syncing back to Python is controlled by the variable
`export_mode`.  
It can take 3 values:

- `disabled`: disables all data exporting from JavaScript to Python. You can still manipulate data from Python code.
- `buttons`: creates several buttons in the menu depending on the selection mode you chose in the `grid_options`:
  - for `rowSelection`, one button to update key `rows` with selected data
  - for `rangeSelection`, three buttons to update keys `rows`, `cols` and `range` with selected data
- `auto`: identical to `button` mode except `grid_data_out` is continuously updated as your selection changes.

The output type is either a _pandas dataframe_ or a _list of Python dict_,
depending on the value of `export_to_df`.

It can be changed after instantiation : `grid.export_to_df=False`

```python
grid = Grid(grid_data=df,
            grid_options=grid_options,
            export_mode='buttons',
            export_to_df=True)
grid
```

To experiment with the various behaviors, play with this [mybinder](https://mybinder.org)
live notebook:  
[![Binder](https://mybinder.org/badge.svg)](https://mybinder.org/v2/gl/DGothrek%2Fipyaggrid/binder-demo?filepath=demo-ipyaggrid-export-data.ipynb)

::: warning
As `auto` updates all dimensions at once, you should not use it in `rangeSelection`
mode when working with large datasets. It may significantly slow down your browser
and kernel.
Intead prefer `button` mode or `auto` mode with `rowSelection`.

Moreover, you should not export data in `rangeSelection` when in pivot/grouping mode. The result would make little sense.

Instead, always prefer to use filtering/removing columns and **exporting the grid**.
:::

#### Export grid and aggregation

You may have noticed a counter next to the 'Export Grid' button. It allows the
user to choose the right aggregation level.

Take the following grid :

<example-export-grid/>

You could choose to keep the values of the countries or the sports for example.
The 0 aggregation level is always the less expanded one. If you expand it once,
and you want to keep that data.

Here are the respective dataframe outputs for 0 and 1.

<export-grid-1/>

<export-grid-2/>

### Delete data

`show_toggle_delete: bool, default=False`

After a grid is displayed you may want to delete some lines on a key press, from
Python or a keyboard shortcut.

If `show_toggle_delete` is set to `True`, the user gets a checkbox that he can
tick and then delete a selection. The checkbox is there to avoid manipulation error.

<<< @/content/code-snippets/show-toggle-delete.python

<example-show-toggle-delete/>

Deleting data also works in `rangeSelection` mode (enterprise feature!).

<example-show-toggle-delete-2/>

Finally, you can use a Python function `delete_selected_rows` to do the same,
irrespective of the checkbox presence and value.

For a live demo see this [MyBinder section](#mybinder).

### Edit data

`show_toggle_edit: bool, default=False`

If you want to edit the data, enable `show_toggle_edit`, this will create a
checkbox. Please tick it and then edit the data by double clicking a cell. The
checkbox is a security against manipulation errors.

<<< @/content/code-snippets/show-toggle-edit.python

<example-show-toggle-edit/>

For a live demo see this [MyBinder section](#mybinder).

### Sync on Edit

`sync_on_edit: bool, default=False`

If you want to automatically sync the grid after edit, set `sync_on_edit=True`. This will instantly update `.grid_data_out['grid']` with the updated dataframe without the need to use the `.get_grid()` method. Avoid if the dataframe is very large.

<<< @/content/code-snippets/sync-on-edit.python

### Sync Grid

`sync_grid: bool, default=True`

If you want to automatically sync the whole grid after initialization, grid data update, set `sync_grid=True`. This will automatically update `.grid_data_out['grid']` with the updated dataframe without the need to use the `.get_grid()` method. Avoid if the dataframe is very large.

<<< @/content/code-snippets/sync-grid.python

### Update Data

You can also update the grid bulk data under the constraint that
**the options and the column names remain unchanged**.
To do so use the `grid.update_grid_data(new_data)` function.

For a live demo see this [MyBinder section](#mybinder).

## Live Demo

### Play with Data

In addition to manipulating the grid data using the frontend interface, a user
can also perform some operations from Python:

- `.export_grid()`: export all data
- `.export_selected_rows()`: export only selected rows
- `.export_selected_columns()`: export only selected columns
- `.update_grid_data(data)`: replace data in existing grid
- `.delete_selected_rows()`: delete only selected rows

### MyBinder

The following live notebook on [mybinder](https://mybinder.org) contains the examples of the previous sections:  
[![Binder](https://mybinder.org/badge.svg)](https://mybinder.org/v2/gl/DGothrek%2Fipyaggrid/binder-demo?filepath=demo-ipyaggrid-python-functions.ipynb)
