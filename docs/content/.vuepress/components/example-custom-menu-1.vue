
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
  {"version_major": 2, "version_minor": 0, "state": {"2a639b3042d94fed98ee85be9c2cbdfc": {"model_name": "AgGridModel", "model_module": "ipyaggrid", "model_module_version": "~0.1.0", "state": {"_dom_classes": [], "_grid_data_down": "H4sIALa8eVsC/52VT2+bQBDFv8rKp1bKYf+BoTdsx6mlurKKWx+iHMZmRJAX1logjVXlu3dJc/Cy\nEQ49shp+zL5587j/MzmA+Q4lTr6QCaOUqHpyQybaFHlRdWe3rdEn7M5KOL5WJW1WdM8nUxy6Ax7J\nkL3cEAc1f8QnVArJGlSxb13mz/SS15UarbBxoJzFQR+aHs8KzJEIToeAs7Y4HC9hIgwk9WDQ2AaL\nBodQG3Uudds89u4rvdZ+4B4VSdPtEC1Zzx0QjYQn3Na+XOkhylKbzLkdEzLqYzbY5qgbElB5bZ5v\npe4VOeN95B0oeC7QIumo9mgsPPFX5cnSRrtCBGHk9bVszZmsVqvRc5RCerA5NNaw1WBrG101BRzc\nxmIZ91lJuYe6hkwbkp3UCGMIOWXvbBTYfapyNKQe9OxCZzk6OCGoZ9h5m4H9EB2tGg+o57a1VQTJ\nHIzS/zFTEXnd3daNXU+yg1xX5FO6+zxq3zml3NdPG12BzSMbIH2zJHUBl8StPusG3CULmewjF23d\noBmroIhC6qG+alP90+WjHomlnHpzgCc0b2J8dD85lb7ZNt8CRoc1WkBTt5WbGpGf2YwJRhao2mck\nKWZQXYujX1od69+Qo8sOQj8r0ySZkTjGa8iuzo2kaehNYLbevRrnGszWuY0x32t3BkubIqNWXnCv\npaXdtVFRG4Shn2jDP8tuJ889PwQeZMGHQ9/LHM7Ye66yVhvrKnspwV8e/gJMaxmiqggAAA==\n", "_grid_data_up": {}, "_grid_options_mono_down": "H4sIALa8eVsC/3WQzW7CMBCEXyXaM+oD9FaBuEER5Vb1sCRLsGp7o7XdvyjvXhtHiYHWp3jmm8mu\neyCLR01L1nty6ofgsfISaFFBzToYu6KTi9prDydFuomfwKJaZSEiZ8KGZIsmxeA568OiKmCD73SP\nbpJ6DdaY3XuWG9I3cCeq/gPdXeThLRp5rbXSnmTeKasvLF7ZdpbRKoOe9vzpZrEVDt0maK+egufl\n5TVuX+fw3VGK9GCDOZJMVJp1/DVguy3McaS4D3j68v8kDpNV8E2cseA/UAdas8TRx9yZdEfiHhI4\nGzFZVq+mlrF68ncoaPI6NZsu3jxf9WaVUoODIZ5feHigPj8CAAA=\n", "_grid_options_multi_down": [], "_id": 751215486, "_js_helpers_builtin": "H4sIALa8eVsC/+1VUW/bNhB+z6+4h6CWA0dxNqAPzlLMcZM2wDZvs9GXYVgZ6WxroUiBR6ZJDf/3\nHinLlmV5SYEC28P4IFHid98dj98dFygLNHTlMmkzBZewPAIeqbB4o00urEUzgJlTic20ipROsbvG\n+HF2Brm4RyBnMBhBRqC0BadSnGUK0w00m0Ewh1evwL/jByHdDpkfEi2kHIbCT/CW+aIa9GIPuWBk\nGs/RvtfOUNSCyCvEz5lyFlsxVGEmmGiV7mH4J1nQsxkxeA2dZjl+1grH4W/UhRN43eexa7mzk40d\no0/XdK2envI0uLH6djKeWJOpedSNyd1ROe/34LzfsPTZ5WxcXkLfJzjfTqmcNhPth0HrjPL+dslW\nh6i7IeOdfr+z7z2vIPlByCYUaoWsw/l4vOSIVnC8XKwGx8vcP2j1cYvdhre2UE7KcnnVOwrvWdDu\nrbIDSL+Py6+o04v7s063V0PcSC2amO8CJoAyZV9SBeswNk73RbuJy/v7asoQ5WHSROeFMOhFRjXK\nGZc0mp90IqRf6kGCUn5oFh1X8JDI5WX5EjARkNUGUxDE1ayPdsXpSTxdXdlb4oujnXrfgH+ARjRN\nOa73e3peO2ZASbjL8+aFPOf/oJb+bvYo+4xTfZPZWurmJkvHhZ9S3UHtdyyKLPamIy1drigwRI2D\nEc7qCWOGUj5PXqZXSFky3qa+SP7486LVexIwQ46Be8qwsuHO5XV8LZJFVCLg8k0jQXUHceGoQnrK\n27TWVVbd51xX26uc16kbmTg7OSnJTuD6sdCG75q5F5wAq2E0+QCO/B8xP33HrsAnt8L/yNoWOSzH\nd39jYlf1WNaQs/DGwDvVI3p4abIDM20uvWrQfVa8R5GGAhWswV6jSfs9vjPaFVxu1rjGuje/0ZpV\nSq32fr2yPrD8a6b46pzq4hnElbZW562gzWG0xqiVfJqg5IRi2u7DFYVBot+cDl1ln4ILEX8ROQ6g\nkz/95b/ihB46DZoFot2iwuceRDuZ/q4/XeGEN1b4gPiGZOG2hFUYnXBUI+4HI97hnUjuB+UxeoMw\nKVtkq1l5qFtDf29sgauLg4Veaov7jRgS6ysqhfM1Gr9+5B72DVUe+P7X+b+j80dJ317n/iaejt+O\nYQDJApP7/5rug+L2lM/GXwBatMMsQwwAAA==\n", "columns_fit": "size_to_fit", "compress_data": true, "css_rules_down": [], "export_mode": "buttons", "height": "350px", "js_helpers": "H4sIALa8eVsC/wMAAAAAAAAAAAA=\n", "js_helpers_custom": "H4sIALa8eVsC/wMAAAAAAAAAAAA=\n", "js_post_grid": [], "js_pre_grid": [], "js_pre_helpers": [], "layout": "IPY_MODEL_38fd87878e8d4b438457a5fdbec88032", "menu": {"buttons": [{"name": "Log foo 1", "action": "console.log(\"foo\");", "css": ".flex-child-log-foo-1-751215486 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Log bar 1", "action": "console.log(\"bar\");", "css": ".flex-child-log-bar-1-751215486 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Log foo 2", "action": "console.log(\"foo\");", "css": ".flex-child-log-foo-2-751215486 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Log foo 3", "action": "console.log(\"foo\");", "css": ".flex-child-log-foo-3-751215486 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Log foo 4", "action": "console.log(\"foo\");", "css": ".flex-child-log-foo-4-751215486 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Export to CSV", "action": "console.log(\"exporting to CSV\"); helpers.exportToCsv(gridOptions);", "css": ".flex-child-export-to-csv-751215486 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Export to Excel", "action": "console.log(\"exporting to Excel\"); helpers.exportToExcel(gridOptions);", "css": ".flex-child-export-to-excel-751215486 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Export Grid", "action": "exportFunc.exportGrid(gridOptions, view, parseInt(inputAggregationLevel.value, 10))", "container_css": ".flex-child-container-export-grid-751215486 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\n}\n", "css": ".flex-child-export-grid-751215486 {\norder: 0;\nalign-self: auto;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}], "inputs": [{"name": "Quick Filter", "css": ".flex-child-quick-filter-751215486 {\norder: 0;\nalign-self: auto;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nwidth: 150px;\n}\n"}, {"name": "Toggle Edit", "css": ".flex-child-toggle-edit-751215486 {\norder: 0;\nalign-self: auto;\nmargin: 5px;\nflex: 0.00 1.00 auto;\n}\n"}, {"name": "Toggle Delete", "css": ".flex-child-toggle-delete-751215486 {\norder: 0;\nalign-self: auto;\nmargin: 5px;\nflex: 0.00 1.00 auto;\n}\n"}], "button_div_css": ".flex-button-div-751215486 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: flex-start;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n", "input_div_css": ".flex-input-div-751215486 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: baseline;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n", "menu_div_css": ".flex-menu-div-751215486 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: flex-start;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n"}, "show_toggle_delete": true, "show_toggle_edit": true, "theme": "ag-theme-balham", "user_params": {}}}, "38fd87878e8d4b438457a5fdbec88032": {"model_name": "LayoutModel", "model_module": "@jupyter-widgets/base", "model_module_version": "1.0.0", "state": {}}}}
</script>
<div id="embed-grid-751215486">
  <!-- This script tag will be replaced by the views DOM tree -->
  <script type="application/vnd.jupyter.widget-view+json">
    {"version_major": 2, "version_minor": 0, "model_id": "2a639b3042d94fed98ee85be9c2cbdfc"}
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
