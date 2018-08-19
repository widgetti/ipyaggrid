from ipywidgets.embed import embed_data, dependency_state
import os

import json


def export_html_code(widget):
    data = embed_data(views=[widget], state=dependency_state(widget))

    script_tags = """<!-- Load RequireJS, used by the IPywidgets for dependency management -->
<script 
  src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.4/require.min.js" 
  integrity="sha256-Ae2Vz/4ePdIu6ZyI/5ZGsYnb+m0JlOmKPjt6XZ9JJkA=" 
  crossorigin="anonymous">
</script>

<!-- Load IPywidgets bundle for embedding. -->
<script 
  src="https://unpkg.com/@jupyter-widgets/html-manager@*/dist/embed-amd.js" 
  crossorigin="anonymous">
</script>"""

    html_state = """
<!-- The state of all the widget models on the page -->
<script type="application/vnd.jupyter.widget-state+json">
  {manager_state}
</script>"""

    grid_template = """
<div id="embed-grid-{id}">
  <!-- This script tag will be replaced by the views DOM tree -->
  <script type="application/vnd.jupyter.widget-view+json">
    {widget_views[0]}
  </script>
</div>
    """

    manager_state = dict(data['manager_state'])
    widget_views = [json.dumps(view) for view in data['view_specs']]
    grid_div = grid_template.format(widget_views=widget_views, id=widget._id)
    return {
        'script_tags': script_tags,
        'grid_div': grid_div,
        'html_state': html_state,
        'manager_state': manager_state}
