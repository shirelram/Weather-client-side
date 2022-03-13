import React, { useState, useEffect } from 'react';
import Login from './login';
import Person from './exapmle';
import SignUp from './signUp';
import WeatherDetails from './weatherDetails'
import WeatherGrid from './weatherGrid';

function Router() {
    const [route, setRoute] = useState(window.location.hash.substr(1));
    useEffect(() => {
        window.addEventListener('hashchange', () => {
        setRoute(window.location.hash.substr(1));
        })
    }, []);

    let Child;
    function getChild() {
    switch (route) {
        case '/myForm':
            Child = Person;
            break;
        case '/signUp':
            Child = SignUp;
            break;
        case '/weather':
            Child = WeatherDetails;
            break;
        case '/showHistory':
            Child = WeatherGrid;
            break;
        default:
            Child = Login;
    }
}   
return (
    <>
    {getChild()}
    <h1>App</h1>
    <ul>
        <li><a href="#/myForm">MyForm</a></li>
        <li><a href="#/login">Login</a></li>
    </ul>
    <Child />

    </>
);
}
export default Router;