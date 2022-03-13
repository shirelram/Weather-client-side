import React, { useState } from 'react'
import {  useNavigate } from "react-router-dom";
import ClothingList from './clothingList';

export default function WeatherDetails(props){
    const navigate =  useNavigate();
    let [city, setCity] = useState("LONDON");
    let [Temp, setTemp] = useState("")
    let [FeelsLike, setFeelsLike] = useState("")
    let [TempMin, setTempMin] = useState("")
    let [TempMax, setTempMax] = useState("")
    let [Pressure, setPressure] = useState("")
    let [Humidity, setHumidity] = useState("")
    let [Speed, setSpeed] = useState("")
    let [Deg, setDeg] = useState("")
    let [Gust, setGust] = useState("")
    let [arrImg,setarrImg]=useState([])

    function setArrByNum(num){
        let newArrImg=[]
        for (let i = 0; i < 8; i++) { 
            
            if(i==0||i==5){
                newArrImg[i]={img: num+'-'+ (i+1) +'.PNG',rows: 2,cols: 2 } 
            }
            else if(i==3||i==4){
                newArrImg[i]={img: num+'-'+ (i+1) +'.PNG', cols: 2}   
            }
            else{
                newArrImg[i]={img: num+'-'+ (i+1) +'.PNG'}
            }
         }
    
         setarrImg(newArrImg) 
    }

    function setArrImgByTemp(Temp){
        if(Temp<11){
            setarrImg([{img:'WoolHat.PNG',rows: 2,cols: 2},
            {img:'gloves.PNG'},
            {img:'scarf.PNG'},
            {img:'sweater.PNG',cols: 2},
            {img:'https://images.unsplash.com/photo-1533827432537-70133748f5c8',cols: 2},
            {img:'cout.PNG',rows: 2,cols: 2},
            {img:'longBoots.PNG'},
            {img:'pants.PNG'}])
        }
        else if((Temp>10)&&(Temp<21)){
            setArrByNum(10)
        }
        else if((Temp>20)&&(Temp<31)){
            setArrByNum(20)
        }
        else if((Temp>30)){
            setArrByNum(30)
        }
    }

    function incHistory(){   

        navigate('/showHistory')
    }
    
    function inc(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", props.props.Token);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    fetch("http://localhost:3050/createWeatherByCity/"+props.props.userId+"/"+city, requestOptions)
        .then((response) => {
        return response.json();
        })
        .then((jsonObject) => {
            if(jsonObject.message!='City Not Found'){
           let {temp,feels_like,temp_min,temp_max,pressure,humidity}=jsonObject.newWeather.main
           let {speed,deg,gust}=jsonObject.newWeather.wind
            setTemp(Math.round(temp-273) );
            setFeelsLike(Math.round(feels_like-273));
            setTempMin(Math.round(temp_min-273));
            setTempMax(Math.round(temp_max-273));
            setPressure(pressure);
            setHumidity(humidity);
            setSpeed(speed);
            setDeg(deg);
            setGust(gust);

            setArrImgByTemp(Math.round(temp-273))
        }else{
            alert('City Not Found')
        }
        }).catch(error => alert('error to send '+ error.message )); 
      
    }
    return (
        <>
        <div className="container-fluid"> 
            <h1>HI USER {props.props.UserName}</h1>
            <br/>
            <label><h2>Please select a city</h2></label>
            <input value={city} onChange={(e) => { setCity(e.target.value) }}></input>
            <button onClick={inc}>OK</button>
            <br/>
            
           <div className="row"><h2>Main</h2></div>
           <div className="row"><h6>Temp: {Temp}</h6></div>
           <div className="row"><h6>Feels_like: {FeelsLike}</h6></div>
           <div className="row"><h6>Temp_min: {TempMin}</h6></div>
           <div className="row"><h6>Temp_max: {TempMax}</h6></div>
           <div className="row"><h6>Pressure: {Pressure}</h6></div>
           <div className="row"><h6>Humidity: {Humidity}</h6></div>
           <div className="row"><h2>Wind</h2></div>
           <div className="row"><h6>Speed: {Speed}</h6></div>
           <div className="row"><h6>Deg: {Deg}</h6></div>
           <div className="row"><h6>Gust: {Gust}</h6></div>
           
           <input type="button" value="show history" onClick={incHistory} style={{cursor: "pointer"}}/>
           {/* <button type="button" class="btn btn-warning"><a href="#/showHistory">show history</a></button> */}
        </div>
        
        <ClothingList arr={arrImg}></ClothingList>
        </>
    )

}
