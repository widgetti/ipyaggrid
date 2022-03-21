from .__meta__ import __version__

from .grid import Grid

from .util import Util

get_license = Util.get_license

def _jupyter_nbextension_paths():
    return [{
        # fixed syntax
        'section': 'notebook',
        # path relative to module directory - here: ipyaggrid
        'src': 'nbextension',
        # directory in the `nbextension/` namespace
        'dest': 'ipyaggrid',
        # path in the `nbextension/` namespace
        'require': 'ipyaggrid/extension'
    }]

def _jupyter_labextension_paths():
    """Called by Jupyter Lab Server to detect if it is a valid labextension and
    to install the widget
    Returns
    =======
    src: Source directory name to copy files from. Webpack outputs generated files
        into this directory and Jupyter Lab copies from this directory during
        widget installation
    dest: Destination directory name to install widget files to. Jupyter Lab copies
        from `src` directory into <jupyter path>/labextensions/<dest> directory
        during widget installation
    """
    return [{
        'src': 'labextension',
        'dest': 'ipyaggrid',
    }]