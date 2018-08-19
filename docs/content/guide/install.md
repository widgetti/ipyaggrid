# Install

## Classic Notebook

From terminal:

```bash
$ pip install ipyaggrid

# if notebook<5.3 - but why would you not upgrade ??
$ jupyter nbextension enable --py --sys-prefix ipyaggrid
```

## JupyterLab

From terminal:

```bash
$ pip install ipyaggrid
$ jupyter labextension install ipyaggrid

# if not already installed
$ jupyter labextension install @jupyter-widgets/jupyterlab-manager
```

## Check

If you want to check your install see the [Dev Install - Check Extensions](../dev/dev_install.html#check-extensions) section.

## Uninstall

+ Classic Notebook

```bash
# if notebook<5.3
$ jupyter nbextension uninstall --py --sys-prefix ipyaggrid

$ pip uninstall ipyaggrid
```


+ JupyterLab:

```bash
$ jupyter labextension uninstall ipyaggrid
$ pip uninstall ipyaggrid
```
