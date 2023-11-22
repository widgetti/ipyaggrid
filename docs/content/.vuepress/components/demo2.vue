<template>
    <div>
        <ag-grid-vue style="width: 100%; height: 350px; margin: 10px"
                     class="ag-theme-balham"
                     :columnDefs="columnDefs"
                     :rowData="rowData"
                     :enableSorting="true"
                     :enableFilter="true"
                     :pivotMode="true"
                     :enableColResize="true"
                     rowSelection="multiple"
                     :floatingFilter="true"

                     :gridReady="onGridReady">
        </ag-grid-vue>
    </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { setLicense } from "ag-grid-enterprise";

export default {
  name: "demo2",
  data() {
    return {
      columnDefs: null,
      rowData: null,
      gridApi: null,
      columnApi: null,
      autoGroupColumnDef: null,
      animateRows: null
    };
  },
  components: {
    AgGridVue
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      this.gridApi.sizeColumnsToFit();
      var httpRequest = new XMLHttpRequest();
      httpRequest.open(
        "GET",
        "https://raw.githubusercontent.com/widgetti/ipyaggrid/master/data/OlympicWinners.json"
      );
      httpRequest.send();
      httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
          var httpResult = JSON.parse(httpRequest.responseText);
          params.api.setRowData(httpResult);
        }
      };
    }
  },
  beforeMount() {
    this.columnDefs = [
      {
        headerName: "Country",
        field: "country",
        width: 120,
        rowGroup: true,
        enableRowGroup: true
      },
      {
        headerName: "Year",
        field: "year",
        width: 90,
        pivot: true,
        enablePivot: true
      },
      { headerName: "Date", field: "date", width: 110 },
      {
        headerName: "Sport",
        field: "sport",
        width: 110,
        rowGroup: true,
        enableRowGroup: true
      },
      { headerName: "Gold", field: "gold", width: 100, aggFunc: "sum" },
      { headerName: "Silver", field: "silver", width: 100, aggFunc: "sum" },
      { headerName: "Bronze", field: "bronze", width: 100, aggFunc: "sum" }
    ];
  }
};
</script>

<style>
</style>