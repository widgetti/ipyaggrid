# Documentation

This section explains how to update and build the documentation.  
All docs source files are located in the repo [docs](https://gitlab.com/DGothrek/ipyaggrid/tree/master/docs) folder.

## CI-CD

The documentation is a static web site powered by [vuepress](https://vuepress.vuejs.org/).  
It is automatically built and deployed each time a new commit is pushed to master.  

## Notebooks

Beyond the markdown files located in the [content](https://gitlab.com/DGothrek/ipyaggrid/tree/master/docs/content) folder, the notebooks that build the code snippets and embedded live grids are in the [notebooks](https://gitlab.com/DGothrek/ipyaggrid/tree/master/docs/notebooks) folder.  

Some of these notebooks are available via a [mybinder link](https://mybinder.org/v2/gl/DGothrek%2Fipyaggrid/binder-demo).

Here is an overview of their roles:
+ [demo-build-dataframe-output-html.ipynb](https://gitlab.com/DGothrek/ipyaggrid/blob/master/docs/notebooks/demo-build-dataframe-output-html.ipynb)  
    + Create regular sample dataframes HTML  
    + Shown in the [_User Guide/Create/Parameters/Multi Index_](../guide/create.html#export-to-python) section


+ [demo-build-multiindex-dataframe-html.ipynb](https://gitlab.com/DGothrek/ipyaggrid/blob/master/docs/notebooks/demo-build-multiindex-dataframe-html.ipynb)  
    + Create multi-index sample dataframes HTML
    + Shown in the [_User Guide/Create/Parameters/Multi Index_](../guide/create.html#multi-index) section

+ [load-ipywidget-css.ipynb](https://gitlab.com/DGothrek/ipyaggrid/blob/master/docs/notebooks/load-ipywidget-css.ipynb)  
    + Load ipywidgets CSS - to be used in custom _Excel_ style
    + Not present in the docs

+ [doc-builder.ipynb](https://gitlab.com/DGothrek/ipyaggrid/blob/master/docs/notebooks/doc-builder.ipynb):
    + Creates the documentation code snippets and live demo grids, in fact vue components encapsulating the demo grids in iframes
    + Collection of live examples available for regular use
    + Link from the [_User Guide/Create_](../guide/create.html#create) section in TIP at top of page

+ [demo-ipyaggrid-python-functions.ipynb](https://gitlab.com/DGothrek/ipyaggrid/blob/master/docs/notebooks/demo-ipyaggrid-python-functions.ipynb)  
    + Collection of live examples focused on the manipulation of the grid from Python 
    + Link from the [_User Guide/Live Demo/MyBinder_](../guide/create.html#mybinder) section

+ [demo-ipyaggrid-export-data.ipynb](https://gitlab.com/DGothrek/ipyaggrid/blob/master/docs/notebooks/demo-ipyaggrid-export-data.ipynb)  
    + Collection of live examples focused on the exporting of data from JavaScript to Python
    + Link from the [_User Guide/Create/Parameters/Export to Python_](../guide/create.html#export-to-python) section

+ [demo-ipyaggrid-customize.ipynb](https://gitlab.com/DGothrek/ipyaggrid/blob/master/docs/notebooks/demo-ipyaggrid-customize.ipynb)  
    +Collection of live examples focused on advanced customization of the **ag-Grid** options using their API and the various JS injections points made available in **ipyaggrid**
    + Link from the [_User Guide/Customize/Live Demo_](../guide/customize.html#live-demo) section

