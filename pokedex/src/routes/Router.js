import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokeListScreen from '../screen/PokeListScreen/PokeListScreen';


function Router () {
  
    return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<PokeListScreen />} />
  
      </Routes>
    </BrowserRouter>
    </div>
  )}

  export default Router;