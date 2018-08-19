
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
  {"version_major": 2, "version_minor": 0, "state": {"0e8e7d12a15a468cbb8de1a9f35a6baa": {"model_name": "AgGridModel", "model_module": "ipyaggrid", "model_module_version": "~0.0.5-alpha.24", "state": {"_dom_classes": [], "_grid_data_down": "H4sIACQdeVsC/5WVT4+bMBDFv4qVUyvtwdj87Y2QzTZSU0UlbQ5VD5MwYlEMjgxsF1X73Wu2e4hx\nRdZHrOGn8fObNz//LE6gvkKNi09k4VFKRLu4IwupqrJqxrP7XskLjmc1nF+r0r6oxu+Lqk7jAUt8\nL3i5IwYqe8QnFALJFkR17E3m9/yaN5YqKbAzoLEfxlNofh4EqDPhjM4Bl311Ohsw5jNuwaDTDVYd\nzqF2Yqhl3z1e07inbzylfcMjCpLn+zlaus2MtrhPoylor39u5BxlLVVh9BNyavWzw75E2ZGA+rfe\n863URAY0nCIfQMBzhRpJndqL48i65aa+aJqzK3gSMzZlrXs1kM1m4/qOLNDKWb6FThu2mW1tJ5uu\ngpPBojS27JrWR2hbKKQixUW4GCMKImZPFOh5akpUpJ317EoWJZqqcbu5rC+AaAM6qxZzbvW21Yog\nyUAJ6T7pUZRY8XHfdno8yQFK2ZAP+eGj47zTwLJcJpVsQOeRDpCpWdK2gmviXg6yAxMZJBZy1bcd\nKuf8SDjzpqjPUjX/dHmnRzTFp9Y7wBOqNzHePZ9+FFs3230JPDqv0Qq6tm8MEg8jy2eexz2yQtE/\nI8mxgOZWHP2Q4tz+hhJNdsQD67p5mi5JkuAt5Fhnevg/lltuD+MYs1swXWew9Daw5HtQWOsUcRn5\nxPOtltYscItavegskbL5ZTnO5GBGGbc374rNh76VOYzFIbNd5Xueq6tYENL45ddfy5TVvaoIAAA=\n", "_grid_data_up": {}, "_grid_options_mono_down": "H4sIACQdeVsC/3WPQQ6CMBBFr0JmTTyAWw07kQU742IsAzS2lJRiNIS721KCRbSr9v03v+0ATIle\nNkcqO9hHlwFKTqKwW1CaV7yBOIKasCCdoiTHz56PcRTIEu+0VU+OrkWGPt26qiDxJbeasx9qNuHx\nagP/+vzVknv+AE0vb6QPE51AyYUh7aawSoMw8dzeB4ae5s9EvkSBX6ChwH+g6ClRWqKZ52oSLelu\n58RPYCfD6uPSMlcveYYapf8OU7K1J6NWvZ6Sa+hgtOsNWtwEYMYBAAA=\n", "_grid_options_multi_down": [], "_id": 735753203, "_js_helpers_builtin": "H4sIACQdeVsC/+1VUW/bNhB+z6+4h6CWA0dxNqAPzlLMcZM2wDZvs9GXYVgZ6WxroUiBR6ZJDf/3\nHinLlmV5SYEC28P4IFHid98dj98dFygLNHTlMmkzBZewPAIeqbB4o00urEUzgJlTic20ipROsbvG\n+HF2Brm4RyBnMBhBRqC0BadSnGUK0w00m0Ewh1evwL/jByHdDpkfEi2kHIbCT/CW+aIa9GIPuWBk\nGs/RvtfOUNSCyCvEz5lyFlsxVGEmmGiV7mH4J1nQsxkxeA2dZjl+1grH4W/UhRN43eexa7mzk40d\no0/XdK2envI0uLH6djKeWJOpedSNyd1ROe/34LzfsPTZ5WxcXkLfJzjfTqmcNhPth0HrjPL+dslW\nh6i7IeOdfr+z7z2vIPlByCYUaoWsw/l4vOSIVnC8XKwGx8vcP2j1cYvdhre2UE7KcnnVOwrvWdDu\nrbIDSL+Py6+o04v7s063V0PcSC2amO8CJoAyZV9SBeswNk73RbuJy/v7asoQ5WHSROeFMOhFRjXK\nGZc0mp90IqRf6kGCUn5oFh1X8JDI5WX5EjARkNUGUxDE1ayPdsXpSTxdXdlb4oujnXrfgH+ARjRN\nOa73e3peO2ZASbjL8+aFPOf/oJb+bvYo+4xTfZPZWurmJkvHhZ9S3UHtdyyKLPamIy1drigwRI2D\nEc7qCWOGUj5PXqZXSFky3qa+SP7486LVexIwQ46Be8qwsuHO5XV8LZJFVCLg8k0jQXUHceGoQnrK\n27TWVVbd51xX26uc16kbmTg7OSnJTuD6sdCG75q5F5wAq2E0+QCO/B8xP33HrsAnt8L/yNoWOSzH\nd39jYlf1WNaQs/DGwDvVI3p4abIDM20uvWrQfVa8R5GGAhWswV6jSfs9vjPaFVxu1rjGuje/0ZpV\nSq32fr2yPrD8a6b46pzq4hnElbZW562gzWG0xqiVfJqg5IRi2u7DFYVBot+cDl1ln4ILEX8ROQ6g\nkz/95b/ihB46DZoFot2iwuceRDuZ/q4/XeGEN1b4gPiGZOG2hFUYnXBUI+4HI97hnUjuB+UxeoMw\nKVtkq1l5qFtDf29sgauLg4Veaov7jRgS6ysqhfM1Gr9+5B72DVUe+P7X+b+j80dJ317n/iaejt+O\nYQDJApP7/5rug+L2lM/GXwBatMMsQwwAAA==\n", "columns_fit": "size_to_fit", "compress_data": true, "css_rules_down": [], "export_mode": "disabled", "height": "350px", "js_helpers": "H4sIACQdeVsC/wMAAAAAAAAAAAA=\n", "js_helpers_custom": "H4sIACQdeVsC/wMAAAAAAAAAAAA=\n", "js_post_grid": [], "js_pre_grid": [], "js_pre_helpers": [], "layout": "IPY_MODEL_04d362e55e5f460c9a8d901caf1948ae", "menu": {"buttons": [], "inputs": [{"name": "Quick Filter", "css": ".flex-child-quick-filter-735753203 {\norder: 0;\nalign-self: auto;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nwidth: 150px;\n}\n"}], "button_div_css": ".flex-button-div-735753203 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: flex-start;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n", "input_div_css": ".flex-input-div-735753203 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: baseline;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n", "menu_div_css": ".flex-menu-div-735753203 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: flex-start;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n"}, "theme": "ag-theme-fresh", "user_params": {}}}, "04d362e55e5f460c9a8d901caf1948ae": {"model_name": "LayoutModel", "model_module": "@jupyter-widgets/base", "model_module_version": "1.1.0", "state": {}}}}
</script>
<div id="embed-grid-735753203">
  <!-- This script tag will be replaced by the views DOM tree -->
  <script type="application/vnd.jupyter.widget-view+json">
    {"version_major": 2, "version_minor": 0, "model_id": "0e8e7d12a15a468cbb8de1a9f35a6baa"}
  </script>
</div>
    '
        height="400"
        width="100%"
        frameborder="0"
      ></iframe>
  </div>
</template>

<script>
export default {
  name: 'example-quick-filter',
  data() {return {}}
}
</script>
