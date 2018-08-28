
import os
import re
import collections
import base64
import gzip

import datetime as dt
import pandas as pd
import simplejson as json

from .flexbox import FlexboxCSS


class Util:

    @staticmethod
    def data_to_json(value, widget):
        dump = json.dumps(value, default=Util.json_serial, ignore_nan=True)
        if (widget.compress_data):
            res = (base64.encodebytes(gzip.compress((dump).encode('utf-8'), compresslevel=9))).decode('utf-8')
            return res
        else:
            return dump

    @staticmethod
    def data_from_json(value, widget):
        return json.loads(gzip.decompress(value))

    @staticmethod
    def options_to_json(value, widget):
        res = (base64.encodebytes(gzip.compress(value.encode('utf-8'), compresslevel=9))).decode('utf-8')
        return res

    @staticmethod
    def multi_options_to_json(value, widget):
        res = []
        for opt in value:
            res.append([opt[0], (base64.encodebytes(gzip.compress(
                opt[1].encode('utf-8'), compresslevel=9))).decode('utf-8')])
        return res

    @staticmethod
    def json_serial(obj):
        """
        """
        if isinstance(obj, (dt.datetime, dt.date, pd.Timestamp)):
            return obj.isoformat()

        return obj

    @staticmethod
    def strip_comments(code):
        lines = code.split('\n')
        lines = [e.strip() for e in lines]
        lines = [e for e in lines if not e.startswith('//')]
        code = '\n'.join(lines)
        return code

    @staticmethod
    def sanitize_str(string):
        string2 = Util.strip_comments(string)
        string2 = string2.replace('\n', '')
        string2 = string2.replace('\t', ' ')
        string2 = string2.replace('\"', '\'')
        return string2

    @staticmethod
    def sanitize_struct(e):
        if isinstance(e, (list, tuple)):
            return [Util.sanitize_struct(sub_e) for sub_e in e]
        elif isinstance(e, dict):
            return {k: Util.sanitize_struct(v) for k, v in e.items()}
        elif isinstance(e, str):
            return Util.sanitize_str(e)
        else:
            return e

    @staticmethod
    def is_df(data):
        if isinstance(data, pd.core.frame.DataFrame):
            return True
        return False

    @staticmethod
    def is_multiindex_row_df(df):
        if Util.is_df(df):
            if isinstance(df.index, pd.core.indexes.multi.MultiIndex):
                return True
        return False

    @staticmethod
    def is_multiindex_col_df(df):
        if isinstance(df, pd.core.frame.DataFrame):
            if isinstance(df.columns, pd.core.indexes.multi.MultiIndex):
                return True
        return False

    @staticmethod
    def is_multiindex_df(df):
        if Util.is_multiindex_row_df(df) or Util.is_multiindex_col_df(df):
            return True
        return False

    @staticmethod
    def build_colDefs_for_si_cols(df, verbose=False):
        colDefs = []
        for c in df.columns:
            dic = {}
            col = df[c]
            field = col.name
            header_name = field.title()
            if col.dtype.kind in 'O':
                # string
                dic['field'] = field
                dic['type'] = 'textColumn'
                dic['headerName'] = header_name
            if col.dtype.kind in 'ifc':
                # number
                dic['field'] = field
                dic['type'] = 'numberColumn'
                dic['headerName'] = header_name
            if col.dtype.kind in 'M':
                # date
                dic['field'] = field
                dic['type'] = 'dateColumn'
                dic['headerName'] = header_name
            colDefs.append(dic)
        return colDefs

    @staticmethod
    def build_colDefs_for_mi_cols(df):
        """
        create agGrid columnDefs dict for column grouping
        from multiindex dataframe columns
        """
        # utility
        def get_idx(s, x):
            li_headerName = [e['colName'] for e in s]
            if x not in li_headerName:
                return -1
            else:
                return li_headerName.index(x)

        mindexcol = df.columns
        li_idx_col = mindexcol.tolist()
        s = []
        for levels in li_idx_col:
            col = df.loc[:, levels]
            L = len(levels)
            s2 = s
            flat_field = None
            for k, e in enumerate(levels):
                if flat_field:
                    flat_field = flat_field + '-' + e
                else:
                    flat_field = e
                if k < L - 1:
                    i = get_idx(s2, e)
                    if i < 0:
                        new_e = {'colName': e,
                                 'headerName': e.title(),
                                 'children': []}
                        s2.append(new_e)
                        i = len(s2) - 1
                    s2 = s2[i]['children']
                else:
                    flat_field = flat_field.replace('.', '_')
                    new_e = {'field': flat_field,
                             'headerName': e.title()}
                    if col.dtype.kind in 'O':
                        # string
                        new_e['type'] = 'textColumn'
                    if col.dtype.kind in 'ifc':
                        # number
                        new_e['type'] = 'numberColumn'
                    if col.dtype.kind in 'M':
                        # date
                        new_e['type'] = 'dateColumn'
                    s2.append(new_e)
        return s

    @staticmethod
    def build_colDefs_for_mi_rows(df, keep_multiindex):
        """
        create agGrid columnDefs dict for column grouping
        from multiindex dataframe columns
        """
        mindexrow = df.index
        s = []
        for e in list(mindexrow.names):
            new_e = {'field': e,
                     'headerName': e.title(),
                     'rowGroup': True}
            if not keep_multiindex:
                new_e['hide'] = True
            s.append(new_e)
        return s

    @staticmethod
    def flatten_mi_col_df(dfmi):
        """
        create flattend dataframe
        multi index col ('a', 'b', 'c') turned to 'a-b-c'
        """
        df = dfmi.copy()
        cols = ['-'.join(col).strip() for col in df.columns.values]
        df.columns = cols
        df.columns.name = 'UniqueCol'
        return df

    @staticmethod
    def flatten_mi_row_df(dfmi):
        """
        create flattend dataframe
        multi index row added as regular column
        """
        df = dfmi.reset_index()
        return df

    @staticmethod
    def prepare_multiindex_df(dfmi,
                              options,
                              index=False,
                              keep_multiindex=False,
                              verbose=False):
        """
        Prepare multiindex dataframe (data) and options
        to display it with corresponding row grouping and
        column grouping
        To do that the dataframe is modified
        + multi index columns are flattened
        + multi index rows are made regular columns
        + columnDef in options are replaced with valid config
          (existing columnDefs if any is replaced)
        """

        df_data = dfmi

        if index:
            df_data = Util.add_index_as_col(df_data,
                                            verbose=verbose)

        if Util.is_multiindex_col_df(df_data):
            columnDefs_col = Util.build_colDefs_for_mi_cols(df_data)
            df_data = Util.flatten_mi_col_df(df_data)
        else:
            columnDefs_col = Util.build_colDefs_for_si_cols(df_data)

        if Util.is_multiindex_row_df(df_data):
            columnDefs_row = Util.build_colDefs_for_mi_rows(df_data,
                                                            keep_multiindex)
            df_data = Util.flatten_mi_row_df(df_data)
        else:
            columnDefs_row = []
            if index:
                df_data = Util.add_index_as_col(df_data,
                                                verbose=verbose)

        new_columnDefs = columnDefs_row + columnDefs_col

        options['columnDefs'] = new_columnDefs
        options['enableRowGroup'] = True

        return df_data, options

    @staticmethod
    def prepare_singleindex_df(data,
                               options,
                               index=False,
                               verbose=False):
        """
        Prepare single index dataframe (data) and options
        To do that the dataframe is modified
        + dots are replaced by underscore in column names
        + index is added in columns if requested
        + types are inferred from column types
        """

        data = Util.correct_df_col_name(data,
                                        verbose=verbose)
        if index:
            data = Util.add_index_as_col(data,
                                         verbose=verbose)

        if 'columnDefs' in options:
            options = Util.update_columnDefs(data,
                                             options,
                                             verbose=verbose)
        else:
            options = Util.implicit_columnDefs(data,
                                               options,
                                               verbose=verbose)

        return data, options

    @staticmethod
    def correct_df_col_name(data, verbose=False):
        new_col = [e.replace('.', '_') for e in data.columns]
        new_col_diff = [data.columns[i] != new_col[i]
                        for i in range(len(data.columns))]
        if sum(new_col_diff) > 0:
            if verbose:
                print('In dataframe column names "." are replaced by "_".', end=' ')
                print('Make sure columDefs match.')
            data.columns = new_col

        return data

    @staticmethod
    def add_index_as_col(data, verbose=False):
        data = data.reset_index()
        return data

    @staticmethod
    def update_columnDefs(df, grid_options, verbose=False):
        colDefs = grid_options.get('columnDefs', [])
        for colDef in colDefs:
            field = colDef.get('field')
            if field:
                if field in df.columns:
                    dic = colDef
                    col = df[field]
                    if col.dtype.kind in 'O':
                        # string
                        dic['type'] = 'textColumn'
                    if col.dtype.kind in 'ifc':
                        # number
                        dic['type'] = 'numberColumn'
                    if col.dtype.kind in 'M':
                        # date
                        dic['type'] = 'dateColumn'
        grid_options['columnDefs'] = colDefs
        return grid_options

    @staticmethod
    def implicit_columnDefs(df, grid_options, verbose=False):
        colDefs = Util.build_colDefs_for_si_cols(df, verbose=verbose)
        grid_options['columnDefs'] = colDefs
        return grid_options

    @staticmethod
    def update_columnTypes(grid_options, verbose=False):
        columnTypes = grid_options.get('columnTypes', {})

        numberColumn = {
            'filter': 'agNumberColumnFilter',
        }
        if not 'numberColumn' in columnTypes:
            columnTypes['numberColumn'] = numberColumn

        textColumn = {
            'filter': 'agTextColumnFilter'
        }
        if not 'textColumn' in columnTypes:
            columnTypes['textColumn'] = textColumn

        dateColumn = {
            'valueFormatter': 'helpers.dateFormatter',
            'filter': 'agDateColumnFilter',
            'filterParams': {
                'comparator': 'helpers.compareDates'
            }
        }
        if not 'dateColumn' in columnTypes:
            columnTypes['dateColumn'] = dateColumn

        grid_options['columnTypes'] = columnTypes
        return grid_options

    @staticmethod
    def build_css_rules(css_rules):
        css_rules = re.findall(r'[^\{]+\{[^\}]*\}',
                               css_rules,
                               re.MULTILINE)
        css_rules = [Util.sanitize_str(e) for e in css_rules]
        return css_rules

    @staticmethod
    def get_license(filename='.ag_grid_license'):
        path = os.path.join(os.path.expanduser('~'), filename)
        with open(path, 'r') as f:
            license = f.read()
        return license

    @staticmethod
    def encode_b64(string):
        return base64.b64encode(bytes(string, 'utf-8')).decode('utf-8')

    @staticmethod
    def build_data(data):
        if data is None:
            return {}

        if isinstance(data, pd.core.frame.DataFrame):
            data = data.to_dict(orient='records')

        return data

    @staticmethod
    def build_options(options, is_multi):
        if options is None:
            return {}

        options = Util.sanitize_struct(options)
        if not is_multi:
            options_json = json.dumps(options,
                                      default=Util.json_serial,
                                      ignore_nan=True)
            return options_json
        else:
            options = options['data']
            options_json = []
            for option in options:
                option[1] = json.dumps(option[1],
                                       default=Util.json_serial,
                                       ignore_nan=True)
            return options

    @staticmethod
    def load_file(folder, filename):
        """
        """
        here = os.path.dirname(__file__)
        path = os.path.join(here, folder, filename)
        with open(path, 'r') as f:
            content = f.read()
        return content

    @staticmethod
    def setup_menu(grid, menu_in, menu, options):
        """
        Builds a complete menu setup out of gridOptions and menu
        """
        def add_button(menu_a, name, action):
            """
            Manages append regular buttons in the menu['buttons'] list.
            """
            for i in range(len(menu_a['buttons'])):
                button = menu_a['buttons'][i]
                if button['name'] == name:
                    button['action'] = action
                    if 'hide' in button and button['hide']:
                        menu_a['buttons'].pop(i)
                    return
            menu_a['buttons'].append({'name': name, 'action': action})

        # Add csv export
        if grid.export_csv:
            add_button(
                menu_in, 'Export to CSV',
                'console.log("exporting to CSV"); helpers.exportToCsv(gridOptions);')

        # Add excel export
        if grid.export_excel:
            add_button(
                menu_in, 'Export to Excel',
                'console.log("exporting to Excel"); helpers.exportToExcel(gridOptions);')

        # Add buttons for export
        if grid.export_mode == 'buttons':
            # Add export data from selected range selection
            add_button(
                menu_in, 'Export Grid',
                'exportFunc.exportGrid(gridOptions, view, parseInt(inputAggregationLevel.value, 10))')

            if 'enableRangeSelection' in options and options[
                    'enableRangeSelection']:
                # Add export data from selected range selection
                add_button(menu_in, 'Export Range Data',
                           'exportFunc.exportRangeData(gridOptions, view)')

                # Add export columns from selected range selection
                add_button(menu_in, 'Export Columns',
                           'exportFunc.exportColumns(gridOptions, view)')

                # Add export rows from selected range selection
                add_button(menu_in, 'Export Rows',
                           'exportFunc.exportRowsOfRange(gridOptions, view)')

            if 'rowSelection' in options:
                # Add export rows from selected rows
                add_button(menu_in, 'Export Rows',
                           'exportFunc.exportRows(gridOptions, view)')

        # Manage menu CSS

        # Build button CSS
        menu_in['button_default_css'] = menu_in.get(
            'button_default_css', {'font-size': '12px'})
        menu_in['button_default_flex_css'] = FlexboxCSS(menu_in.get(
            'button_default_flex_css', {'width': '150px', 'margin': '5px'}), kind='item')

        # Manage buttons individual actions and CSS
        for button in menu_in['buttons']:
            if not (button.get('hide', False)):
                options = {}
                if 'custom_css' in button:
                    options = button['custom_css']
                else:
                    options = menu_in.get(
                        'button_default_css', {})
                if (button['name'] == 'Export Grid'):
                    name = button['name'].lower().replace(
                        ' ', '-')+'-'+str(grid._id)
                    if 'flex_css' in button:
                        button['container_css'] = FlexboxCSS(
                            button['flex_css'], kind='item').build_css('container-'+name, opt_dic={})
                        button['css'] = FlexboxCSS(
                            {}, kind='item').build_css(name, opt_dic=options)
                    else:
                        button['container_css'] = menu_in['button_default_flex_css'].build_css(
                            'container-'+name, opt_dic={})
                        button['css'] = FlexboxCSS(
                            {}, kind='item').build_css(name, opt_dic=options)
                else:
                    name = button['name'].lower().replace(
                        ' ', '-')+'-'+str(grid._id)
                    if 'flex_css' in button:
                        button['css'] = FlexboxCSS(
                            button['flex_css'], kind='item').build_css(name, opt_dic=options)
                    else:
                        button['css'] = menu_in['button_default_flex_css'].build_css(
                            name, opt_dic=options)
                menu['buttons'].append(button)

        # Managing inputs custom CSS

        def add_input(menu_a, name):
            """
            Manages append regular buttons in the menu['buttons'] list.
            """
            for i in range(len(menu_a['inputs'])):
                elem = menu_a['inputs'][i]
                if elem['name'] == name:
                    if 'hide' in elem and elem['hide']:
                        # Removes the element of inputs if hide == True
                        menu_a.pop(i)
                    return
            menu_a['inputs'].append({'name': name})

        # Add inputs
        if grid.quick_filter:
            add_input(menu_in, 'Quick Filter')
        if grid.is_multi:
            add_input(menu_in,'Dropdown Menu')
        if grid.show_toggle_edit:
            add_input(menu_in, 'Toggle Edit')
        if grid.show_toggle_delete:
            add_input(menu_in, 'Toggle Delete')

            # Build button CSS
        menu_in['input_default_flex_css'] = FlexboxCSS(menu_in.get(
            'input_default_flex_css', {'margin': '5px'}), kind='item')

        # Manage buttons individual actions and CSS
        for elem in menu_in['inputs']:
            options = {}
            if elem['name']=='Quick Filter' or elem['name']=='Dropdown Menu':
                options['width'] = '150px'
            name = elem['name'].lower().replace(
                ' ', '-')+'-'+str(grid._id)
            if 'flex_css' in elem:
                options.update(elem['flex_css'])
                elem['css'] = FlexboxCSS(
                    options, kind='item').build_css(name)
            else:
                elem['css'] = menu_in['input_default_flex_css'].build_css(
                    name, opt_dic=options)
            menu['inputs'].append(elem)

            # Managing button-div CSS
        if not ('button_div_css' in menu_in):
            menu_in['button_div_css'] = FlexboxCSS({}, kind='container')
        else:
            menu_in['button_div_css'] = FlexboxCSS(
                menu_in['button_div_css'], kind='container')

        menu['button_div_css'] = menu_in['button_div_css'].build_css(
            'button-div-' + str(grid._id))

        if not ('input_div_css' in menu_in):
            menu_in['input_div_css'] = FlexboxCSS(
                {'align-items': 'baseline'}, kind='container')
        else:
            menu_in['input_div_css'] = FlexboxCSS(
                menu_in['input_div_css'], kind='container')

        # Managing input-div CSS
        menu['input_div_css'] = menu_in['input_div_css'].build_css(
            'input-div-'+str(grid._id))

        if not ('menu_div_css' in menu_in):
            menu_in['menu_div_css'] = FlexboxCSS({}, kind='container')
        else:
            menu_in['menu_div_css'] = FlexboxCSS(
                menu_in['menu_div_css'], kind='container')

        # Managing menu-div CSS
        menu['menu_div_css'] = menu_in['menu_div_css'].build_css(
            'menu-div-'+str(grid._id))

