from .__meta__ import __version__

from .grid import Grid

from .util import Util

get_license = Util.get_license

def _jupyter_nbextension_paths():
    return [{
        # fixed syntax
        'section': 'notebook',
        # path relative to module directory - here: ipyaggrid
        'src': 'static',
        # directory in the `nbextension/` namespace
        'dest': 'ipyaggrid',
        # path in the `nbextension/` namespace
        'require': 'ipyaggrid/extension'
    }]
