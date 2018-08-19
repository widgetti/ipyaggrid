
# Structure

This section contains a few **ipyaggrid** key architecture decisions and thier reasons.

## In, Down, Up, Out


in an ipywidget, the data lives in Python and JavaScript and get synced between the two.  
To make the data path clear we have added the following suffixes to data variables. Each corresponds to a step on the path:
+ `_in`: Python variable, data input by the Python user
+ `_down`: Python/JavaScript variable, synced down from Python to JavaScript when assigned
+ `_up`: Python/JavaScript variable, synced up from JavaScript to Python upon JavaScript event
+ `_out`: Python variable, data made available to the Python user, built from `_up`

This sequence of variables on the data sync path make the ipyaggrid easy to use, hopefully , and simpler to debug and understand.

The variables naturally hidden to the Python user typically start with `_`, the others not.

As a consequence, the 4 variables containing grid data are:
+ `grid_data_in`
+ `_grid_data_down`
+ `_grid_data_up`
+ `grid_data_out`

## Counters

In order to detect changes in variables synced across the Python-JavaScript border, ipywidgets use the library [traitlets](https://github.com/ipython/traitlets).  

However in the case of a `dict` or `list` changing one key/value or element is not enough to trigger the sync, as explained in the [ipywidget issue 786](https://github.com/jupyter-widgets/ipywidgets/issues/786). For this reason we have added the `_counter_update_data` variable in the AgGridModel. Incrementing it enables to unambiguously signal the JavaScript code that it must perform some operation.

More specifically, upon counter increment the Javascript starts delete/export operations based on other synced variables value. These operations ultimately update `_grid_data_up` and then `grid_data_out`.


However there is a bug in ipywidgets, explained in the [trailets issue 496](https://github.com/ipython/traitlets/issues/496), that prevents syncing a `dict` in some cases. The [traitlets PR 466](https://github.com/ipython/traitlets/pull/466) should solve this problem. In the meantime we have added a `counter` key/value in the `grid_data_out` variable to always trigger the update. See file [grid.py](https://gitlab.com/DGothrek/ipyaggrid/blob/master/ipyaggrid/grid.py).


## JavaScript injection

**ipyaggrid** approach is to wrap ag-Grid as transparently as possible in order to:
+ provide unlimited access to all ag-Grid features
+ avoid maintaining a Python-Javascript translation layer

So a user can write javascript and pass it as a Python str to the `Grid` constructor.  
This code is parsed and eval-ed in the browser. Consequently a notebook with **ipyaggrid** may contain arbitrary Javascript code - like any website by the way. In order to mitigate the potential security issue we recommend to:
+ Pay attention to the origin of the notebooks you run - to the same extent you visit potentially malicious websites
+ Get into the habit of running Jupyter in a Private mode


## Serializers

When working with the `DOMWidgetModel`, it is necessary to extend the serializers from
`DOMWidgetModel.serializers`. Otherwise the layout, which needs a proper
serializer, will not have it and you will probably get an error.

For compatibility with Python gzip, use `pako.gzip`, not `pako.deflate`.

A side benefit of serializing - gunzip - the ipywidget data is that all content with single/double quotes or backticks will be properly encapsulated and consequently will enable embedding in an HTML page. Without this 'trick' the JavaScript code passed as strings in the ipywidget variables will usually break a standalone HTML page containing an **ipyaggrid** state.

## Time Zones

In order to display a date in the same way irrespective of which time zone the user sits, we have created a Cell Renderer for dates that counter the changes performed automatically by the browser. See function `dateFormatter` in [helpersBuiltin.js](https://gitlab.com/DGothrek/ipyaggrid/blob/master/ipyaggrid/js/helpersBuiltin.js).
