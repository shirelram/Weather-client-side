import * as React from "react";
import {useState,useEffect} from 'react'
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

// const rows: GridRowsProp = [
//   { id: 1 ,col0: "LONDON" , col1: "27", col2: "25" ,col3: "20",col4:"30" },
//   { id: 2 ,col0: "FRANCE ", col1: "25", col2: "22",col3: "17",col4: "27" }
// ];

const columns: GridColDef[] = [
  { field: "id", hide: true },
  { field: "col0", headerName: "City", width: 150 },
  { field: "col1", headerName: "Temp", width: 150 },
  { field: "col2", headerName: "FeelsLike", width: 150 },
  { field: "col3", headerName: "TempMin", width: 150 },
  { field: "col4", headerName: "TempMax", width: 150 },
  { field: "col5", headerName: "Pressure", width: 150 },
  { field: "col6", headerName: "Humidity", width: 150 },
  { field: "col7", headerName: "Speed", width: 150 },
  { field: "col8", headerName: "Deg", width: 150 },
  { field: "col9", headerName: "Gust", width: 150 }
];

export default function WeatherDetails(props) {
  let [arr, setArr] = useState([]);
  let rows: GridRowsProp = arr
  useEffect(async function(){
    let rows: GridRowsProp = []
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:3050/getWeathersByUserId/"+props.props.userId, requestOptions)
      .then(response => {return response.json()})
      .then(result => {
        let newArr=[];
         result.weathers.weathers.forEach((value,key)=>{
          newArr[key]={}
          newArr[key].id=value._id
          newArr[key].col0=value.city
          newArr[key].col1=Math.round(value.main.temp-273)
          newArr[key].col2=Math.round(value.main.feels_like-273)
          newArr[key].col3=Math.round(value.main.temp_min-273)
          newArr[key].col4=Math.round(value.main.temp_max-273)
          newArr[key].col5=value.main.pressure
          newArr[key].col6=value.main.humidity
          newArr[key].col7=value.wind.speed
          newArr[key].col8=value.wind.deg
          newArr[key].col9=value.wind.gust
         })
         setArr(newArr)
      })
      .catch(error => alert('error'+ error.message));
},[])
const [select, setSelection] = React.useState([]);
return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns}  checkboxSelection 
                hideFooterPagination onSelectionChange={(newSelection) => {
                    setSelection(newSelection.rows);
                }} />
                 <h1>select: {select.map((val) => val.col0)}</h1>
    </div>
  );
}
