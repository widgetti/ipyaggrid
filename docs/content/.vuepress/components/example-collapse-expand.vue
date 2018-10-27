
<template>
  <div class="example-ipyaggrid">
      <iframe 
        srcdoc='<!-- Load RequireJS, used by the IPywidgets for dependency management -->
<script 
  src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.4/require.min.js" 
  integrity="sha256-Ae2Vz/4ePdIu6ZyI/5ZGsYnb+m0JlOmKPjt6XZ9JJkA=" 
  crossorigin="anonymous">
</script>

<!-- Load IPywidgets bundle for embedding. -->
<script 
  src="https://unpkg.com/@jupyter-widgets/html-manager@*/dist/embed-amd.js" 
  crossorigin="anonymous">
</script>
<!-- The state of all the widget models on the page -->
<script type="application/vnd.jupyter.widget-state+json">
  {"version_major": 2, "version_minor": 0, "state": {"d88fa9ac8b464e8ea780f1bede11de59": {"model_name": "AgGridModel", "model_module": "ipyaggrid", "model_module_version": "~0.1.4", "state": {"_dom_classes": [], "_grid_data_down": "H4sIAEIn1FsC/5WVTW+bMBjHv4qV0yr14BfAsBtJ2i7SMkUjWw5TD0/CI4picGSgazT1u89sPcS4\nIuWI9fCT+b88/PozO4D5BhXOPpMZo5SoZnZLZtqURVn3Z3ed0Sfszyo4/ptKu7zsn0+mPPQHXLI4\neL0lDmrxhM+oFJI1qHLfucwf2SWvHzVaYetAYx7yITQ7nhWYIxGcjgHnXXk4OjAacunBoLUXLFsc\nQ23UudJd+3RJEwmLkiHtO+5RkSzbjtHS9cIB0UjSIWhrX671GOVem9yVKkzYELPBrkDdkpAG1/x8\nG3WRLPZu9gAKXkq0SDrtelJ68VhVJ0ubnAoRMJ9135kzWa1Wk30USez5uIDWBrYevdpG120JBzcT\n78Q1rfbQNJBrQ/KTmhIMyVnsNwpsn+oCDWlGM7vUeYGDwFIvIIsuB6snnawa5yIcwtZWESQLMEpP\n91RG1PP0rmltPckOCl2TT9nuZlrfk0RG3gdro2uw+8gukGFY0qaES+JWn3ULblel34hl17RopisY\nMzFEfdGm/q/LRzMiwtjLyBqe0byJ8dF+ilBQz9DN15DRcY2W0DZd7WokIo/EmGBkiap7QZJhDvW1\ndfRTq2PzGwp02Jxz39IsTeckSfAasp9zCyH8fs3XO/ujoPwazM65LBl58X0wWNktMsFOLq0P3mbj\n4bRVy+N3Ntr4z7Lv5NnNA+WeOEs+vvS9ncNlIqifqoCxyakKgjh6ffwL54ne1KoIAAA=\n", "_grid_data_up": {}, "_grid_options_mono_down": "H4sIAEIn1FsC/5WRwU7DMBBEf6Xac8UHcEOtwqmlantDHLbJ1rWwvdHGboEo/45NTJJSOJBT/GZ2\nPJu0ULIJ1i3p2MD97LmFoyZTxVdg0Uo7mM/gRFiRrNFS4k8DF748Coc6Ui+BklNXlE/dfDYJs/hK\nt1GrTP8RVGI/fZvFFRm4Nteiy1+sm2+MShXBlYnhWUH3Ehk5PBjasXjt1Fiox4U2nuQnXbDZUqM/\naBRUWmcVjNcPwfPi6xuPKjpt0dOWL80I+x+xf68pwRZcsAeSYTStlS+PvdcTMZeKq4OnN//HxH6Q\nJv4qtpj4z2gCFSyxXJ47kalJmrtkHIU4OY1eDik5etA3KGj7dUq2dTx5vsrtKaWEBrr4fAKUigfp\nkQIAAA==\n", "_grid_options_multi_down": [], "_id": 427047946, "_js_helpers_builtin": "H4sIAEIn1FsC/+1VUW/bNhB+z6+4h6CWA0dxNqAPzlLMcZM2wDZvs9GXYVgZ6WxroUiBR6ZJDf/3\nHinLlmV5SYEC28P4IFHid98dj98dFygLNHTlMmkzBZewPAIeqbB4o00urEUzgJlTic20ipROsbvG\n+HF2Brm4RyBnMBhBRqC0BadSnGUK0w00m0Ewh1evwL/jByHdDpkfEi2kHIbCT/CW+aIa9GIPuWBk\nGs/RvtfOUNSCyCvEz5lyFlsxVGEmmGiV7mH4J1nQsxkxeA2dZjl+1grH4W/UhRN43eexa7mzk40d\no0/XdK2envI0uLH6djKeWJOpedSNyd1ROe/34LzfsPTZ5WxcXkLfJzjfTqmcNhPth0HrjPL+dslW\nh6i7IeOdfr+z7z2vIPlByCYUaoWsw/l4vOSIVnC8XKwGx8vcP2j1cYvdhre2UE7KcnnVOwrvWdDu\nrbIDSL+Py6+o04v7s063V0PcSC2amO8CJoAyZV9SBeswNk73RbuJy/v7asoQ5WHSROeFMOhFRjXK\nGZc0mp90IqRf6kGCUn5oFh1X8JDI5WX5EjARkNUGUxDE1ayPdsXpSTxdXdlb4oujnXrfgH+ARjRN\nOa73e3peO2ZASbjL8+aFPOf/oJb+bvYo+4xTfZPZWurmJkvHhZ9S3UHtdyyKLPamIy1drigwRI2D\nEc7qCWOGUj5PXqZXSFky3qa+SP7486LVexIwQ46Be8qwsuHO5XV8LZJFVCLg8k0jQXUHceGoQnrK\n27TWVVbd51xX26uc16kbmTg7OSnJTuD6sdCG75q5F5wAq2E0+QCO/B8xP33HrsAnt8L/yNoWOSzH\nd39jYlf1WNaQs/DGwDvVI3p4abIDM20uvWrQfVa8R5GGAhWswV6jSfs9vjPaFVxu1rjGuje/0ZpV\nSq32fr2yPrD8a6b46pzq4hnElbZW562gzWG0xqiVfJqg5IRi2u7DFYVBot+cDl1ln4ILEX8ROQ6g\nkz/95b/ihB46DZoFot2iwuceRDuZ/q4/XeGEN1b4gPiGZOG2hFUYnXBUI+4HI97hnUjuB+UxeoMw\nKVtkq1l5qFtDf29sgauLg4Veaov7jRgS6ysqhfM1Gr9+5B72DVUe+P7X+b+j80dJ317n/iaejt+O\nYQDJApP7/5rug+L2lM/GXwBatMMsQwwAAA==\n", "columns_fit": "size_to_fit", "compress_data": true, "css_rules_down": [], "export_mode": "disabled", "height": "350px", "js_helpers": "H4sIAEIn1FsC/wMAAAAAAAAAAAA=\n", "js_helpers_custom": "H4sIAEIn1FsC/wMAAAAAAAAAAAA=\n", "js_post_grid": [], "js_pre_grid": [], "js_pre_helpers": [], "layout": "IPY_MODEL_c22ef3b4b51641468c22e4b31b3adf36", "menu": {"buttons": [{"name": "Expand All", "action": "gridOptions.api.expandAll();", "css": ".flex-child-expand-all-427047946 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Collapse All", "action": "gridOptions.api.collapseAll();", "css": ".flex-child-collapse-all-427047946 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}], "inputs": [], "button_div_css": ".flex-button-div-427047946 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: flex-start;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n", "input_div_css": ".flex-input-div-427047946 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: baseline;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n", "menu_div_css": ".flex-menu-div-427047946 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: flex-start;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n"}, "quick_filter": false, "theme": "ag-theme-balham", "user_params": {}}}, "c22ef3b4b51641468c22e4b31b3adf36": {"model_name": "LayoutModel", "model_module": "@jupyter-widgets/base", "model_module_version": "1.1.0", "state": {}}}}
</script>
<div id="embed-grid-427047946">
  <!-- This script tag will be replaced by the views DOM tree -->
  <script type="application/vnd.jupyter.widget-view+json">
    {"version_major": 2, "version_minor": 0, "model_id": "d88fa9ac8b464e8ea780f1bede11de59"}
  </script>
</div>
    '
        height="410"
        width="100%"
        frameborder="0"
      ></iframe>
  </div>
</template>

<script>
export default {
  name: 'example-collapse-expand',
  data() {return {}}
}
</script>
