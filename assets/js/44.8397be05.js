(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{482:function(t,a,r){"use strict";r.r(a);var s=r(1),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("This page is a brief introduction to "),a("a",{attrs:{href:"https://www.ag-grid.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ag-Grid"),a("OutboundLink")],1),t._v("."),a("br"),t._v("\nSee the "),a("a",{attrs:{href:"https://www.ag-grid.com/documentation-main/documentation.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("official documentation"),a("OutboundLink")],1),t._v("\nfor exhaustive information.")]),t._v(" "),t._m(1),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.ag-grid.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ag-Grid"),a("OutboundLink")],1),t._v(" is a powerful JavaScript library built\naround performance, elaborate features, and a well designed user-friendly\nyet powerful API. It can handle up to hundreds of thousands of lines\nwithout significant performance degradation.")]),t._v(" "),a("p",[t._v("Checkout their "),a("a",{attrs:{href:"https://www.ag-grid.com/example.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo page"),a("OutboundLink")],1),t._v(" and experiment.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("Here is the example of a very simple grid.")]),t._v(" "),a("p",[t._v("Code:")]),t._v(" "),t._m(7),a("demo1"),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("There are many, many features. Check out the\n"),a("a",{attrs:{href:"https://www.ag-grid.com/features-overview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation features page"),a("OutboundLink")],1),t._v("."),a("br"),t._v("\nBelow a selection of those we find interesting are demonstrated.")]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("You can update groups in the "),a("code",[t._v("Columns")]),t._v(" panel. For more info see the\n"),a("a",{attrs:{href:"https://www.ag-grid.com/javascript-grid-pivoting/",target:"_blank",rel:"noopener noreferrer"}},[t._v("grid pivoting doc page"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("demo2"),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("Cells can be heavily customized. For more info see the "),a("a",{attrs:{href:"https://www.ag-grid.com/javascript-grid-cell-rendering/",target:"_blank",rel:"noopener noreferrer"}},[t._v("cell rendering"),a("OutboundLink")],1),t._v(" and\n"),a("a",{attrs:{href:"https://www.ag-grid.com/javascript-grid-grouping/#full-width-groups-rendering",target:"_blank",rel:"noopener noreferrer"}},[t._v("full width row groups rendering"),a("OutboundLink")],1),t._v(" doc pages.")]),t._v(" "),a("demo3"),t._v(" "),a("p",[t._v("To see how to build it in "),a("strong",[t._v("ipyaggrid")]),t._v(":"),a("br"),t._v(" "),a("a",{attrs:{href:"https://mybinder.org/v2/gl/DGothrek%2Fipyaggrid/binder-demo?filepath=doc-builder.ipynb",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://mybinder.org/badge.svg",alt:"Binder"}}),a("OutboundLink")],1)]),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("To see the status bar in action, select a part of the grid (via "),a("code",[t._v("Ctrl+Click")]),t._v(", "),a("code",[t._v("Cmd+Click")]),t._v(" or "),a("code",[t._v("Drag & Drop")]),t._v(") and read the result at the bottom right.\nFor more info see the "),a("a",{attrs:{href:"https://www.ag-grid.com/javascript-grid-status-bar/",target:"_blank",rel:"noopener noreferrer"}},[t._v("status bar doc page"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("demo4")],1)}),[function(){var t=this._self._c;return t("h1",{attrs:{id:"ag-grid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ag-grid"}},[this._v("#")]),this._v(" ag-Grid")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[this._v("#")]),this._v(" Introduction")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"basics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[this._v("#")]),this._v(" Basics")])},function(){var t=this._self._c;return t("p",[this._v("The grid only has one constructor "),t("code",[this._v("Grid")]),this._v(" with two parameters:")])},function(){var t=this._self._c;return t("ul",[t("li",[this._v("the "),t("code",[this._v("options")]),this._v(" containing user data and grid configuration")]),this._v(" "),t("li",[this._v("the "),t("code",[this._v("DOM element")]),this._v(" in which the grid is to be located")])])},function(){var t=this._self._c;return t("p",[this._v("After the grid is built, the API is accessible as a property of "),t("code",[this._v("options")]),this._v(".\nIt enables reshaping the grid, accessing data, etc.")])},function(){var t=this._self._c;return t("h3",{attrs:{id:"simple-grid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#simple-grid"}},[this._v("#")]),this._v(" Simple grid")])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Define the rows of the data to display")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" rowDat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Toyota"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("model")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Celica"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("price")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("35000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ford"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("model")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mondeo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("price")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Porsche"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("model")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Boxter"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("price")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("72000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set up the columns names")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" columnDef "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("headerName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Make"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("field")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"make"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("headerName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Model"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("field")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"model"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("headerName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Price"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("field")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"price"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add custom parameters")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" gridOptions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("columnDefs")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" columnDef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A bunch of different options.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enableFilter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("defaultColDef")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("editable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rowSelection")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"multiple"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enableSorting")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use an existing DOM element")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" gridDiv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#myGrid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("agGrid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Grid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gridDiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gridOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// API is available")]),t._v("\ngridOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRowData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rowDat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this._self._c;return t("p",[this._v("Note that you can select multiple line ("),t("code",[this._v("Ctrl+Click")]),this._v(" or "),t("code",[this._v("Cmd+Click")]),this._v("), sort, filter, move the\ncolumns, etc. A lot of defaults are intuitive, but nearly everything is "),t("strong",[this._v("customizable")]),this._v(".")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"advanced"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#advanced"}},[this._v("#")]),this._v(" Advanced")])},function(){var t=this._self._c;return t("h3",{attrs:{id:"grouping-and-pivoting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grouping-and-pivoting"}},[this._v("#")]),this._v(" Grouping and Pivoting")])},function(){var t=this._self._c;return t("h3",{attrs:{id:"rendering"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rendering"}},[this._v("#")]),this._v(" Rendering")])},function(){var t=this._self._c;return t("h3",{attrs:{id:"status-bar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#status-bar"}},[this._v("#")]),this._v(" Status Bar")])}],!1,null,null,null);a.default=e.exports}}]);