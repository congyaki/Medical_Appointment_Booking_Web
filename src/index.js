import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import Service from './views/Service/Service';
import './styles/global.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './views/Account/Register.js';
import Login from './views/Account/Login.js';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='service' element={<Service />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='login' element={<Login />}></Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

