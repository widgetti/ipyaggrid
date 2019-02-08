
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
  {"version_major": 2, "version_minor": 0, "state": {"242ab5cb62694ced90459ef3e759a68a": {"model_name": "AgGridModel", "model_module": "ipyaggrid", "model_module_version": "~0.1.11", "state": {"_dom_classes": [], "_grid_data_down": "H4sIADpRXVwC/52VT4+bMBDFv4qVUyvtwX8g4N4I2bSRmioqaXOoepiEEYticGRgu1G1372m3UOM\nV2QpN6zhp+eZN48fv2dHMF+gwtkHMmOUEtXM7shMm7Io6/7svjP6jP1ZBae/VUmXl/372ZTH/oCH\nQsrnO+Kg0gd8RKWQbECVh85lfsuueX2p0QpbBxqziA+h2emiwJyI4HQMuOjK4+kaJiIpQg8GrRVY\ntjiG2qpLpbv2wZEm49CjfcUDKpJluzFaskkdWTKOvTvu7Me1HqOstMkdDKeSDTFb7ArULQlpcGue\nL6WuskgGQ+RHUPBUokXSSfLmIoyHrHV1trTJrhByzj1dq85cyHq9njpHEYSv+BZaa9h6VNpW120J\nR4dFqfAumVQHaBrItSH5WU0wBhc0fGWjwO5TXaAhzahnlzov0BEXCuoZJO1ysC2g090v5XwI29iO\nIEnBKD19pjY9vC24b1q7nmQPha7Ju2z/ftK+c85iT2Oqja7B5pENkKFZkqaEa+JOX3QL7pLNg2iI\nXHZNi2Z6Byn3xvFJm/pfX97qkSgWHmUDj2hemvHm/RQ08uJs+zlkdLxHS2ibrnZtywJPEmOCkSWq\n7glJhjnUt+Lou1an5hcUWLsepn5WZkmyIFLiLWRfN4gR4Q1zsdkTTim/BbN1borYx4tKg5VNkSnj\njIPIC5AVD6dFbcj8VUrHf5b9Tl4cJXQeeH5Y8vHQ9zOHBgH3XRUw9h+uovT55x+OoT6gqggAAA==\n", "_grid_data_up": {}, "_grid_options_mono_down": "H4sIADpRXVwC/3WRzU7DMBCEXyXyCaSqUqvCAU6oVTn1R6W3qgc33qQWtjda2xSI8u7YSUgCBZ+i\nmW8n3nHJwPCTgjmqHVj5CewhceRhlLAUlddmAZkN2qFkmQQlwidDkrk0LCBn4AJozXUcY5tGr0bJ\nANb8Fa7RVVR/gilv3GsWBahfcEEy/QPd1nJ1DEaz1lIqB9Tv1KgvSE6avJe5kZo72OHF9mJO6IuV\nV04+eYfzuo3eFZDx4AU5NBTkkoGQLqbHi2TepE6iuSk4cW1vSwLnySQXaQRexjx/Jik2RUTsYTKd\n3t/NJpPZcfydMffWoX6s4trtQ+w/CrD1j4zXJ6DuQrGWdkvG8/XAbLePGQ7e3T8T+84a8CLUMeDf\nuPKwRAottXNnUAWQHUewN8LkMHrRpbTRnb+te6mzU9SxJYc/chsVYoJlVThfvKIgoKoCAAA=\n", "_grid_options_multi_down": [], "_id": 122654114, "_js_helpers_builtin": "H4sIADpRXVwC/+1VUW/bNhB+z6+4h6CWA0dxNqAPzlLMcZM2wDZvs9GXYVgZ6WxroUiBR6ZJDf/3\nHinLlmV5SYEC28P4IFHid98dj98dFygLNHTlMmkzBZewPAIeqbB4o00urEUzgJlTic20ipROsbvG\n+HF2Brm4RyBnMBhBRqC0BadSnGUK0w00m0Ewh1evwL/jByHdDpkfEi2kHIbCT/CW+aIa9GIPuWBk\nGs/RvtfOUNSCyCvEz5lyFlsxVGEmmGiV7mH4J1nQsxkxeA2dZjl+1grH4W/UhRN43eexa7mzk40d\no0/XdK2envI0uLH6djKeWJOpedSNyd1ROe/34LzfsPTZ5WxcXkLfJzjfTqmcNhPth0HrjPL+dslW\nh6i7IeOdfr+z7z2vIPlByCYUaoWsw/l4vOSIVnC8XKwGx8vcP2j1cYvdhre2UE7KcnnVOwrvWdDu\nrbIDSL+Py6+o04v7s063V0PcSC2amO8CJoAyZV9SBeswNk73RbuJy/v7asoQ5WHSROeFMOhFRjXK\nGZc0mp90IqRf6kGCUn5oFh1X8JDI5WX5EjARkNUGUxDE1ayPdsXpSTxdXdlb4oujnXrfgH+ARjRN\nOa73e3peO2ZASbjL8+aFPOf/oJb+bvYo+4xTfZPZWurmJkvHhZ9S3UHtdyyKLPamIy1drigwRI2D\nEc7qCWOGUj5PXqZXSFky3qa+SP7486LVexIwQ46Be8qwsuHO5XV8LZJFVCLg8k0jQXUHceGoQnrK\n27TWVVbd51xX26uc16kbmTg7OSnJTuD6sdCG75q5F5wAq2E0+QCO/B8xP33HrsAnt8L/yNoWOSzH\nd39jYlf1WNaQs/DGwDvVI3p4abIDM20uvWrQfVa8R5GGAhWswV6jSfs9vjPaFVxu1rjGuje/0ZpV\nSq32fr2yPrD8a6b46pzq4hnElbZW562gzWG0xqiVfJqg5IRi2u7DFYVBot+cDl1ln4ILEX8ROQ6g\nkz/95b/ihB46DZoFot2iwuceRDuZ/q4/XeGEN1b4gPiGZOG2hFUYnXBUI+4HI97hnUjuB+UxeoMw\nKVtkq1l5qFtDf29sgauLg4Veaov7jRgS6ysqhfM1Gr9+5B72DVUe+P7X+b+j80dJ317n/iaejt+O\nYQDJApP7/5rug+L2lM/GXwBatMMsQwwAAA==\n", "columns_fit": "size_to_fit", "compress_data": true, "css_rules_down": [], "export_mode": "buttons", "height": "350px", "js_helpers": "H4sIADpRXVwC/wMAAAAAAAAAAAA=\n", "js_helpers_custom": "H4sIADpRXVwC/wMAAAAAAAAAAAA=\n", "js_post_grid": [], "js_pre_grid": [], "js_pre_helpers": [], "layout": "IPY_MODEL_726219b5fdbc4df88de617209c94a82d", "menu": {"buttons": [{"name": "Log foo 1", "action": "console.log(\"foo\");", "css": ".flex-child-log-foo-1-122654114 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Log bar 1", "action": "console.log(\"bar\");", "css": ".flex-child-log-bar-1-122654114 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Log foo 2", "action": "console.log(\"foo\");", "css": ".flex-child-log-foo-2-122654114 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Log foo 3", "action": "console.log(\"foo\");", "css": ".flex-child-log-foo-3-122654114 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Log foo 4", "action": "console.log(\"foo\");", "css": ".flex-child-log-foo-4-122654114 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Export to CSV", "action": "console.log(\"exporting to CSV\"); helpers.exportToCsv(gridOptions);", "css": ".flex-child-export-to-csv-122654114 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Export to Excel", "action": "console.log(\"exporting to Excel\"); helpers.exportToExcel(gridOptions);", "css": ".flex-child-export-to-excel-122654114 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Export Grid", "action": "exportFunc.exportGrid(gridOptions, view, parseInt(inputAggregationLevel.value, 10))", "container_css": ".flex-child-container-export-grid-122654114 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\n}\n", "css": ".flex-child-export-grid-122654114 {\norder: 0;\nalign-self: auto;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}], "inputs": [{"name": "Quick Filter", "css": ".flex-child-quick-filter-122654114 {\norder: 0;\nalign-self: auto;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nwidth: 150px;\n}\n"}, {"name": "Toggle Edit", "css": ".flex-child-toggle-edit-122654114 {\norder: 0;\nalign-self: auto;\nmargin: 5px;\nflex: 0.00 1.00 auto;\n}\n"}, {"name": "Toggle Delete", "css": ".flex-child-toggle-delete-122654114 {\norder: 0;\nalign-self: auto;\nmargin: 5px;\nflex: 0.00 1.00 auto;\n}\n"}], "button_div_css": ".flex-button-div-122654114 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: flex-start;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n", "input_div_css": ".flex-input-div-122654114 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: baseline;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n", "menu_div_css": ".flex-menu-div-122654114 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: flex-start;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n"}, "show_toggle_delete": true, "show_toggle_edit": true, "theme": "ag-theme-balham", "user_params": {}}}, "726219b5fdbc4df88de617209c94a82d": {"model_name": "LayoutModel", "model_module": "@jupyter-widgets/base", "model_module_version": "1.1.0", "state": {}}}}
</script>
<div id="embed-grid-122654114">
  <!-- This script tag will be replaced by the views DOM tree -->
  <script type="application/vnd.jupyter.widget-view+json">
    {"version_major": 2, "version_minor": 0, "model_id": "242ab5cb62694ced90459ef3e759a68a"}
  </script>
</div>
    '
        height="480"
        width="100%"
        frameborder="0"
      ></iframe>
  </div>
</template>

<script>
export default {
  name: 'example-custom-menu-1',
  data() {return {}}
}
</script>
