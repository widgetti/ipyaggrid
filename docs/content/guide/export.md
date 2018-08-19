# Export

## Embed Widget

To embed your widget you need extract several elements which are necessary
to create standalone HTML pages:

- script tags:
  - require.js
  - jupyter-widgets-html-manager
- HTML state: HTML template to contain manager state
- manager state: container of all widgets state
- widget div: containing a reference to the widget, placeholder for the widget

These elements are obtained with the method `.export_html()` which returns
a dict with the following keys:

- `script_tags`
- `html_state`
- `manager_state`
- `grid_div`

## Standalone HTML

These elements can be directly aggregated to produce a standalone HTML page.
In the case of a page containing only one ipywidget, the HTML string if obtained
with `.export_html(build=True)`.

The grid below, encapsulated in an iframe, was created with this [notebook](TBD).
All grids in this documentation are created similarly.


See the [Dump](section) to create the file directly.

## Several Widgets

If you need display several ipywidgets in the same page the operation is a bit
more complex because you must first create the `manager_state` aggregating all
widgets state.

If you put several standalone widget HTML (from the section above), you risk
displaying unwanted multiple instances of the same widget. The proper way to
embed ipywidgets is to have a unique manager state containing the states of all widgets.

For more info check out the ipywidgets official documentation:
[Embedding Jupyter Widgets in Other Contexts than the Notebook](https://ipywidgets.readthedocs.io/en/latest/embedding.html).

```python
html_export = grid.export_html()
```

This function returns a Python dict with the various elements necessary to embed
a widget in HTML:

```python {13}
# The scripts to execute at the beggining of your html
# that loads require.js and ipywidgets.
# NOT NECESSARY IN A JUPYTER NOTEBOOK
html_export['script_tags'] : str

# The script that manages the states of all your widgets. It contains a
# template that must be filled with the correct state manager of your widgets.
html_export['html_state'] : str

# The state manager
html_export['manager_state'] : dict
# Resulting HTML string
html_export['html_state'].format(manager_state=json.dumps(manager_state))

# The actual div where your widget will be built.
html_export['grid_div'] : str
```

To combine several manager_state variables together, proceed as follows:

```python
# Widget a
manager_state_a

# Widget b
manager_state_b

manager_state_a['state'] = manager_state_a['state'].update(manager_state_b['state'])
# Now manager_state_a contains both the state of a and b.
```

Some packages, like [ezdashboard](https://gitlab.com/oscar6echo/ezdashboard), handle the merging of widget states themselves.
Therefore you just need to give a list of the states and to put the `grid_div` HTML code where you want.

## Dump to File

The `.dump(path, mode)` convenience method creates files for the elements produced by `.export_html()`:

- `path` is the folder name to dump the files
- `mode` has 2 possible values:
  - `standalone` to create a single standalone HTML file
  - `all`: to create 4 files as follows

```
path
├── export_grid_scripts.html
├── export_grid_html_state.html
├── export_grid_state_{id}.json
└── export_grid_grid_{id}.html
```

where `{id}` is the widget unique id.
