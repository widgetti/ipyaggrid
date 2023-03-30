import datetime as dt
import numpy as np
import pytest
from unittest.mock import Mock

from ipyaggrid.util import Util

@pytest.mark.parametrize("data,expected", [
    (42, '42'),
    ("Quick brown", '"Quick brown"'),
    (dt.time(12,0,0), '"12:00:00"'),
    ([1, 2, 3], '[1, 2, 3]'),
    (np.full(3, 3), '[3, 3, 3]'),
    (np.full((3, 3), 3), '[[3, 3, 3], [3, 3, 3], [3, 3, 3]]'),
    (np.full(1, dt.datetime(2023, 3, 28, 12, 0, 0)), '["2023-03-28T12:00:00"]'),
    (np.int32(1), '1')
])
def test_json_serialisation_without_data_compression(data, expected):
    widget_mock = Mock(compress_data=False)
    assert expected == Util.data_to_json(data, widget_mock)
