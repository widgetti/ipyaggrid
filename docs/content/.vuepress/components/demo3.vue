<template>
    <div>
        <ag-grid-vue style="width: 100%; height: 350px; margin: 10px"
                     class="ag-theme-balham"
                     :columnDefs="columnDefs"
                     :rowData="rowData"
                     :enableSorting="true"
                     :enableColResize="true"
                     rowSelection="multiple"
                     :animateRows="true"
                     :groupUseEntireRow="true"
                     :components="components"
                     :groupRowInnerRenderer="groupRowInnerRenderer"
                     :groupRowRendererParams="groupRowRendererParams"
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
  name: "demo3",
  data() {
    return {
      columnDefs: null,
      rowData: null,
      gridApi: null,
      columnApi: null,
      autoGroupColumnDef: null,
      components: null,
      groupRowInnerRenderer: null,
      groupRowRendererParams: null
    };
  },
  components: {
    AgGridVue
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
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
    function GroupRowInnerRenderer() {}

    GroupRowInnerRenderer.prototype.init = function(params) {
      this.eGui = document.createElement("div");
      this.eGui.style = "display: inline-block; vertical-align: middle";

      var flagCode = params.flagCodes[params.node.key];

      var html = "";
      if (flagCode) {
        html +=
          '<img class="flag" border="0" width="20" height="15" src="https://flags.fmcdn.net/data/flags/mini/' +
          flagCode +
          '.png">';
      }

      var node = params.node;
      var aggData = node.aggData;

      html += '<span class="groupTitle"> &nbsp COUNTRY_NAME</span>'.replace(
        "COUNTRY_NAME",
        node.key
      );
      html += '<span class="medal gold"> Gold: GOLD_COUNT</span>'.replace(
        "GOLD_COUNT",
        aggData.gold
      );
      html += '<span class="medal silver"> Silver: SILVER_COUNT</span>'.replace(
        "SILVER_COUNT",
        aggData.silver
      );
      html += '<span class="medal bronze"> Bronze: BRONZE_COUNT</span>'.replace(
        "BRONZE_COUNT",
        aggData.bronze
      );

      this.eGui.innerHTML = html;
    };

    GroupRowInnerRenderer.prototype.getGui = function() {
      return this.eGui;
    };

    this.components = { groupRowInnerRenderer: GroupRowInnerRenderer };
    this.groupRowInnerRenderer = "groupRowInnerRenderer";
    this.groupRowRendererParams = {
      flagCodes: {
        Andorra: "ad",
        "United Arab Emirates": "ae",
        Afghanistan: "af",
        "Antigua and Barbuda": "ag",
        Anguilla: "ai",
        Albania: "al",
        Armenia: "am",
        "Netherlands Antilles": "an",
        Angola: "ao",
        Antarctica: "aq",
        Argentina: "ar",
        "American Samoa": "as",
        Austria: "at",
        Australia: "au",
        Aruba: "aw",
        "Åland Islands": "ax",
        Azerbaijan: "az",
        "Bosnia and Herzegovina": "ba",
        Barbados: "bb",
        Bangladesh: "bd",
        Belgium: "be",
        "Burkina Faso": "bf",
        Bulgaria: "bg",
        Bahrain: "bh",
        Burundi: "bi",
        Benin: "bj",
        Bermuda: "bm",
        "Brunei Darussalam": "bn",
        Bolivia: "bo",
        Brazil: "br",
        Bahamas: "bs",
        Bhutan: "bt",
        "Bouvet Island": "bv",
        Botswana: "bw",
        Belarus: "by",
        Belize: "bz",
        Canada: "ca",
        "Cocos (Keeling) Islands": "cc",
        "Congo, The Democratic Republic of the": "cd",
        "Central African Republic": "cf",
        Congo: "cg",
        Switzerland: "ch",
        "Cote D'Ivoire": "ci",
        "Cook Islands": "ck",
        Chile: "cl",
        Cameroon: "cm",
        China: "cn",
        Colombia: "co",
        "Costa Rica": "cr",
        Cuba: "cu",
        "Cape Verde": "cv",
        "Christmas Island": "cx",
        Cyprus: "cy",
        "Czech Republic": "cz",
        Germany: "de",
        Djibouti: "dj",
        Denmark: "dk",
        Dominica: "dm",
        "Dominican Republic": "do",
        Algeria: "dz",
        Ecuador: "ec",
        Estonia: "ee",
        Egypt: "eg",
        "Western Sahara": "eh",
        Eritrea: "er",
        Spain: "es",
        Ethiopia: "et",
        "European Union": "eu",
        Finland: "fi",
        Fiji: "fj",
        "Falkland Islands (Malvinas)": "fk",
        "Micronesia, Federated States of": "fm",
        "Faroe Islands": "fo",
        France: "fr",
        Gabon: "ga",
        "Great Britain": "gb",
        Grenada: "gd",
        Georgia: "ge",
        "French Guiana": "gf",
        Guernsey: "gg",
        Ghana: "gh",
        Gibraltar: "gi",
        Greenland: "gl",
        Gambia: "gm",
        Guinea: "gn",
        Guadeloupe: "gp",
        "Equatorial Guinea": "gq",
        Greece: "gr",
        "South Georgia": "gs",
        Guatemala: "gt",
        Guam: "gu",
        "Guinea-Bissau": "gw",
        Guyana: "gy",
        "Hong Kong": "hk",
        "Heard Island and Mcdonald Islands": "hm",
        Honduras: "hn",
        Croatia: "hr",
        Haiti: "ht",
        Hungary: "hu",
        Indonesia: "id",
        Ireland: "ie",
        Israel: "il",
        "Isle of Man": "im",
        India: "in",
        "British Indian Ocean Territory": "io",
        Iraq: "iq",
        "Iran": "ir",
        Iceland: "is",
        Italy: "it",
        Jersey: "je",
        Jamaica: "jm",
        Jordan: "jo",
        Japan: "jp",
        Kenya: "ke",
        Kyrgyzstan: "kg",
        Cambodia: "kh",
        Kiribati: "ki",
        Comoros: "km",
        "Saint Kitts and Nevis": "kn",
        "North Korea": "kp",
        "South Korea": "kr",
        Kuwait: "kw",
        "Cayman Islands": "ky",
        Kazakhstan: "kz",
        "Lao People's Democratic Republic": "la",
        Lebanon: "lb",
        "Saint Lucia": "lc",
        Liechtenstein: "li",
        "Sri Lanka": "lk",
        Liberia: "lr",
        Lesotho: "ls",
        Lithuania: "lt",
        Luxembourg: "lu",
        Latvia: "lv",
        "Libyan Arab Jamahiriya": "ly",
        Morocco: "ma",
        Monaco: "mc",
        "Moldova": "md",
        Montenegro: "me",
        Madagascar: "mg",
        "Marshall Islands": "mh",
        "Macedonia": "mk",
        Mali: "ml",
        Myanmar: "mm",
        Mongolia: "mn",
        Macao: "mo",
        "Northern Mariana Islands": "mp",
        Martinique: "mq",
        Mauritania: "mr",
        Montserrat: "ms",
        Malta: "mt",
        Mauritius: "mu",
        Maldives: "mv",
        Malawi: "mw",
        Mexico: "mx",
        Malaysia: "my",
        Mozambique: "mz",
        Namibia: "na",
        "New Caledonia": "nc",
        Niger: "ne",
        "Norfolk Island": "nf",
        Nigeria: "ng",
        Nicaragua: "ni",
        Netherlands: "nl",
        Norway: "no",
        Nepal: "np",
        Nauru: "nr",
        Niue: "nu",
        "New Zealand": "nz",
        Oman: "om",
        Panama: "pa",
        Peru: "pe",
        "French Polynesia": "pf",
        "Papua New Guinea": "pg",
        Philippines: "ph",
        Pakistan: "pk",
        Poland: "pl",
        "Saint Pierre and Miquelon": "pm",
        Pitcairn: "pn",
        "Puerto Rico": "pr",
        "Palestinian Territory, Occupied": "ps",
        Portugal: "pt",
        Palau: "pw",
        Paraguay: "py",
        Qatar: "qa",
        Reunion: "re",
        Romania: "ro",
        Serbia: "rs",
        "Russia": "ru",
        Rwanda: "rw",
        "Saudi Arabia": "sa",
        "Solomon Islands": "sb",
        Seychelles: "sc",
        Sudan: "sd",
        Sweden: "se",
        Singapore: "sg",
        "Saint Helena": "sh",
        Slovenia: "si",
        "Svalbard and Jan Mayen": "sj",
        Slovakia: "sk",
        "Sierra Leone": "sl",
        "San Marino": "sm",
        Senegal: "sn",
        Somalia: "so",
        Suriname: "sr",
        "Sao Tome and Principe": "st",
        "El Salvador": "sv",
        "Syrian Arab Republic": "sy",
        Swaziland: "sz",
        "Turks and Caicos Islands": "tc",
        Chad: "td",
        "French Southern Territories": "tf",
        Togo: "tg",
        Thailand: "th",
        Tajikistan: "tj",
        Tokelau: "tk",
        "Timor-Leste": "tl",
        Turkmenistan: "tm",
        Tunisia: "tn",
        Tonga: "to",
        Turkey: "tr",
        "Trinidad and Tobago": "tt",
        Tuvalu: "tv",
        "Chinese Taipei": "tw",
        "Tanzania, United Republic of": "tz",
        Ukraine: "ua",
        Uganda: "ug",
        "United States Minor Outlying Islands": "um",
        "United States": "us",
        Uruguay: "uy",
        Uzbekistan: "uz",
        "Holy See (Vatican City State)": "va",
        "Saint Vincent and the Grenadines": "vc",
        Venezuela: "ve",
        "Virgin Islands, British": "vg",
        "Virgin Islands, U.S.": "vi",
        "Vietnam": "vn",
        Vanuatu: "vu",
        "Wallis and Futuna": "wf",
        Samoa: "ws",
        Kosovo: "xk",
        Yemen: "ye",
        Mayotte: "yt",
        "South Africa": "za",
        Zambia: "zm",
        Zimbabwe: "zw"
      }
    };
    function sportRendering(params) {
      if (params.value == "Swimming") {
        return "🏊 Swimming";
      } else if (params.value == "Athletics") {
        return "🏃 Athletics";
      } else if (params.value == "Archery") {
        return "🏹 Archery";
      } else if (params.value == "Equestrian") {
        return "🏇 Equestrian";
      }
      return params.value;
    }

    function goldRendering(params) {
      let res = '';
      if (params.value) {
        for (let i = 0; i < parseInt(params.value, 10); i += 1) {
          res = res + "🏅";
        }
      }
      return `<span style="color:gold">${res}</span>`;
    }

    function silverRendering(params) {
      let res = '';
      if (params.value) {
        for (let i = 0; i < parseInt(params.value, 10); i += 1) {
          res = res + "🏅";
        }
      }
      return `<span style="color:silver">${res}</span>`;
    }

    function bronzeRendering(params) {
      let res = '';
      if (params.value) {
        for (let i = 0; i < parseInt(params.value, 10); i += 1) {
          res = res + "🏅";
        }
      }
      return `<span style="color:#cd7f32">${res}</span>`;
    }

    function medalRendering(params) {
      let res = '';
      if (params.value) {
        for (let i = 0; i < parseInt(params.value, 10); i += 1) {
          res = res + "🏅";
        }
      }
      return `<span style="color:lightblue">${res}</span>`;
    }

    this.columnDefs = [
      { headerName: "Athlete", field: "athlete", width: 200 },
      {
        headerName: "Gold",
        field: "gold",
        width: 100,
        aggFunc: "sum",
        cellRenderer: goldRendering
      },
      {
        headerName: "Silver",
        field: "silver",
        width: 100,
        aggFunc: "sum",
        cellRenderer: silverRendering
      },
      {
        headerName: "Bronze",
        field: "bronze",
        width: 100,
        aggFunc: "sum",
        cellRenderer: bronzeRendering
      },
      {
        headerName: "Total",
        field: "total",
        width: 100,
        aggFunc: "sum",
        cellRenderer: medalRendering
      },
      {
        headerName: "Country",
        field: "country",
        width: 120,
        rowGroup: true,
        hide: true
      },
      {
        headerName: "Sport",
        field: "sport",
        width: 110,
        cellRenderer: sportRendering
      }
    ];
  }
};
</script>

<style>
</style>