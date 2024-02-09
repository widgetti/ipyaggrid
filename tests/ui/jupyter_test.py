import playwright.sync_api
from IPython.display import display



def test_widget_aggrid(ipywidgets_runner, page_session: playwright.sync_api.Page, assert_solara_snapshot):
    def kernel_code():
        import ipyaggrid
        cars = [
            {"carName": "Chevelle", "origin": "US", "make": "Chevrolet", "price": 30415},
            {"carName": "Skylark 320", "origin": "US", "make": "Buick", "price": 21042},
            {"carName": "PL411", "origin": "Asia", "make": "Datsun", "price": 27676},
        ]
        column_defs = [{"field": c} for c in cars[0]]

        grid_options = {
            "columnDefs": column_defs,
        }
        g = ipyaggrid.Grid(grid_data=cars, grid_options=grid_options)

        display(g)
    ipywidgets_runner(kernel_code)
    cell = page_session.locator(".ag-root-wrapper >> text=Chevrolet")
    cell.click()
    cell.wait_for()
    assert_solara_snapshot(page_session.locator(".ag-root-wrapper").screenshot())


def test_svg_icons(ipywidgets_runner, page_session: playwright.sync_api.Page, assert_solara_snapshot):
    def kernel_code():
        import ipywidgets
        from ipyaggrid import Grid

        display(Grid(grid_data=[{"a": 1}], grid_options={"columnDefs": [{"field": "a"}] }))
        w = ipywidgets.HTML(value='<div class="ag-theme-excel"><div class="ag-row-drag" style="width: 20px; height: 20px; border: 1px dashed green"></div></div>')
        display(w)
    ipywidgets_runner(kernel_code)
    assert_solara_snapshot(page_session.locator(".ag-row-drag").screenshot())
