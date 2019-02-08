
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
  {"version_major": 2, "version_minor": 0, "state": {"c2bbf30a8d064ff09afbd86fbb09f08a": {"model_name": "AgGridModel", "model_module": "ipyaggrid", "model_module_version": "~0.1.11", "state": {"_dom_classes": [], "_grid_data_down": "H4sIADpRXVwC/52VT4+bMBDFv4qVUyvtwX8g4N4I2bSRmioqaXOoepiEEYticGRgu1G1372m3UOM\nV2QpN6zhp+eZN48fv2dHMF+gwtkHMmOUEtXM7shMm7Io6/7svjP6jP1ZBae/VUmXl/372ZTH/oCH\nQsrnO+Kg0gd8RKWQbECVh85lfsuueX2p0QpbBxqziA+h2emiwJyI4HQMuOjK4+kaJiIpQg8GrRVY\ntjiG2qpLpbv2wZEm49CjfcUDKpJluzFaskkdWTKOvTvu7Me1HqOstMkdDKeSDTFb7ArULQlpcGue\nL6WuskgGQ+RHUPBUokXSSfLmIoyHrHV1trTJrhByzj1dq85cyHq9njpHEYSv+BZaa9h6VNpW120J\nR4dFqfAumVQHaBrItSH5WU0wBhc0fGWjwO5TXaAhzahnlzov0BEXCuoZJO1ysC2g090v5XwI29iO\nIEnBKD19pjY9vC24b1q7nmQPha7Ju2z/ftK+c85iT2Oqja7B5pENkKFZkqaEa+JOX3QL7pLNg2iI\nXHZNi2Z6Byn3xvFJm/pfX97qkSgWHmUDj2hemvHm/RQ08uJs+zlkdLxHS2ibrnZtywJPEmOCkSWq\n7glJhjnUt+Lou1an5hcUWLsepn5WZkmyIFLiLWRfN4gR4Q1zsdkTTim/BbN1borYx4tKg5VNkSnj\njIPIC5AVD6dFbcj8VUrHf5b9Tl4cJXQeeH5Y8vHQ9zOHBgH3XRUw9h+uovT55x+OoT6gqggAAA==\n", "_grid_data_up": {}, "_grid_options_mono_down": "H4sIADpRXVwC/5WRwU7DMBBEf6Xac8UHcEOtwqmlantDHLbJ1rWwvdHGboEo/45NTJJSOJBT/GZ2\nPJu0ULIJ1i3p2MD97LmFoyZTxVdg0Uo7mM/gRFiRrNFS4k8DF748Coc6Ui+BklNXlE/dfDYJs/hK\nt1GrTP8RVGI/fZvFFRm4Nteiy1+sm2+MShXBlYnhWUH3Ehk5PBjasXjt1Fiox4U2nuQnXbDZUqM/\naBRUWmcVjNcPwfPi6xuPKjpt0dOWL80I+x+xf68pwRZcsAeSYTStlS+PvdcTMZeKq4OnN//HxH6Q\nJv4qtpj4z2gCFSyxXJ47kalJmrtkHIU4OY1eDik5etA3KGj7dUq2dTx5vsrtKaWEBrr4fAKUigfp\nkQIAAA==\n", "_grid_options_multi_down": [], "_id": 609046688, "_js_helpers_builtin": "H4sIADpRXVwC/+1VUW/bNhB+z6+4h6CWA0dxNqAPzlLMcZM2wDZvs9GXYVgZ6WxroUiBR6ZJDf/3\nHinLlmV5SYEC28P4IFHid98dj98dFygLNHTlMmkzBZewPAIeqbB4o00urEUzgJlTic20ipROsbvG\n+HF2Brm4RyBnMBhBRqC0BadSnGUK0w00m0Ewh1evwL/jByHdDpkfEi2kHIbCT/CW+aIa9GIPuWBk\nGs/RvtfOUNSCyCvEz5lyFlsxVGEmmGiV7mH4J1nQsxkxeA2dZjl+1grH4W/UhRN43eexa7mzk40d\no0/XdK2envI0uLH6djKeWJOpedSNyd1ROe/34LzfsPTZ5WxcXkLfJzjfTqmcNhPth0HrjPL+dslW\nh6i7IeOdfr+z7z2vIPlByCYUaoWsw/l4vOSIVnC8XKwGx8vcP2j1cYvdhre2UE7KcnnVOwrvWdDu\nrbIDSL+Py6+o04v7s063V0PcSC2amO8CJoAyZV9SBeswNk73RbuJy/v7asoQ5WHSROeFMOhFRjXK\nGZc0mp90IqRf6kGCUn5oFh1X8JDI5WX5EjARkNUGUxDE1ayPdsXpSTxdXdlb4oujnXrfgH+ARjRN\nOa73e3peO2ZASbjL8+aFPOf/oJb+bvYo+4xTfZPZWurmJkvHhZ9S3UHtdyyKLPamIy1drigwRI2D\nEc7qCWOGUj5PXqZXSFky3qa+SP7486LVexIwQ46Be8qwsuHO5XV8LZJFVCLg8k0jQXUHceGoQnrK\n27TWVVbd51xX26uc16kbmTg7OSnJTuD6sdCG75q5F5wAq2E0+QCO/B8xP33HrsAnt8L/yNoWOSzH\nd39jYlf1WNaQs/DGwDvVI3p4abIDM20uvWrQfVa8R5GGAhWswV6jSfs9vjPaFVxu1rjGuje/0ZpV\nSq32fr2yPrD8a6b46pzq4hnElbZW562gzWG0xqiVfJqg5IRi2u7DFYVBot+cDl1ln4ILEX8ROQ6g\nkz/95b/ihB46DZoFot2iwuceRDuZ/q4/XeGEN1b4gPiGZOG2hFUYnXBUI+4HI97hnUjuB+UxeoMw\nKVtkq1l5qFtDf29sgauLg4Veaov7jRgS6ysqhfM1Gr9+5B72DVUe+P7X+b+j80dJ317n/iaejt+O\nYQDJApP7/5rug+L2lM/GXwBatMMsQwwAAA==\n", "columns_fit": "size_to_fit", "compress_data": true, "css_rules_down": [], "export_mode": "disabled", "height": "350px", "js_helpers": "H4sIADpRXVwC/wMAAAAAAAAAAAA=\n", "js_helpers_custom": "H4sIADpRXVwC/wMAAAAAAAAAAAA=\n", "js_post_grid": [], "js_pre_grid": [], "js_pre_helpers": [], "layout": "IPY_MODEL_bbf55b07a40149aab371fd2d069b16a3", "menu": {"buttons": [{"name": "Expand All", "action": "gridOptions.api.expandAll();", "css": ".flex-child-expand-all-609046688 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Collapse All", "action": "gridOptions.api.collapseAll();", "css": ".flex-child-collapse-all-609046688 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}], "inputs": [], "button_div_css": ".flex-button-div-609046688 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: flex-start;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n", "input_div_css": ".flex-input-div-609046688 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: baseline;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n", "menu_div_css": ".flex-menu-div-609046688 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: flex-start;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n"}, "quick_filter": false, "theme": "ag-theme-balham", "user_params": {}}}, "bbf55b07a40149aab371fd2d069b16a3": {"model_name": "LayoutModel", "model_module": "@jupyter-widgets/base", "model_module_version": "1.1.0", "state": {}}}}
</script>
<div id="embed-grid-609046688">
  <!-- This script tag will be replaced by the views DOM tree -->
  <script type="application/vnd.jupyter.widget-view+json">
    {"version_major": 2, "version_minor": 0, "model_id": "c2bbf30a8d064ff09afbd86fbb09f08a"}
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
