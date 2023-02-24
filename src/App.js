import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/pages/Home/Home';
import "./App.css"
import Teem from "./Components/pages/Teem/Teem";
import BeerFlavors from './Components/pages/Home/BeerFlavors';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/teem' element={<Teem/>}/>
          <Route path='menu' element={<div className='main__beer__Flavors'><BeerFlavors isMain={true}/></div>}/>
          <Route path='*' element={<div>error</div>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;