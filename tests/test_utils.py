import datetime as dt
import pytest
from unittest.mock import Mock

from ipyaggrid.util import Util

@pytest.mark.parametrize("data,expected", [
    (42, '42'),
    ("Quick brown", '"Quick brown"'),
    (dt.time(12,0,0), '"12:00:00"')
])
def test_json_serialisation_without_data_compression(data, expected):
    widget_mock = Mock(compress_data=False)
    assert expected == Util.data_to_json(data, widget_mock)
