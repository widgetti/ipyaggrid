# Purpose

## Why ?

The goal of this [ipywidget](https://ipywidgets.readthedocs.io/en/latest/) is to harness the power of the excellent Javascript library [ag-Grid](https://www.ag-grid.com/), self-proclaimed the _"best HTML5 grid in the world"_ :-) on their home page.

Grids, or spreadsheets, are ubiquitous in many organizations. At the same time Jupyter notebooks are growing as (one of) the best solution for scripting and interactive computing. In many contexts they tend to replace Excel.

So it is critically useful to visualize and interact with tabular data, directly from from Python, more specifically [pandas](https://pandas.pydata.org/), in a notebook.

## How ?

This library essentially is a custom Jupyter [ipywidget](https://ipywidgets.readthedocs.io/en/latest).

For more info see the [ipywigets official documentation](https://ipywidgets.readthedocs.io/en/latest/examples/Widget%20Custom.html) and maybe the article [Authoring Custom Jupyter Widgets](https://blog.jupyter.org/authoring-custom-jupyter-widgets-2884a462e724).

Like all ipywidgets **ipyaggrid** has 2 parts:

- The **Python** part: It validates the user input and prepares and passes it to the JavaScript part. It also allows the configuration of the type interactivity the user wants from the grid.
- The **Javascript** part: From the user data and configuration if builds the grid and sets up the interactivity required. After manipulation (e.g. sort, pivot, group, etc) it enables the user to synchronize the data back to the Python kernel.  

**ipyaggrid** is:
+ designed to enable easy access to basic ag-Grid features but allows unlimited customization through a full access to the ag-Grid API
+ as transparent as possible to give flexible and unhindered access to the underlying library
+ adds some convenience options and buttons to the most frequently used features

## Sponsors

Project ipyaggrid receives direct funding from the following sources:

[![MSD](/ipyaggrid/msd-logo.svg)](https://msd.com)
