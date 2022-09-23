import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import NumberFloatingFilterComponent from "./chooseDataColumnDef"

const countryValueFormatter = (params) => {
  var value = params.value;
  console.log("first",value + ' (' + COUNTRY_CODES[value].toUpperCase() + ')')
  return value + ' (' + COUNTRY_CODES[value].toUpperCase() + ')';
};

var COUNTRY_CODES = {
  Ireland: 'ie',
  Luxembourg: 'lu',
  Belgium: 'be',
  Spain: 'es',
  France: 'fr',
  Germany: 'de',
  Sweden: 'se',
  Italy: 'it',
  Greece: 'gr',
  Iceland: 'is',
  Portugal: 'pt',
  Malta: 'mt',
  Norway: 'no',
  Brazil: 'br',
  Argentina: 'ar',
  Colombia: 'co',
  Peru: 'pe',
  Venezuela: 've',
  Uruguay: 'uy',
};

const CountryCellRenderer=(props) => {
    const [value, setValue] = useState();
  
    useEffect(() => {
      if (!props.value) {
        setValue(props.isFilterRenderer ? '(Blanks)' : props.value);
      } else if (props.value === '(Select All)') {
        setValue(props.value);
      } else {
        const url = `https://flags.fmcdn.net/data/flags/mini/${
          props.context.COUNTRY_CODES[props.value]
        }.png`;
        const flagImage = `<img class="flag" border="0" width="15" height="10" src="${url}">`;
  
        setValue(`${flagImage} ${props.value}`);
      }
    }, []);
  
    return <div dangerouslySetInnerHTML={{ __html: value }}></div>;
  };

const AggridReactTest = () => {
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ height: '50vh', width: '100%' }), []);
    const [rowData, setRowData] = useState();
    const [columnDefs, setColumnDefs] = useState([
      { field: 'athlete', filter: false },
      {
        field: 'gold',
        filter: 'agNumberColumnFilter',
        suppressMenu: true,
        floatingFilterComponent: NumberFloatingFilterComponent,
        floatingFilterComponentParams: {
          suppressFilterButton: true,
          color: 'red',
        },
      },
      {
        field: 'silver',
        filter: 'agNumberColumnFilter',
        suppressMenu: true,
        floatingFilterComponent: NumberFloatingFilterComponent,
        floatingFilterComponentParams: {
          suppressFilterButton: true,
          color: 'blue',
        },
      },
      {
        field: 'bronze',
        filter: 'agNumberColumnFilter',
        suppressMenu: true,
        floatingFilterComponent: NumberFloatingFilterComponent,
        floatingFilterComponentParams: {
          suppressFilterButton: true,
          color: 'green',
        },
      },
      {
        field: 'total',
        filter: 'agNumberColumnFilter',
        suppressMenu: true,
        floatingFilterComponent: NumberFloatingFilterComponent,
        floatingFilterComponentParams: {
          suppressFilterButton: true,
          color: 'orange',
        },
      },
    ]);
    const defaultColDef = useMemo(() => {
      return {
        editable: true,
        sortable: true,
        flex: 1,
        minWidth: 100,
        filter: true,
        floatingFilter: true,
        resizable: true,
      };
    }, []);
  
    const onGridReady = useCallback((params) => {
      fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
        .then((resp) => resp.json())
        .then((data) => {
          setRowData(data);
        });
    }, []);
  
    return (
      <div style={containerStyle}>
        <div style={gridStyle} className="ag-theme-alpine">
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}
          ></AgGridReact>
        </div>
      </div>
    );
  };

export default AggridReactTest;