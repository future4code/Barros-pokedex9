import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home/home.js';
import Detalhes from '../pages/Details/details';

const Routers = ()=> {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/:id" element={<Detalhes/>} />
                </Routes>
            </BrowserRouter>
       )
    }
export default Routers;