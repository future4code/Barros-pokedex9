import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from '../screen/Details/details';
import PokeListScreen from '../screen/PokeListScreen/PokeListScreen';


function Router () {
  
    return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<PokeListScreen />} />
        <Route path="/details/:id" element={<Details/>} />
  
      </Routes>
    </BrowserRouter>
    </div>
  )}

  export default Router;