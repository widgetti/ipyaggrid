---
sidebarDepth: 2
---

# Customize

## Params

Here is an overview of the **ipyaggrid** params controlling widget customization:

- `menu`: dict controlling the menu on top of the grid
- `css_rules`: define your custom CSS for this widget
- `js_pre_helpers`: custom JS to evaluate to be used in the helpers
- `js_helpers_custom`: custom JS functions that may be used in `grid_options` later
- `js_pre_grid`: custom JS that can use the ag-Grid `gridOptions` variable before grid instantiation
- `js_post_grid`: custom JS to be eval and run after grid instantiation
- `user_params`: variable used to sync with other widgets (core or custom)


### Menu :star:

The menu is the top part of the ipywidget.

It contains two divs. The first one (input div) contains:

- the `grid_options_multi` dropdown menu
- the `quick_filter` field
- the checkboxes `show_toggle_edit` and `show_toggle_delete`if any

The second one (button div) contains all the buttons in the default following order:

- 'Export to CSV'
- 'Export to Excel'
- export mode buttons if any, up to four:
  - 'Export Rows'
  - 'Export Columns'
  - 'Export Range'
  - 'Export Grid'

```
# Widget DOM structure with CSS classes
main-div
├── menu-div
|   ├── input-div
|   |   ├── dropdown-menu
|   |   ├── quick-filter
|   |   ├── toggle-edit
|   |   └── toggle-delete
|   └── button-div
|       ├── export-to-csv
|       ├── export-to-excel
|       ...
|       └── custom-button
└── grid-div
```

`menu-div`, `input-div`, `button-div` are [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
divs, meaning it has a CSS `display: flex`.

To organize the layout of the menu, these divs can be defined with CSS style options
through the `menu` keys `menu_div_css`, `input_div_css` and `button_div_css`.

Each div inside either `input-div` and `button-div` can be defined with CSS style
options throught the `css_flex` and `css` keys in `menu['buttons']` or `menu['inputs']`

::: tip
All CSS options are **optional**: Sensible defaults are builtin. See example below.
:::

For consistency, the CSS of items in the input-div and button-div is the [ipywidgets CSS](https://github.com/jupyter-widgets/ipywidgets/tree/14db49e9537c79c996e34644364eb15343101d89/packages/controls/css).

In the menu, each button is identified by its display name.
The button div may also contain custom buttons.

#### Input Structure

```python
{'buttons':[
    # Possible names : 'Export to CSV', 'Export to Excel', 'Export Grid',
    #                  'Export Range', 'Export Rows', 'Export Columns'
    {'name':'Export to CSV',  # Builtin button
    'action':'',              # Action in JS on button click
    'flex_css':{},            # Flex CSS
    'custom_css': {},         # Custom CSS
    'hide':bool},
    {'name':'custom_button',  # A custom button
    'action':'js_code',
    'flex_css':{},
    'custom_css': {},
    'hide':bool},
    ...
    ],
 'inputs':[
     # Possible names : 'Dropdown Menu', 'Quick Filter',
     #                  'Toggle Edit', 'Toggle Delete'
    {'name':'Dropdown Menu',  
    'css_flex':{},
    'css': {}},               # No hide param for the inputs
    {'name':'Toggle Edit',
    'css_flex':{},
    'css': {}},
    ...
    ],
 'input_div_css':{},
 'menu_div_css':{},
 'button_div_css':{},
 'button_default_css':{},
 'button_default_flex_css':{}
 }
```

#### Customize buttons

You can customize existing buttons or create you own by following this syntax:

If you wish to modify the CSS of an existing button, use the `buttons` field of `menu`.
You will have to use the correct name among the builtin names.

You can aslo hide any builtin button by adding `'hide':True` to its dict.
This feature can be very useful if you want to limit the export buttons in `rangeSelection`
mode.

```python
menu = {
    # Possible names : 'Export to CSV', 'Export to Excel', 'Export Grid',
    #                  'Export Range', 'Export Rows', 'Export Columns'
    'buttons':[
        {'name':'Export to CSV', 'custom_css':{'color':'red'}, 'hide':False}
    ]
}
```

If you want to create a totally custom button with its custom action, you should
give it an action. In your JS code, you may use `helpers` and `gridOptions`.

```python
menu = {
    'buttons':[
        {'name':'Custom Button', 'action':'console.log("foo");'}
    ]
}
```

::: tip
The order in which buttons display is:

- All buttons from the user's `buttons` list
- Builtin buttons that have not been reset, in the same order as above

:::

#### Simple Example

A nice layout using flex is defined by useful defaults,
handling many inputs and buttons at once.

<<< @/content/code-snippets/custom-menu-1.python

<example-custom-menu-1/>

#### Elaborate example

Here is an example using the input structure defined above.
Any user can easily customize his menu using the browser development tools
at first, and then defining it in the `menu` dict.

<<< @/content/code-snippets/custom-menu-2.python

<example-custom-menu-2/>

### Custom CSS

`css_rules: str, default=''`

You may want to define their own custom css rules (for example to use them in
custom renderers). To do so put your custom CSS in the `css_rules` parameter
as a Python `str`.

Below is an example using some ag-Grid-built classes.

<<< @/content/code-snippets/custom-css.python

<example-custom-css/>

### Custom JS

These 4 different params allow JS injection at 4 different stages in the widget
creation, in chronological order.

- `js_pre_helpers: list, default=[]`
- `js_helpers_custom: str, default=''`
- `js_pre_grid: list, default=[]`
- `js_post_grid: list, default=[]`

#### Pre helpers JS

Useful functions to define helpers.

#### Helpers custom

Renderers, formatters...

#### Pre grid JS

Refining gridOptions, gridData.

#### Post grid JS

Display

For ideas on how to use them, follow the examples below.

### User Params

`user_params: dict, default={}`

This variable is used to pass an arbitrary dict of variables from Python to JS.
Typically, this dict can be consumed by custom JS described above.

It is particularly useful to sync ipyaggrid with another ipywidget.

See examples in the live demo.

## Examples

This section describes the **ipyaggrid** advanced customization parameters which
often require Javascript and CSS.

### Custom Buttons

JavaScript beginners, if you want to act on the ag-Grid
[API](https://www.ag-grid.com/javascript-grid-api/)
using buttons, this is the feature you need !

Here are two examples of custom buttons. The first ones simply expand/collapse
the row groups: simple and convenient.

<example-collapse-expand/>

The code is also very simple:

```python
buttons = [
{'name':'Expand All', 'action':'''gridOptions.api.expandAll();'''},
{'name':'Collapse All', 'action':'''gridOptions.api.collapseAll();'''},
]
```

The apis can be accessed by `gridOptions.api` or `gridOptions.columnApi`.
Then you can access any function of the apis.

The second example is a bit more consistent: it highlights the price cells
if their value is higher than 30k.
It uses `gridOptions.api.flashCells`, which is described in [ag-grid API documentation](https://www.ag-grid.com/javascript-grid-api/).
However it requires to know the structure of the nodes that will be processed.

<example-simple-highlight/>

```python
buttons=[{'name':'Highlight', 'action':"""
gridOptions.api.forEachNodeAfterFilterAndSort(node => {
    if (node.aggData){
        if (node.aggData.price.value > 30000){
            gridOptions.api.flashCells({rowNodes: [node], columns: ["price"]});
        }
    } else {
        if (node.data.price>30000){
            gridOptions.api.flashCells({rowNodes: [node], columns: ["price"]});
        }
    }
});
"""}]
```

If you need to use some elaborate features of ag-Grid, it's likely that you will
find it on [ag-Grid website](https://www.ag-grid.com/javascript-grid-features/),
and that may give you ideas of buttons to implement.

### Custom JS

JavaScript lovers, you may enjoy this feature a lot. As you don't only build
buttons in js, you should also be able to build other components to get the full
experience out of the API.

### Sync with other Widgets

You can use `user_params` to synchronize them with any other parameter that you
want. See that example for more details.

In the binder notebook you will find two examples that explain how to synchronise
your grid with other widgets.

<!--Example Highlight slider-->

## Live Demo

The following live notebook on [mybinder](https://mybinder.org) contains the examples
of the previous sections:  
[![Binder](https://mybinder.org/badge.svg)](https://mybinder.org/v2/gl/DGothrek%2Fipyaggrid/binder-demo?filepath=demo-ipyaggrid-customize.ipynb)
