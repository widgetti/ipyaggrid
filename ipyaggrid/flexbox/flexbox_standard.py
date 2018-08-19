# CSS flex

help_url = 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/'

# container

d_display = {
    'name': 'display',
    'type': 'category',
    'li_possible': ['flex',
                    'inline-flex'
                    ],
    'default': 'flex',
    'help': 'display: flex | inline-flex'
}

d_flex_direction = {
    'name': 'flex-direction',
    'type': 'category',
    'li_possible': ['row',
                    'row-reverse',
                    'column',
                    'column-reverse'
                    ],
    'default': 'row',
    'help': 'flex-direction: row | row-reverse | column | column-reverse'
}

d_flex_wrap = {
    'name': 'flex-wrap',
    'type': 'category',
    'li_possible': ['nowrap',
                    'wrap',
                    'wrap-reverse'
                    ],
    'default': 'wrap',
    'help': 'flex-wrap: nowrap | wrap | wrap-reverse'
}

d_flex_flow = {
    'name': 'flex-flow',
    'type': 'category',
    'override': ['flex-direction', 'flex-wrap'],
    'help': 'flex-flow: <‘flex-direction’> || <‘flex-wrap’>'
}

d_justify_content = {
    'name': 'justify-content',
    'type': 'category',
    'li_possible': ['flex-start',
                    'flex-end',
                    'center',
                    'space-between',
                    'space-around',
                    'space-evenly'
                    ],
    'default': 'flex-start',
    'help': 'justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly'
}


d_align_items = {
    'name': 'align-items',
    'type': 'category',
    'li_possible': ['flex-start',
                    'flex-end',
                    'center',
                    'baseline',
                    'stretch'
                    ],
    'default': 'flex-start',
    'help': 'align-items: flex-start | flex-end | center | baseline | stretch'
}

d_align_content = {
    'name': 'align-content',
    'type': 'category',
    'li_possible': ['flex-start',
                    'flex-end',
                    'center',
                    'space-between',
                    'space-around',
                    'stretch'
                    ],
    'default': 'flex-start',
    'help': 'align-content: flex-start | flex-end | center | space-between | space-around | stretch'
}


# item

d_order = {
    'name': 'order',
    'type': 'int',
    'default': 0,
    'help': 'order: <integer>'
}

d_flex_grow = {
    'name': 'flex-grow',
    'type': 'float',
    'min': 0,
    'default': 0,
    'help': 'flex-grow: <number>'
}

d_flex_shrink = {
    'name': 'flex-shrink',
    'type': 'float',
    'min': 0,
    'default': 1,
    'help': 'flex-shrink: <number>'
}

d_flex_basis = {
    'name': 'flex-basis',
    'type': 'length',
    'default': 'auto',
    'help': 'flex-basis: <length> | auto'
}

d_flex = {
    'name': 'flex',
    'type': 'category',
    'override': ['flex-grow', 'flex-shrink', 'flex-basis'],
    'default': '0 1 auto',
    'help': "flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
    'allow_none': True
}

d_align_self = {
    'name': 'align-self',
    'type': 'category',
    'li_possible': ['auto',
                    'flex-start',
                    'flex-end',
                    'center',
                    'baseline',
                    'stretch'
                    ],
    'default': 'auto',
    'help': 'align-self: auto | flex-start | flex-end | center | baseline | stretch'
}

# common

d_width = {
    'name': 'width',
    'type': 'length',
    'default': None,
    'allow_none': True
}

d_height = {
    'name': 'height',
    'type': 'length',
    'default': None,
    'allow_none': True
}

d_margin = {
    'name': 'margin',
    'type': 'length',
    'default': None,
    'allow_none': True
}


class FlexboxStandard:

    dic_struct = {}
    li_field = []
    dic_field = {}

    dic_struct['container'] = [d_width,
                               d_height,
                               d_display,
                               d_flex_direction,
                               d_flex_wrap,
                               d_flex_flow,
                               d_justify_content,
                               d_align_items,
                               d_align_content
                               ]

    dic_struct['item'] = [d_width,
                          d_height,
                          d_order,
                          d_flex_grow,
                          d_flex_shrink,
                          d_flex_basis,
                          d_align_self
                          ]

    for level in dic_struct:
        dic_field[level] = {e['name']: e for e in dic_struct[level]}
