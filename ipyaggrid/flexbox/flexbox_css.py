
from IPython.display import HTML, Markdown, display

from .flexbox_standard import FlexboxStandard

from copy import deepcopy as copy


class FlexboxCSS:
    """
    Manages CSS construction, validation, help
    """

    def __init__(self, dic_input, kind=None):
        """
        Create css from user dic input
        Check against css_standard and fill default values
        """

        msg = 'kind must be "container" or "item"'
        assert kind in ['container', 'item'], msg

        self.dic_input = dic_input
        self.kind = kind

        dic_css = {}
        for e in FlexboxStandard.dic_struct[kind]:
            if e.get('default') is not None:
                dic_css[e['name']] = e['default']

        for k, v in dic_input.items():
            if self.is_valid(k, v, kind):
                dic_css[k] = v

        # specific flex-flow
        if kind == 'container':
            dic_css['flex-flow'] = '{} {}'.format(dic_css['flex-direction'],
                                                  dic_css['flex-wrap'])
            dic_css.pop('flex-direction')
            dic_css.pop('flex-wrap')

        # specific flex
        if kind == 'item':
            dic_css['flex'] = '{:.2f} {:.2f} {}'.format(dic_css['flex-grow'],
                                                        dic_css['flex-shrink'],
                                                        dic_css['flex-basis'])
            dic_css.pop('flex-grow')
            dic_css.pop('flex-shrink')
            dic_css.pop('flex-basis')

        self.dic_css = dic_css
        self.build_css()

    def is_valid(self, k, v, kind):
        """
        Checks if value v is valid for field k at level level
        """
        if kind in FlexboxStandard.dic_field:
            dic = FlexboxStandard.dic_field[kind]
        else:
            return False

        if k not in dic:
            # gives transparent access to other CSS fields
            return True

        if 'override' in dic[k]:
            return False

        if 'li_possible' in dic[k]:
            if v in dic[k]['li_possible']:
                return True

        elif dic[k]['type'] in ['int', 'float']:
            val_min = dic[k]['min']
            if v > val_min:
                return True

        elif dic[k]['type'] == 'length':
            if self.is_length_size(v):
                return True

        else:
            return False

    def is_length_size(self, val):
        """
        Checks if string is a css length/size
        ie eg 100px 50% 1.6rem or auto
        """
        val = val.strip()
        for suffix in ['px', '%', 'rem']:
            if val.endswith(suffix):
                val = val.split(suffix)[0]
                if val.isdigit():
                    return True

        if val == 'auto':
            return True

        return False

    def build_css(self, uid='my-uuid', opt_dic={}):
        """
        Creates css string from css dic
        """
        dic_css = copy(self.dic_css)
        dic_css.update(opt_dic)

        div_container_start = '.flex-%s {\n' % (uid)
        div_item_start = '.flex-child-%s {\n' % (uid)
        div_end = '}\n'

        li_css_prop = ['%s: %s;\n' % (k, v) for k, v in dic_css.items()]
        css_prop = ''.join(li_css_prop)

        if self.kind == 'container':
            css = div_container_start + css_prop + div_end

        if self.kind == 'item':
            css = div_item_start + css_prop + div_end

        return css

    @classmethod
    def help(cls):
        """
        Display help info for first time user
        """
        markdown = """
### FlexboxCSS()
**FlexboxCSS** expects a dictionary as arg where property/value are from the CSS Flexbox described in [this guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).  
Missing values are set to the Flexbox standard default.  

```python
# dict of flexbox CSS for container (parent) and item (child)
dic_param = {
    'container': {
        'property1': value1,
        'property2': value2
    },
    'item': {
        'property1': value1,
        'property2': value2
    }
}
flex = FlexboxCSS(dic_param)
```
"""
        display(Markdown(markdown))
