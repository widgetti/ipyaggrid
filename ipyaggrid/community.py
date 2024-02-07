from .grid import Grid as EnterpriseGrid

class Grid(EnterpriseGrid):
    def __init__(
        self,
        width='100%',
        height=0,
        center=False,
        theme='ag-theme-fresh',

        grid_data=[],
        grid_options={},
        grid_options_multi=[],
        columns_fit='size_to_fit',
        index=False,
        keep_multiindex=False,
        compress_data=True,

        quick_filter=False,
        export_csv=False,
        export_excel=False,
        show_toggle_delete=False,
        show_toggle_edit=False,
        sync_on_edit=False,
        sync_grid=True,
        paste_from_excel=False,
        export_mode='disabled',
        export_to_df=True,
        hide_grid=False,

        js_helpers_custom='',
        js_pre_helpers=[],
        js_pre_grid=[],
        js_post_grid=[],
        css_rules='',
        menu=None,
        user_params={}
    ):
        super().__init__(
            height=height,
            center=center,
            theme=theme,

            width=width,
            grid_data=grid_data,
            grid_options=grid_options,
            grid_options_multi=grid_options_multi,
            columns_fit=columns_fit,
            index=index,
            keep_multiindex=keep_multiindex,
            compress_data=compress_data,

            quick_filter=quick_filter,
            export_csv=export_csv,
            export_excel=export_excel,
            show_toggle_delete=show_toggle_delete,
            show_toggle_edit=show_toggle_edit,
            sync_on_edit=sync_on_edit,
            sync_grid=sync_grid,
            paste_from_excel=paste_from_excel,
            export_mode=export_mode,
            export_to_df=export_to_df,
            hide_grid=hide_grid,

            js_helpers_custom=js_helpers_custom,
            js_pre_helpers=js_pre_helpers,
            js_pre_grid=js_pre_grid,
            js_post_grid=js_post_grid,
            css_rules=css_rules,
            menu=menu,
            user_params=user_params,
            license='community',
        )
