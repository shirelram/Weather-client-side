import {Route, Routes,BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';

import Login from './component/login';
import Person from './component/exapmle';
import SignUp from './component/signUp';
import WeatherDetails from './component/weatherDetails'
import WeatherGrid from './component/weatherGrid';

//import Router from './component/router';

import './App.css';

function App() {
  const [props,setProps]= useState([]);

  return (
    <div className="App">
    <h1 style={{textAlign: "center"}}>My Weathers</h1>
    <Router>
    <Routes>
      <Route path="/" element={<Login send={data=> setProps(data)} />} />
      <Route path="/myForm" element={<Person />} />
      <Route path="/signUp" element={<SignUp send={data=> setProps(data)}/>} />
      <Route path="/weather" element={<WeatherDetails  props={props} />} />
      <Route path="/showHistory" element={<WeatherGrid props={props} />} />
    
    </Routes>  
    </Router>
    {/*
    <Router></Router>
     <Login></Login>
      <MyForm>
        <UserDetails></UserDetails>
        <Pic1>
           <Pic2  myImg='logo192.png'></Pic2>
        </Pic1>
        <Pic2 myImg='logo192.png'></Pic2>
        <Pic2 myImg='10X15.png'></Pic2>
      </MyForm>  */}

    </div>
  );
}

export default App;
