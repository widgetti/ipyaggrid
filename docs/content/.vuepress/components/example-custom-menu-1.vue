
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
  {"version_major": 2, "version_minor": 0, "state": {"1fa76a60a2a845e5bd512e3211b6781e": {"model_name": "AgGridModel", "model_module": "ipyaggrid", "model_module_version": "~0.2.1", "state": {"_dom_classes": [], "_grid_data_down": "H4sIAK/zwl4C/5WVS2/bMBCE/wrhUwvkwIde7M2W49RAXBiVWx+KHtbWQhFMiQYlpTGK/PdSaQ6m\nCMjRUQT1YTU7M/r1d3YE8w0qnH0hM0YpUc3sjsy0KYuy7s/uO6PP2J9VcHq7Ne/ysn8+m/LYH3DB\nJX29Iw4qfcJnVArJBlR56Fzmj+ya1181WmF7DRWSCT6EZqeLAnMigtMx4KIrjycHFkVx7MGgtQOW\nLY6htupS6a59cmg04dGQ9h0PqEiW7cZo803qCJdEMhiCdvblWo9RVtrkrlQ08DBb7ArULQlpcGuf\n71cdZEx99R9AwUuJFkmnjMepjNmQta7OljbZFTwOYk/6VWcuZL1eT90jl1HkwVJorWHr0dG2um5L\nODqCsTAMh6x5dYCmgVwbkp/VBGMIIcPETxTYPNUFGtKMenap8wKdD43ixNtm2uVAREAnu19G1Jtt\nYxVBkoJRevpOZcTlEHjftDaeZA+FrsmnbP95Ut65EP6MqTa6BttHtkCGZpk3JVwTd/qiW3CnlFIM\nkcuuadFMVjCMuNdGX7Wp/+vy0fJgLPZSv4FnNO9ifDifMQ+8fG4fQ0bHNVpC23S1qxELPJ8xJhhZ\noupekGSYQ32rjn5qdWr+QIEuWyTUmzKbzxdESryF7O+5xSsDL/mLzd52FeW3YPaem1UaeV57MFjZ\nFpmyThon3veteDitankgPEg6/rPsM3lx/RAzT5wlHy99r3NEIvxy3T4GjE12VcLC4PX3P6Ht7Q2q\nCAAA\n", "_grid_data_up": {}, "_grid_options_mono_down": "H4sIAK/zwl4C/3WRS2/CMBCE/0rkUyshBFKF+jhVIHriIcoNcTDxJli1vdHaLm2j/PfaSUpCaX2K\nZr6deMclA8MPCqaoNmDlF7DHxJGHQcJSVF6bGWQ2aLuSZRKUCJ8MSebSsIAcgQugJddxjK0avRok\nPVjzN7hGF1G9BFPeuNcsClC/4IJk+ge6ruVqH4xmrblUDqjbqVFfkZw0eSdzIzV3sMGT7cSc0BcL\nr5x89g6ndRudKyDjwQtyaCjIJQMhXUyPF8m8SZ1Ec1Nw4trelgTOk0lO0gg8DXn+QlKsiojY3WR0\nN364H40n++FPxtRbh/qpimu3D7H9LMDWPzJeH4DOF4q1tFsyni97Zrt9zHDw4f6Z2J6tHi9CHT3+\nnSsPc6TQUjt3BFUA2WEEOyNM9qNn55Q2+uyv617q7BR1bMnhRW6jQkywrArnG+asM5CqAgAA\n", "_grid_options_multi_down": [], "_id": 604198016, "_js_helpers_builtin": "H4sIAK/zwl4C/+1VUW/bNhB+z6+4h6CWA0dxNqAPzlLMcZM2wDZvs9GXYVgZ6WxroUiBR6ZJDf/3\nHinLlmV5SYEC28P4IFHid98dj98dFygLNHTlMmkzBZewPAIeqbB4o00urEUzgJlTic20ipROsbvG\n+HF2Brm4RyBnMBhBRqC0BadSnGUK0w00m0Ewh1evwL/jByHdDpkfEi2kHIbCT/CW+aIa9GIPuWBk\nGs/RvtfOUNSCyCvEz5lyFlsxVGEmmGiV7mH4J1nQsxkxeA2dZjl+1grH4W/UhRN43eexa7mzk40d\no0/XdK2envI0uLH6djKeWJOpedSNyd1ROe/34LzfsPTZ5WxcXkLfJzjfTqmcNhPth0HrjPL+dslW\nh6i7IeOdfr+z7z2vIPlByCYUaoWsw/l4vOSIVnC8XKwGx8vcP2j1cYvdhre2UE7KcnnVOwrvWdDu\nrbIDSL+Py6+o04v7s063V0PcSC2amO8CJoAyZV9SBeswNk73RbuJy/v7asoQ5WHSROeFMOhFRjXK\nGZc0mp90IqRf6kGCUn5oFh1X8JDI5WX5EjARkNUGUxDE1ayPdsXpSTxdXdlb4oujnXrfgH+ARjRN\nOa73e3peO2ZASbjL8+aFPOf/oJb+bvYo+4xTfZPZWurmJkvHhZ9S3UHtdyyKLPamIy1drigwRI2D\nEc7qCWOGUj5PXqZXSFky3qa+SP7486LVexIwQ46Be8qwsuHO5XV8LZJFVCLg8k0jQXUHceGoQnrK\n27TWVVbd51xX26uc16kbmTg7OSnJTuD6sdCG75q5F5wAq2E0+QCO/B8xP33HrsAnt8L/yNoWOSzH\nd39jYlf1WNaQs/DGwDvVI3p4abIDM20uvWrQfVa8R5GGAhWswV6jSfs9vjPaFVxu1rjGuje/0ZpV\nSq32fr2yPrD8a6b46pzq4hnElbZW562gzWG0xqiVfJqg5IRi2u7DFYVBot+cDl1ln4ILEX8ROQ6g\nkz/95b/ihB46DZoFot2iwuceRDuZ/q4/XeGEN1b4gPiGZOG2hFUYnXBUI+4HI97hnUjuB+UxeoMw\nKVtkq1l5qFtDf29sgauLg4Veaov7jRgS6ysqhfM1Gr9+5B72DVUe+P7X+b+j80dJ317n/iaejt+O\nYQDJApP7/5rug+L2lM/GXwBatMMsQwwAAA==\n", "columns_fit": "size_to_fit", "compress_data": true, "css_rules_down": [], "export_mode": "buttons", "height": "350px", "js_helpers": "H4sIAK/zwl4C/wMAAAAAAAAAAAA=\n", "js_helpers_custom": "H4sIAK/zwl4C/wMAAAAAAAAAAAA=\n", "js_post_grid": [], "js_pre_grid": [], "js_pre_helpers": [], "layout": "IPY_MODEL_72d9219bb40049d0ab581c7f60028db2", "menu": {"buttons": [{"name": "Log foo 1", "action": "console.log(\"foo\");", "css": ".flex-child-log-foo-1-604198016 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Log bar 1", "action": "console.log(\"bar\");", "css": ".flex-child-log-bar-1-604198016 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Log foo 2", "action": "console.log(\"foo\");", "css": ".flex-child-log-foo-2-604198016 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Log foo 3", "action": "console.log(\"foo\");", "css": ".flex-child-log-foo-3-604198016 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Log foo 4", "action": "console.log(\"foo\");", "css": ".flex-child-log-foo-4-604198016 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Export to CSV", "action": "console.log(\"exporting to CSV\"); helpers.exportToCsv(gridOptions);", "css": ".flex-child-export-to-csv-604198016 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Export to Excel", "action": "console.log(\"exporting to Excel\"); helpers.exportToExcel(gridOptions);", "css": ".flex-child-export-to-excel-604198016 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}, {"name": "Export Grid", "action": "exportFunc.exportGrid(gridOptions, view, parseInt(inputAggregationLevel.value, 10))", "container_css": ".flex-child-container-export-grid-604198016 {\norder: 0;\nalign-self: auto;\nwidth: 150px;\nmargin: 5px;\nflex: 0.00 1.00 auto;\n}\n", "css": ".flex-child-export-grid-604198016 {\norder: 0;\nalign-self: auto;\nflex: 0.00 1.00 auto;\nfont-size: 12px;\n}\n"}], "inputs": [{"name": "Quick Filter", "css": ".flex-child-quick-filter-604198016 {\norder: 0;\nalign-self: auto;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nwidth: 150px;\n}\n"}, {"name": "Toggle Edit", "css": ".flex-child-toggle-edit-604198016 {\norder: 0;\nalign-self: auto;\nmargin: 5px;\nflex: 0.00 1.00 auto;\n}\n"}, {"name": "Toggle Delete", "css": ".flex-child-toggle-delete-604198016 {\norder: 0;\nalign-self: auto;\nmargin: 5px;\nflex: 0.00 1.00 auto;\n}\n"}], "button_div_css": ".flex-button-div-604198016 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: flex-start;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n", "input_div_css": ".flex-input-div-604198016 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: baseline;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n", "menu_div_css": ".flex-menu-div-604198016 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: flex-start;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n"}, "show_toggle_delete": true, "show_toggle_edit": true, "theme": "ag-theme-balham", "user_params": {}}}, "72d9219bb40049d0ab581c7f60028db2": {"model_name": "LayoutModel", "model_module": "@jupyter-widgets/base", "model_module_version": "1.2.0", "state": {}}}}
</script>
<div id="embed-grid-604198016">
  <!-- This script tag will be replaced by the views DOM tree -->
  <script type="application/vnd.jupyter.widget-view+json">
    {"version_major": 2, "version_minor": 0, "model_id": "1fa76a60a2a845e5bd512e3211b6781e"}
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
