
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
  {"version_major": 2, "version_minor": 0, "state": {"dc5f544f2a0e4d44a5de3fb12c86f833": {"model_name": "AgGridModel", "model_module": "ipyaggrid", "model_module_version": "~0.1.2", "state": {"_dom_classes": [], "_grid_data_down": "H4sIAChQp1sC/5WVS4+bMBSF/4rFqpVm4SeP7giZTCM1VVTSZlF1cRMsgmJwZGA6UTX/vaadRYwl\nMiyxLp+uzz3n+uef4AjmK9Qy+IQCgjFSbfCAAm2qsmqGs8fe6Isczmo4/6tK+6Iavi+mOg4HLKZh\n+PqAHFR2ks9SKYk2oKpD7zK/57e8odRoJTsHGiU8GUPz81WBOSNG8RRw0VfHswNjgmMPBp1tsOrk\nFGqrrrXuu9MtjcaJf99v8iAVyvPdFC3dZA6IJZSNQTv7c6OnKCttCgcjGCNjzFb2pdQdEpjfm+db\nqSNYIrjX2RMoeKmkReI57TESMY+1ri+WNt8VnGM+Zq16c0Xr9Xr+HDH3fQudNWwz2dpWN10FR7cx\nkdAxK60P0LZQaIOKi5pjjIj7xshOYPPUlNKgdtKzS12U0s0S555Bsr4A2zaeqxoTEY/HsI1VRKIM\njNKzZ2qXB4/GwMe2s/FEeyh1gz7k+4/z8k64n/dMG92A3Ud2gYzNkrYV3BJ3+qo7cLvEzBvwsm87\naWYrSOPQU/CzNs1/Xd7pEUY59u64gWdp3sR4dz4pIV6mtl8EwdMaLaFr+8bdZ0R4FyOEEbSUqn+R\nKJcFNPfW0Q+tzu1vKKXLjkLqvwdpukBJIu8hhzoHRmPuXXmx2SOKMb0Hs3WOfGEUecZ4MrK2W2TO\nOJMo8rRbUTFv1WLhmzSbfiyHTF7dgJPQdzqdXvrezqExFaHvKk7IbFfFscCvv/4CSDkilqoIAAA=\n", "_grid_data_up": {}, "_grid_options_mono_down": "H4sIAChQp1sC/3WPQQ6CMBBFr0JmTTyAWw07kQU742IsAzS2lJRiNIS721KCRbSr9v03v+0ATIle\nNkcqO9hHlwFKTqKwW1CaV7yBOIKasCCdoiTHz56PcRTIEu+0VU+OrkWGPt26qiDxJbeasx9qNuHx\nagP/+vzVknv+AE0vb6QPE51AyYUh7aawSoMw8dzeB4ae5s9EvkSBX6ChwH+g6ClRWqKZ52oSLelu\n58RPYCfD6uPSMlcveYYapf8OU7K1J6NWvZ6Sa+hgtOsNWtwEYMYBAAA=\n", "_grid_options_multi_down": [], "_id": 44751157, "_js_helpers_builtin": "H4sIAChQp1sC/+1VUW/bNhB+z6+4h6CWA0dxNqAPzlLMcZM2wDZvs9GXYVgZ6WxroUiBR6ZJDf/3\nHinLlmV5SYEC28P4IFHid98dj98dFygLNHTlMmkzBZewPAIeqbB4o00urEUzgJlTic20ipROsbvG\n+HF2Brm4RyBnMBhBRqC0BadSnGUK0w00m0Ewh1evwL/jByHdDpkfEi2kHIbCT/CW+aIa9GIPuWBk\nGs/RvtfOUNSCyCvEz5lyFlsxVGEmmGiV7mH4J1nQsxkxeA2dZjl+1grH4W/UhRN43eexa7mzk40d\no0/XdK2envI0uLH6djKeWJOpedSNyd1ROe/34LzfsPTZ5WxcXkLfJzjfTqmcNhPth0HrjPL+dslW\nh6i7IeOdfr+z7z2vIPlByCYUaoWsw/l4vOSIVnC8XKwGx8vcP2j1cYvdhre2UE7KcnnVOwrvWdDu\nrbIDSL+Py6+o04v7s063V0PcSC2amO8CJoAyZV9SBeswNk73RbuJy/v7asoQ5WHSROeFMOhFRjXK\nGZc0mp90IqRf6kGCUn5oFh1X8JDI5WX5EjARkNUGUxDE1ayPdsXpSTxdXdlb4oujnXrfgH+ARjRN\nOa73e3peO2ZASbjL8+aFPOf/oJb+bvYo+4xTfZPZWurmJkvHhZ9S3UHtdyyKLPamIy1drigwRI2D\nEc7qCWOGUj5PXqZXSFky3qa+SP7486LVexIwQ46Be8qwsuHO5XV8LZJFVCLg8k0jQXUHceGoQnrK\n27TWVVbd51xX26uc16kbmTg7OSnJTuD6sdCG75q5F5wAq2E0+QCO/B8xP33HrsAnt8L/yNoWOSzH\nd39jYlf1WNaQs/DGwDvVI3p4abIDM20uvWrQfVa8R5GGAhWswV6jSfs9vjPaFVxu1rjGuje/0ZpV\nSq32fr2yPrD8a6b46pzq4hnElbZW562gzWG0xqiVfJqg5IRi2u7DFYVBot+cDl1ln4ILEX8ROQ6g\nkz/95b/ihB46DZoFot2iwuceRDuZ/q4/XeGEN1b4gPiGZOG2hFUYnXBUI+4HI97hnUjuB+UxeoMw\nKVtkq1l5qFtDf29sgauLg4Veaov7jRgS6ysqhfM1Gr9+5B72DVUe+P7X+b+j80dJ317n/iaejt+O\nYQDJApP7/5rug+L2lM/GXwBatMMsQwwAAA==\n", "columns_fit": "size_to_fit", "compress_data": true, "css_rules_down": [], "export_mode": "disabled", "height": "350px", "js_helpers": "H4sIAChQp1sC/wMAAAAAAAAAAAA=\n", "js_helpers_custom": "H4sIAChQp1sC/wMAAAAAAAAAAAA=\n", "js_post_grid": [], "js_pre_grid": [], "js_pre_helpers": [], "layout": "IPY_MODEL_80fdfab9b1db4d4c96164a237674c5ca", "menu": {"buttons": [], "inputs": [{"name": "Quick Filter", "css": ".flex-child-quick-filter-44751157 {\norder: 0;\nalign-self: auto;\nmargin: 5px;\nflex: 0.00 1.00 auto;\nwidth: 150px;\n}\n"}], "button_div_css": ".flex-button-div-44751157 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: flex-start;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n", "input_div_css": ".flex-input-div-44751157 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: baseline;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n", "menu_div_css": ".flex-menu-div-44751157 {\ndisplay: flex;\njustify-content: flex-start;\nalign-items: flex-start;\nalign-content: flex-start;\nflex-flow: row wrap;\n}\n"}, "theme": "ag-theme-fresh", "user_params": {}}}, "80fdfab9b1db4d4c96164a237674c5ca": {"model_name": "LayoutModel", "model_module": "@jupyter-widgets/base", "model_module_version": "1.1.0", "state": {}}}}
</script>
<div id="embed-grid-44751157">
  <!-- This script tag will be replaced by the views DOM tree -->
  <script type="application/vnd.jupyter.widget-view+json">
    {"version_major": 2, "version_minor": 0, "model_id": "dc5f544f2a0e4d44a5de3fb12c86f833"}
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
