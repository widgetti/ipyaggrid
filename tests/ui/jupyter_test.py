import time

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

    watermark_detected = False

    def log(msg):
        if "All AG Grid Enterprise features are unlocked" in msg.text:
            nonlocal watermark_detected
            watermark_detected = True

    page_session.on("console", log)

    ipywidgets_runner(kernel_code)
    cell = page_session.locator(".ag-root-wrapper >> text=Chevrolet")
    cell.click()
    cell.wait_for()
    assert_solara_snapshot(page_session.locator(".ag-root-wrapper").screenshot())
    assert watermark_detected


def test_svg_icons(ipywidgets_runner, page_session: playwright.sync_api.Page, assert_solara_snapshot):
    def kernel_code():
        import ipywidgets
        from ipyaggrid import Grid

        display(Grid(grid_data=[{"a": 1}], grid_options={"columnDefs": [{"field": "a"}] }))
        w = ipywidgets.HTML(value='<div class="ag-theme-excel"><div class="ag-row-drag" style="width: 20px; height: 20px; border: 1px dashed green"></div></div>')
        display(w)
    ipywidgets_runner(kernel_code)

    time.sleep(1)

    assert_solara_snapshot(page_session.locator(".ag-row-drag").screenshot())


def test_widget_aggrid_enterprise(ipywidgets_runner, page_session: playwright.sync_api.Page, assert_solara_snapshot):
    def kernel_code():
        import ipyaggrid
        cars = [
            {"carName": "Chevelle"},
        ]
        column_defs = [{"field": c} for c in cars[0]]

        grid_options = {
            "columnDefs": column_defs,
        }
        g = ipyaggrid.Grid(grid_data=cars, grid_options=grid_options)

        display(g)

    watermark_detected = False

    def log(msg):
        if "All AG Grid Enterprise features are unlocked" in msg.text:
            nonlocal watermark_detected
            watermark_detected = True

    page_session.on("console", log)

    ipywidgets_runner(kernel_code)
    header = page_session.locator(".ag-header-cell-comp-wrapper")
    header.hover()
    # If the menu icon appears on hover, the enterprise version is being used
    assert page_session.locator(".ag-header-active .ag-icon-menu").count() == 1
    page_session.locator(".ag-header-active .ag-icon-menu").click()
    assert page_session.locator(".ag-menu").is_visible()

    assert watermark_detected

def test_widget_aggrid_community(ipywidgets_runner, page_session: playwright.sync_api.Page, assert_solara_snapshot):
    def kernel_code():
        from ipyaggrid.community import Grid
        cars = [
            {"carName": "Chevelle"},
        ]
        column_defs = [{"field": c} for c in cars[0]]

        grid_options = {
            "columnDefs": column_defs,
        }
        g = Grid(grid_data=cars, grid_options=grid_options)

        display(g)

    watermark_detected = False

    def log(msg):
        if "All AG Grid Enterprise features are unlocked" in msg.text:
            nonlocal watermark_detected
            watermark_detected = True

    page_session.on("console", log)

    ipywidgets_runner(kernel_code)
    header = page_session.locator(".ag-header-cell-comp-wrapper")
    header.hover()
    # If the menu icon doesn't appear on hover, the community version is being used
    assert page_session.locator(".ag-header-active .ag-icon-menu").count() == 0

    assert not watermark_detected
