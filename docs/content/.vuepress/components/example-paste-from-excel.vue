
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
  {"version_major": 2, "version_minor": 0, "state": {"814dc00c606e470aada2ce41c7e1c95e": {"model_name": "AgGridModel", "model_module": "ipyaggrid", "model_module_version": "~0.1.10", "state": {"_dom_classes": [], "_grid_data_down": "H4sIAB1JXVwC/4uuVlKyUlBSqo0FAFnRYOkKAAAA\n", "_grid_data_up": {}, "_grid_options_mono_down": "H4sIAB1JXVwC/42U32+bMBDH/xWLF0DLUPtaQqUqWaRKUzeteYuiyIGDODI2sk2zDfG/7/wjhGqd\nNF7A37v73J05e4hKyftWrKHW0QPZDVHNgFf4GUXjfkEiEPTIYcO4AYWqUT1M6qtUhonmJlPBWmrg\nh7zom9gpWYLWa2roRsl2xVl3lFS5HHUvSsOkSDqqaKvToZRCGzKQCr3JSAriDbnVJYeMyyaxtjRn\nNXFfGQfRmBNZFuQ+JYMC0ytBRM95PnoadqiRZJ13d/t8Em3PqO+sxHVWS/WFlqcEF6R4JKEUtx3o\nhWpm5Fd5AbWiGpI0U9BxWkISk3hB4s9xmgdm1vX6lAzkBLQC9UJbeLDhi8Aa03xMQxUCLges61qF\nlbhP5kC+tRwrIwkHQxja7nN8LcmsdSt88t17hJKXa79sP8vk9WF0e4eL69YVRUE4Rk95zuh2l+Nr\nSW5udh3SBNgu1Lk77zPX2x7jrH7e52NozW9GCMDOx0ax6ltnf7rOaMcyDWY1jWASiGn+gRuOlR2i\nJJD9CLwxuGStrIBnDZgk9uOsDzUzceo6izX7DQcjgzT8RUazr0Bv5YaZBKskwDWQ/+TT3sh42nzK\nuac9V2G65gl9+BOmRdrT1VXjOM3GDxU3gXOU30dvtJTnyo3Rx2xb0eutrWQOwrB3ZyTCI+ojt786\nsOd2iETfHnHOneqE+nr+I9q8zIzhXhiRYeCn+UfEdjLN/PEPwsz/jfIeNlLh/RHiTsA7UDqzjjcD\nRs7R64kS0JP9u7s4HLuUrb1GjHzH9SpYgo5GfP4AhfGScgwFAAA=\n", "_grid_options_multi_down": [], "_id": 471366992, "_js_helpers_builtin": "H4sIAB1JXVwC/+1VUW/bNhB+z6+4h6CWA0dxNqAPzlLMcZM2wDZvs9GXYVgZ6WxroUiBR6ZJDf/3\nHinLlmV5SYEC28P4IFHid98dj98dFygLNHTlMmkzBZewPAIeqbB4o00urEUzgJlTic20ipROsbvG\n+HF2Brm4RyBnMBhBRqC0BadSnGUK0w00m0Ewh1evwL/jByHdDpkfEi2kHIbCT/CW+aIa9GIPuWBk\nGs/RvtfOUNSCyCvEz5lyFlsxVGEmmGiV7mH4J1nQsxkxeA2dZjl+1grH4W/UhRN43eexa7mzk40d\no0/XdK2envI0uLH6djKeWJOpedSNyd1ROe/34LzfsPTZ5WxcXkLfJzjfTqmcNhPth0HrjPL+dslW\nh6i7IeOdfr+z7z2vIPlByCYUaoWsw/l4vOSIVnC8XKwGx8vcP2j1cYvdhre2UE7KcnnVOwrvWdDu\nrbIDSL+Py6+o04v7s063V0PcSC2amO8CJoAyZV9SBeswNk73RbuJy/v7asoQ5WHSROeFMOhFRjXK\nGZc0mp90IqRf6kGCUn5oFh1X8JDI5WX5EjARkNUGUxDE1ayPdsXpSTxdXdlb4oujnXrfgH+ARjRN\nOa73e3peO2ZASbjL8+aFPOf/oJb+bvYo+4xTfZPZWurmJkvHhZ9S3UHtdyyKLPamIy1drigwRI2D\nEc7qCWOGUj5PXqZXSFky3qa+SP7486LVexIwQ46Be8qwsuHO5XV8LZJFVCLg8k0jQXUHceGoQnrK\n27TWVVbd51xX26uc16kbmTg7OSnJTuD6sdCG75q5F5wAq2E0+QCO/B8xP33HrsAnt8L/yNoWOSzH\nd39jYlf1WNaQs/DGwDvVI3p4abIDM20uvWrQfVa8R5GGAhWswV6jSfs9vjPaFVxu1rjGuje/0ZpV\nSq32fr2yPrD8a6b46pzq4hnElbZW562gzWG0xqiVfJqg5IRi2u7DFYVBot+cDl1ln4ILEX8ROQ6g\nkz/95b/ihB46DZoFot2iwuceRDuZ/q4/XeGEN1b4gPiGZOG2hFUYnXBUI+4HI97hnUjuB+UxeoMw\nKVtkq1l5qFtDf29sgauLg4Veaov7jRgS6ysqhfM1Gr9+5B72DVUe+P7X+b+j80dJ317n/iaejt+O\nYQDJApP7/5rug+L2lM/GXwBatMMsQwwAAA==\n", "columns_fit": "size_to_fit", "compress_data": true, "css_rules_down": [], "export_mode": "disabled", "height": "350px", "js_helpers": "H4sIAB1JXVwC/wMAAAAAAAAAAAA=\n", "js_helpers_custom": "H4sIAB1JXVwC/wMAAAAAAAAAAAA=\n", "js_post_grid": [], "js_pre_grid": [], "js_pre_helpers": [], "layout": "IPY_MODEL_4d018d18f60447a98dd60e8c54e0818c", "menu": {"buttons": [], "inputs": [], "button_div_css": ".flex-button-div-471366992 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: flex-start;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n", "input_div_css": ".flex-input-div-471366992 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: baseline;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n", "menu_div_css": ".flex-menu-div-471366992 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: flex-start;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n"}, "quick_filter": false, "theme": "ag-theme-fresh", "user_params": {}}}, "4d018d18f60447a98dd60e8c54e0818c": {"model_name": "LayoutModel", "model_module": "@jupyter-widgets/base", "model_module_version": "1.1.0", "state": {}}}}
</script>
<div id="embed-grid-471366992">
  <!-- This script tag will be replaced by the views DOM tree -->
  <script type="application/vnd.jupyter.widget-view+json">
    {"version_major": 2, "version_minor": 0, "model_id": "814dc00c606e470aada2ce41c7e1c95e"}
  </script>
</div>
    '
        height="370"
        width="100%"
        frameborder="0"
      ></iframe>
  </div>
</template>

<script>
export default {
  name: 'example-paste-from-excel',
  data() {return {}}
}
</script>
