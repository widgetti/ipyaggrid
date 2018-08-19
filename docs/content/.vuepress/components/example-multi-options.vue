
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
  {"version_major": 2, "version_minor": 0, "state": {"4bc96c8e18654e68964868de377cd680": {"model_name": "AgGridModel", "model_module": "ipyaggrid", "model_module_version": "~0.1.0", "state": {"_dom_classes": [], "_grid_data_down": "H4sIALa8eVsC/52VT2+bQBDFv8rKp1bKYf+BoTdsx6mlurKKWx+iHMZmRJAX1logjVXlu3dJc/Cy\nEQ49shp+zL5587j/MzmA+Q4lTr6QCaOUqHpyQybaFHlRdWe3rdEn7M5KOL5WJW1WdM8nUxy6Ax7J\nkL3cEAc1f8QnVArJGlSxb13mz/SS15UarbBxoJzFQR+aHs8KzJEIToeAs7Y4HC9hIgwk9WDQ2AaL\nBodQG3Uudds89u4rvdZ+4B4VSdPtEC1Zzx0QjYQn3Na+XOkhylKbzLkdEzLqYzbY5qgbElB5bZ5v\npe4VOeN95B0oeC7QIumo9mgsPPFX5cnSRrtCBGHk9bVszZmsVqvRc5RCerA5NNaw1WBrG101BRzc\nxmIZ91lJuYe6hkwbkp3UCGMIOWXvbBTYfapyNKQe9OxCZzk6OCGoZ9h5m4H9EB2tGg+o57a1VQTJ\nHIzS/zFTEXnd3daNXU+yg1xX5FO6+zxq3zml3NdPG12BzSMbIH2zJHUBl8StPusG3CULmewjF23d\noBmroIhC6qG+alP90+WjHomlnHpzgCc0b2J8dD85lb7ZNt8CRoc1WkBTt5WbGpGf2YwJRhao2mck\nKWZQXYujX1od69+Qo8sOQj8r0ySZkTjGa8iuzo2kaehNYLbevRrnGszWuY0x32t3BkubIqNWXnCv\npaXdtVFRG4Shn2jDP8tuJ889PwQeZMGHQ9/LHM7Ye66yVhvrKnspwV8e/gJMaxmiqggAAA==\n", "_grid_data_up": {}, "_grid_options_mono_down": "H4sIALa8eVsC/wMAAAAAAAAAAAA=\n", "_grid_options_multi_down": [["Sorting, color, filter", "H4sIALa8eVsC/3WQy07DMBBFf8XyJiCVKoJdkWCRqjtKBd0hFlNnklj4EfmBgCj/ju20IX2QVXTu\nnZPJdJRp4aVaYmXpgrx1tOIoyvBKteE1V3RGaINQolmDxMifB97PyKQs4QPPq0+RHhcZDOl5V5co\nTsqt4exCdXPADIUoBNi4Oq28Yo5rddWCAWmvSUcMOm8UGcD8E4RH8nB3m+c5eSRZst80vG4ysiBZ\ndk962r8HLSrYCXzVxnFVB7UzHke84sKhOaWFFi9o+U/crwJhYzJcdvvdYtyvo8rLHZoi0QSqg4pC\nvZ6E+0+EW1CHX+6fie0YTfolOJz00y+vtJHg9nMNihaNncfiXxAmp+rlaNmrx3yTTpncTMt4WKeP\nvAPFaLC0D88ve3wkUWICAAA=\n"], ["Selection, grouping, no-filter", "H4sIALa8eVsC/3WQzW6DMBCEXwX5HPUBek2UnppGTW5RDxsYiNU1tha7f4h3rw2UQNP65P1mdla7\nrcotB1NvUDbqPju1qtTgIn6VFV3pWq0ydQEVkB0ZJP505bpIxEtArMS+P4gNbiTdKpuFGXrFbdRj\noktjToN667UF+JfZic7/sO573L1EATWdGQcrXtdV1EriBhPfavaQG7y2/IxGfy2XO4CRe23rfp/A\nXjvuhw8XPH46pBO2qg7mDFn3tAflzxhF1W4mjuPjTsrjw//TcZykmb8gj5n/jThga8WQH/suYAdp\n7pLxKsTOefRmShmjJ31PQmZYJ7fGxcrbRe5AkRIa1cX3DYKjUAlKAgAA\n"]], "_id": 589282676, "_is_grid_options_multi": true, "_js_helpers_builtin": "H4sIALa8eVsC/+1VUW/bNhB+z6+4h6CWA0dxNqAPzlLMcZM2wDZvs9GXYVgZ6WxroUiBR6ZJDf/3\nHinLlmV5SYEC28P4IFHid98dj98dFygLNHTlMmkzBZewPAIeqbB4o00urEUzgJlTic20ipROsbvG\n+HF2Brm4RyBnMBhBRqC0BadSnGUK0w00m0Ewh1evwL/jByHdDpkfEi2kHIbCT/CW+aIa9GIPuWBk\nGs/RvtfOUNSCyCvEz5lyFlsxVGEmmGiV7mH4J1nQsxkxeA2dZjl+1grH4W/UhRN43eexa7mzk40d\no0/XdK2envI0uLH6djKeWJOpedSNyd1ROe/34LzfsPTZ5WxcXkLfJzjfTqmcNhPth0HrjPL+dslW\nh6i7IeOdfr+z7z2vIPlByCYUaoWsw/l4vOSIVnC8XKwGx8vcP2j1cYvdhre2UE7KcnnVOwrvWdDu\nrbIDSL+Py6+o04v7s063V0PcSC2amO8CJoAyZV9SBeswNk73RbuJy/v7asoQ5WHSROeFMOhFRjXK\nGZc0mp90IqRf6kGCUn5oFh1X8JDI5WX5EjARkNUGUxDE1ayPdsXpSTxdXdlb4oujnXrfgH+ARjRN\nOa73e3peO2ZASbjL8+aFPOf/oJb+bvYo+4xTfZPZWurmJkvHhZ9S3UHtdyyKLPamIy1drigwRI2D\nEc7qCWOGUj5PXqZXSFky3qa+SP7486LVexIwQ46Be8qwsuHO5XV8LZJFVCLg8k0jQXUHceGoQnrK\n27TWVVbd51xX26uc16kbmTg7OSnJTuD6sdCG75q5F5wAq2E0+QCO/B8xP33HrsAnt8L/yNoWOSzH\nd39jYlf1WNaQs/DGwDvVI3p4abIDM20uvWrQfVa8R5GGAhWswV6jSfs9vjPaFVxu1rjGuje/0ZpV\nSq32fr2yPrD8a6b46pzq4hnElbZW562gzWG0xqiVfJqg5IRi2u7DFYVBot+cDl1ln4ILEX8ROQ6g\nkz/95b/ihB46DZoFot2iwuceRDuZ/q4/XeGEN1b4gPiGZOG2hFUYnXBUI+4HI97hnUjuB+UxeoMw\nKVtkq1l5qFtDf29sgauLg4Veaov7jRgS6ysqhfM1Gr9+5B72DVUe+P7X+b+j80dJ317n/iaejt+O\nYQDJApP7/5rug+L2lM/GXwBatMMsQwwAAA==\n", "columns_fit": "size_to_fit", "compress_data": true, "css_rules_down": [".number-cell {text-align: left;}", ".price-high {color: red;}"], "export_mode": "disabled", "height": "350px", "js_helpers": "H4sIALa8eVsC/wMAAAAAAAAAAAA=\n", "js_helpers_custom": "H4sIALa8eVsC/wMAAAAAAAAAAAA=\n", "js_post_grid": [], "js_pre_grid": [], "js_pre_helpers": [], "layout": "IPY_MODEL_b888892446804f75bf5f8d97dacb58c6", "menu": {"buttons": [], "inputs": [{"name": "Dropdown Menu", "css": ".flex-child-dropdown-menu-589282676 {\norder: 0;\nalign-self: auto;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nwidth: 150px;\n}\n"}], "button_div_css": ".flex-button-div-589282676 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: flex-start;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n", "input_div_css": ".flex-input-div-589282676 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: baseline;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n", "menu_div_css": ".flex-menu-div-589282676 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: flex-start;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n"}, "quick_filter": false, "theme": "ag-theme-balham", "user_params": {}}}, "b888892446804f75bf5f8d97dacb58c6": {"model_name": "LayoutModel", "model_module": "@jupyter-widgets/base", "model_module_version": "1.0.0", "state": {}}}}
</script>
<div id="embed-grid-589282676">
  <!-- This script tag will be replaced by the views DOM tree -->
  <script type="application/vnd.jupyter.widget-view+json">
    {"version_major": 2, "version_minor": 0, "model_id": "4bc96c8e18654e68964868de377cd680"}
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
  name: 'example-multi-options',
  data() {return {}}
}
</script>
